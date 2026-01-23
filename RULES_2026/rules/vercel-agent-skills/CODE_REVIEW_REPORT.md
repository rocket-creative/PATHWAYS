# Vercel Agent Skills - Code Review Report

**Date:** January 22, 2026  
**Project:** Vela Photo 2.0  
**Skills Applied:** react-best-practices, web-design-guidelines

---

## Executive Summary

This report contains findings from running Vercel's React Best Practices and Web Design Guidelines skills against the Vela Photo codebase. Issues are categorized by priority and impact.

**Overall Status:** ✅ **Good** - Most code follows best practices. Several optimization opportunities identified.

---

## 🔴 CRITICAL Priority Issues

### 1. Async Waterfall in File Generation Route

**File:** `src/app/api/weddings/[id]/generate-files/route.ts`  
**Lines:** 14-54  
**Issue:** Sequential database queries create a waterfall pattern

**Current Code:**
```typescript
// Get wedding data
const { data: wedding, error: weddingError } = await supabase
  .from('weddings')
  .select('*')
  .eq('id', id)
  .single();

// Get getting ready data
const { data: gettingReady } = await supabase
  .from('getting_ready')
  .select('*')
  .eq('wedding_id', id)
  .single();

// Get shot list data
const { data: shotList } = await supabase
  .from('shot_lists')
  .select('*')
  .eq('wedding_id', id)
  .single();

// Get timeline events
const { data: timelineEvents } = await supabase
  .from('timeline_events')
  .select('*')
  .eq('wedding_id', id)
  .order('sequence_order', { ascending: true });

// Get photographer for branding
const { data: photographer } = await supabase
  .from('photographers')
  .select('*')
  .eq('id', wedding.photographer_id)
  .single();
```

**Problem:** 5 sequential database queries. If each takes 50ms, total time is 250ms.

**Solution:** Use `Promise.all()` for independent queries:
```typescript
// Start all independent queries immediately
const weddingPromise = supabase
  .from('weddings')
  .select('*')
  .eq('id', id)
  .single();

const gettingReadyPromise = supabase
  .from('getting_ready')
  .select('*')
  .eq('wedding_id', id)
  .single();

const shotListPromise = supabase
  .from('shot_lists')
  .select('*')
  .eq('wedding_id', id)
  .single();

const timelineEventsPromise = supabase
  .from('timeline_events')
  .select('*')
  .eq('wedding_id', id)
  .order('sequence_order', { ascending: true });

// Await wedding first (needed for photographer query)
const { data: wedding, error: weddingError } = await weddingPromise;

if (weddingError || !wedding) {
  return NextResponse.json(
    { success: false, error: { code: 'NOT_FOUND', message: 'Wedding not found' } },
    { status: 404 }
  );
}

// Now await all remaining queries in parallel
const [
  { data: gettingReady },
  { data: shotList },
  { data: timelineEvents },
  { data: photographer }
] = await Promise.all([
  gettingReadyPromise,
  shotListPromise,
  timelineEventsPromise,
  supabase
    .from('photographers')
    .select('*')
    .eq('id', wedding.photographer_id)
    .single()
]);
```

**Impact:** Reduces response time from ~250ms to ~100ms (2.5× faster)

---

### 2. Sequential API Calls in Form Submission

**File:** `src/app/invite/[token]/page.tsx`  
**Lines:** 191-228  
**Issue:** Three sequential fetch calls that could be optimized

**Current Code:**
```typescript
// Update wedding with form data
const response = await fetch(`/api/weddings/${invitation.wedding_id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

const result = await response.json();

if (!result.success) {
  setError(result.error?.message || 'Failed to submit form');
  setIsSubmitting(false);
  return;
}

// Mark invitation as completed
await fetch(`/api/invite/${token}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    status: 'completed',
    progress_percent: 100,
    current_step: allSteps.length - 1,
  }),
});

// Generate files
await fetch(`/api/weddings/${invitation.wedding_id}/generate-files`, {
  method: 'POST',
});
```

**Problem:** The file generation doesn't need to block the user. It can happen in the background.

**Solution:** Use `after()` for non-blocking file generation, or fire it without awaiting:
```typescript
// Update wedding with form data
const response = await fetch(`/api/weddings/${invitation.wedding_id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

const result = await response.json();

if (!result.success) {
  setError(result.error?.message || 'Failed to submit form');
  setIsSubmitting(false);
  return;
}

// Mark invitation as completed (can run in parallel with file generation)
const [inviteResult] = await Promise.all([
  fetch(`/api/invite/${token}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'completed',
      progress_percent: 100,
      current_step: allSteps.length - 1,
    }),
  }),
  // Generate files in background (don't await)
  fetch(`/api/weddings/${invitation.wedding_id}/generate-files`, {
    method: 'POST',
  }).catch(err => console.error('File generation failed:', err))
]);

// Clear saved progress
localStorage.removeItem(`couple-form-${token}`);

// Show success and redirect immediately
alert('Thank you! Your wedding form has been submitted successfully.');
router.push(`/invite/${token}/thank-you`);
```

**Impact:** Faster user feedback, better UX

---

## 🟡 HIGH Priority Issues

### 3. Using `.sort()` Instead of `.toSorted()`

**Files:**
- `src/lib/file-generators.ts` (lines 77, 161)
- `src/components/intake/LiveTimelinePreview.tsx` (line 292)
- `src/hooks/useTraditionsTimeline.ts` (line 122)

**Issue:** `.sort()` mutates arrays, which can cause bugs with React state

**Current Code:**
```typescript
const sortedEvents = [...timelineEvents].sort((a, b) => a.sequence_order - b.sequence_order);
```

**Solution:** Use `.toSorted()` for immutability:
```typescript
const sortedEvents = timelineEvents.toSorted((a, b) => a.sequence_order - b.sequence_order);
```

**Note:** `.toSorted()` is available in all modern browsers (Chrome 110+, Safari 16+, Firefox 115+). For older environments, the spread operator approach is fine, but `.toSorted()` is cleaner.

**Impact:** Prevents potential React state mutation bugs

---

### 4. Missing React.cache() for Server-Side Deduplication

**File:** Multiple API routes  
**Issue:** Database queries and auth checks aren't using `React.cache()` for per-request deduplication

**Example:** `src/app/api/weddings/[id]/generate-files/route.ts`

**Solution:** Wrap database queries with `React.cache()`:
```typescript
import { cache } from 'react';

const getWedding = cache(async (id: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('weddings')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
});
```

**Impact:** Prevents duplicate queries within the same request

---

## 🟢 MEDIUM Priority Issues

### 5. useState Without Lazy Initialization

**File:** `src/app/invite/[token]/page.tsx`  
**Lines:** 94-105  
**Issue:** localStorage read happens on every render

**Current Code:**
```typescript
useEffect(() => {
  const saved = localStorage.getItem(`couple-form-${token}`);
  if (saved) {
    try {
      const { formData, currentStep: savedStep } = JSON.parse(saved);
      methods.reset(formData);
      setCurrentStep(savedStep || 1);
    } catch (e) {
      console.error('Error loading saved progress:', e);
    }
  }
}, []);
```

**Note:** This is actually fine since it's in a `useEffect`, but if you were using `useState` with localStorage, you'd want lazy initialization.

**Status:** ✅ No change needed - already optimized

---

### 6. Console.log Statements in Production

**Files:** Multiple  
**Issue:** Console statements should be replaced with proper logging

**Found in:**
- `src/app/api/weddings/[id]/generate-files/route.ts` (lines 106, 119)
- `src/app/invite/[token]/page.tsx` (line 102)

**Solution:** Use the existing logger:
```typescript
import { logger } from '@/lib/logger';

// Instead of:
console.error('Error saving files:', fileError);

// Use:
logger.error('Error saving files', fileError, { wedding_id: id });
```

**Impact:** Better observability, no console clutter

---

## ✅ Good Practices Found

1. **No barrel file imports** - Direct imports are used throughout ✅
2. **Proper error handling** - Try-catch blocks are present ✅
3. **TypeScript strict mode** - Type safety is enforced ✅
4. **Next.js App Router** - Modern routing patterns ✅
5. **Proper authentication checks** - Auth is verified in API routes ✅

---

## Recommendations Summary

### Immediate Actions (Critical)
1. ✅ Fix async waterfall in `generate-files/route.ts` using `Promise.all()`
2. ✅ Optimize form submission to not block on file generation

### High Priority
3. ✅ Replace `.sort()` with `.toSorted()` in 3 files
4. ✅ Add `React.cache()` to database query functions

### Medium Priority
5. ✅ Replace `console.log/error` with logger utility
6. ✅ Review other API routes for parallelization opportunities

---

## Next Steps

1. Create a task list for implementing these fixes
2. Run the review again after fixes are applied
3. Consider adding these checks to CI/CD pipeline

---

**Review Completed:** January 22, 2026  
**Reviewed By:** Vercel Agent Skills (react-best-practices)

# Architecture Gap Analysis — Current State vs Expected
**Created:** January 25, 2026  
**Status:** Critical architecture mismatch identified

---

## 🚨 MAJOR GAP: Monorepo Structure Missing

### Expected Architecture (from README/docs)
```
pathways-within/
├── apps/
│   ├── main/          # Main site → pathwayswithin.com (port 3000)
│   ├── wisdom/        # Therapy site → wisdom.pathwayswithin.com (port 3001)
│   ├── wellness/      # Wellness site → wellness.pathwayswithin.com (port 3002)
│   └── crm/           # Internal CRM
├── packages/
│   ├── ui/            # Shared components
│   └── config/        # Shared Tailwind/config
├── public/            # Shared assets
└── docs/
```

### Actual Current Structure
```
pathways-within/
├── src/app/           # Single Next.js app with ALL routes
│   ├── wisdom/        # ❌ Should be separate app
│   ├── wellness/      # ❌ Should be separate app
│   ├── crm/           # ❌ Should be separate app
│   ├── about/
│   ├── contact/
│   └── ...
├── public/
└── docs/
```

**NO** `apps/` directory  
**NO** `packages/` directory  
**NO** separate deployable apps

---

## Current Deployment Reality

| Site | Expected | Actual | Status |
|------|----------|--------|--------|
| **Wisdom** | Separate app at `apps/wisdom/` | Routes in `/src/app/wisdom/*` | ✅ Deployed at wisdom-eight-topaz.vercel.app |
| **Wellness** | Separate app at `apps/wellness/` | Routes in `/src/app/wellness/*` | ✅ Deployed at wellness-phi-three.vercel.app |
| **CRM** | Separate app at `apps/crm/` | Routes in `/src/app/crm/*` | ✅ Deployed at crm-sooty-one.vercel.app |
| **Main** | Separate app at `apps/main/` | Routes in `/src/app/*` (root level) | ❓ Deployed somewhere? |

### How This Is Working

Despite having a single Next.js app, there are **multiple Vercel deployments** pointing to different routes:

1. **Wisdom deployment** - Configured to show only `/wisdom/*` routes
2. **Wellness deployment** - Configured to show only `/wellness/*` routes  
3. **CRM deployment** - Configured to show only `/crm/*` routes
4. **Main deployment** - Needs to show root routes (`/`, `/about`, `/contact`, etc.)

This is achieved via **Vercel rewrites** or **Next.js basePath configuration**.

---

## The "2 Branches" Issue

### What "2 branches" likely refers to:

**Option 1:** Deploy from different Git branches
- Branch 1: `wisdom` branch → deploys wisdom-specific code
- Branch 2: `main` branch → deploys main site code
- Problem: Single app can't cleanly split this way

**Option 2:** Need monorepo with separate apps (proper solution)
- App 1: `apps/wisdom/` → separate Next.js app
- App 2: `apps/wellness/` → separate Next.js app
- But this requires restructuring

**Option 3:** Current approach (what's working now)
- Single Next.js app
- Multiple Vercel projects pointing to same repo
- Each Vercel project configured to serve different routes
- Works but not ideal

---

## Critical Questions to Answer

1. **How are the 3 live sites deployed from a single Next.js app?**
   - Is there `vercel.json` configuration?
   - Are there separate Vercel projects pointing to different subdirectories?
   - How is routing isolated per deployment?

2. **Do we restructure to proper monorepo OR keep single app with route-based separation?**
   - User said "fix what we have, we can't start over"
   - This suggests: Keep single app, fix the deployment configuration

3. **What needs "2 branches"?**
   - Separate deployments for Wisdom vs Main/Wellness?
   - Different build configurations?

---

## What Happened: The Simplification

Looking at git history and `/old` directory:

1. **Original architecture** (in `/old`):
   - True monorepo with pnpm workspaces
   - Separate apps: `old/apps/wisdom/`, `old/apps/wellness/`, `old/apps/crm/`
   - Shared packages: `old/packages/ui/`, `old/packages/config/`
   - Each app independently deployable

2. **Current architecture** (simplified):
   - Single Next.js app
   - Routes organized by domain: `/wisdom/*`, `/wellness/*`, `/crm/*`
   - All code in one `src/app/` directory
   - Entire app deployed to each Vercel project

---

## How Current Deployment Works (Single App → Multiple Sites)

**vercel.json** shows:
```json
{
  "name": "pathways-main",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

**Deployment Strategy:**
- Same codebase deployed to 3+ Vercel projects:
  1. **wisdom-eight-topaz.vercel.app** → Configured to serve `/wisdom/*` routes
  2. **crm-sooty-one.vercel.app** → Configured to serve `/crm/*` routes  
  3. **pathways-main.vercel.app** → Main site (root + other routes)
  4. Possibly wellness deployment too

**This works via:**
- Vercel rewrites/redirects configuration per project
- Or Next.js middleware filtering routes
- Or basePath configuration per deployment

---

## The "2 Branches" Solution

### Current Issue:
All sites deploy from `main` branch → same code, different Vercel configurations

### Recommended Fix (Without Starting Over):

**Option A: Keep Single App, Fix Deployment**
1. Create Vercel configuration for each site:
   - `vercel.wisdom.json` - Only builds wisdom routes
   - `vercel.main.json` - Only builds main routes
   - `vercel.wellness.json` - Only builds wellness routes
2. Each Vercel project uses different config file
3. Optimize: Each build only includes needed routes

**Option B: Use Git Branches for Deployments**
1. `main` branch → Main site deployment
2. `wisdom` branch → Wisdom site deployment
3. Each branch has different next.config.js basePath or rewrites
4. Merge changes to both branches as needed

**Option C: Create Minimal Monorepo (Best Long-Term)**
1. Create `apps/` directory
2. Move routes into separate apps:
   - `apps/main/` - Root routes (/, /about, /contact, etc.)
   - `apps/wisdom/` - Wisdom routes (becomes root in this app)
   - `apps/wellness/` - Wellness routes (becomes root in this app)
3. Share components via `packages/ui`
4. Each app deploys independently
5. NO need to rebuild everything - just reorganize files

---

## Current Problems

### 1. Inefficient Builds
- Deploying entire app (wisdom + wellness + crm + main) to each site
- Each Vercel project builds code it doesn't use
- Larger bundle sizes than necessary

### 2. Route Conflicts
- All routes in same app means conflicts possible
- /about exists in wisdom, wellness, AND main
- Hard to maintain separate metadata/SEO per site

### 3. Configuration Complexity
- Need different environment variables per site
- Rewrites/redirects get complicated
- Hard to test sites in isolation

### 4. NY State Compliance Risk
- If routes aren't properly isolated, therapy/wellness could cross-contaminate
- Need clear separation for regulatory compliance

---

## Recommended Action Plan (Fix Without Starting Over)

### Phase 1: Create Proper Monorepo Structure (2-4 hours)

**Step 1:** Create directory structure
```bash
mkdir -p apps/main apps/wisdom apps/wellness
mkdir -p packages/ui packages/config
```

**Step 2:** Move routes to appropriate apps
- `src/app/wisdom/*` → `apps/wisdom/src/app/*` (remove /wisdom prefix)
- `src/app/wellness/*` → `apps/wellness/src/app/*` (remove /wellness prefix)
- `src/app/crm/*` → `apps/crm/src/app/*` (remove /crm prefix)
- Root routes (/, /about, /contact, etc.) → `apps/main/src/app/*`

**Step 3:** Move shared components
- `src/components/layout/*` → `packages/ui/src/layout/*`
- `src/components/sections/*` → `packages/ui/src/sections/*`
- `src/lib/*` → `packages/ui/src/lib/*` (shared utils)

**Step 4:** Configure each app
- Add `package.json` to each app
- Configure separate `next.config.js` per app
- Set up pnpm workspace (copy from `/old/pnpm-workspace.yaml`)

**Step 5:** Update Vercel deployments
- Each app deploys from its own directory
- Set Root Directory in Vercel per project:
  - Wisdom project → Root Directory: `apps/wisdom`
  - Wellness project → Root Directory: `apps/wellness`
  - Main project → Root Directory: `apps/main`

### Phase 2: Test & Verify (1-2 hours)
- Test each app builds independently
- Verify navigation works across sites
- Check all images/assets load correctly
- Test forms and APIs

### Phase 3: Deploy (30 mins)
- Update Vercel project settings
- Redeploy each site
- Verify live sites work

---

## Alternative: Quick Fix (If No Time for Restructure)

### Keep single app, use environment-based configuration

1. Use `NEXT_PUBLIC_SITE_TYPE` env var to control which routes are active
2. Add middleware to redirect unwanted routes per deployment
3. Configure each Vercel project with different env var

**Not recommended** - still deploys unnecessary code, harder to maintain

---

## Gap Analysis Summary

### ✅ What's Working
- Design system is consistent and locked in
- All content exists and is organized
- Forms work (contact, client-intake, business-intake)
- Email sending works (Resend configured)
- Navigation updated with all services
- Live deployments for wisdom, wellness, CRM

### ❌ Critical Gaps

| Gap | Impact | Priority | Fix Effort |
|-----|--------|----------|------------|
| **No monorepo structure** | Inefficient builds, larger bundles, harder to maintain | 🔴 Critical | 2-4 hours |
| **All routes in single app** | Route conflicts, SEO issues, compliance risk | 🔴 Critical | 2-4 hours |
| **No separate deployments** | Deploys unnecessary code to each site | 🟡 Medium | 30 mins after monorepo |
| **README describes wrong architecture** | Confusing for developers | 🟢 Low | 15 mins |

### ⚠️ Medium Issues

| Issue | Impact | Priority | Fix Effort |
|-------|--------|----------|------------|
| FAQ missing categories | Less helpful for users | 🟡 Medium | 1 hour |
| Service FAQs missing | Users can't find info | 🟡 Medium | 2 hours |
| Missing content from old build | See GAP-ANALYSIS-OLD-VS-NEW-BUILD.md | 🟡 Medium | Varies |

### 📋 Minor Issues

- Contact form missing "How did you hear about us" (exists in code, just not visible?)
- Good faith estimate exists but not linked everywhere
- Some team member photos needed updating (✅ DONE)

---

## THE FIX: Restructure to Proper Monorepo

I recommend restructuring to match the documented architecture. This:
- Takes 2-4 hours of focused work
- Doesn't require rewriting code (just moving files)
- Fixes all critical gaps at once
- Makes future maintenance easier
- Proper NY State compliance

### What This Involves:

1. **Create monorepo structure** (like `/old` had)
2. **Move files** to appropriate apps
3. **Extract shared components** to packages
4. **Configure builds** per app
5. **Update Vercel** deployments
6. **Test and deploy**

### What This Does NOT Involve:
- ❌ Rewriting any code
- ❌ Changing design or content
- ❌ Breaking existing features  
- ❌ Starting over

It's a **reorganization**, not a rebuild.

---

## Decision Required

**You said: "we def need 2 branches and we just have to fix what we have we can't start over"**

I interpret this as needing proper separation between sites. Here are your options:

### Option 1: Proper Monorepo (RECOMMENDED)
- **Time:** 2-4 hours
- **Effort:** Medium (file reorganization)
- **Benefit:** Clean architecture, proper separation, easier maintenance
- **Risk:** Low (just moving files, not rewriting)

### Option 2: Keep Single App, Fix Configs  
- **Time:** 1-2 hours
- **Effort:** Low (config changes only)
- **Benefit:** Quick fix
- **Risk:** Medium (technical debt remains, future issues likely)

### Option 3: Do Nothing
- **Time:** 0
- **Benefit:** Sites work now
- **Risk:** High (inefficient, compliance risk, maintenance nightmare)

---

## My Recommendation

**Do Option 1: Restructure to Proper Monorepo**

Why:
- You already have the pattern in `/old` to follow
- Only 2-4 hours of work
- Fixes all critical gaps
- Future-proofs the project
- Proper NY State compliance
- Easier to maintain long-term

I can do this now if you approve. The existing sites will keep working during the transition.

---

## What Do You Want Me To Do?

Reply with:
1. **"Do the monorepo restructure"** - I'll reorganize into proper architecture (2-4 hours)
2. **"Quick fix only"** - I'll just fix deployment configs (1-2 hours)  
3. **"Explain more"** - I'll clarify anything about the options

Your call.

# Simple Vercel Setup - One Repo, Multiple Domains
**Created:** January 25, 2026  
**Goal:** Clean, simple deployment with proper domain mapping

---

## Current Problem

- ❌ Confusing project names (wisdom-eight-topaz, etc.)
- ❌ Multiple Vercel projects for one repo
- ❌ Complicated to maintain

## Simple Solution

**One repo → Four Vercel projects → Four domains**

Each domain shows only its relevant pages from the single codebase.

---

## Proposed Setup

### Vercel Projects (Rename to Simple Names)

| Project Name | Domain | Shows These Pages |
|--------------|--------|-------------------|
| **pathways-wisdom** | wisdom.pathwayswithin.com | /wisdom/* → becomes / |
| **pathways-wellness** | wellness.pathwayswithin.com | /wellness/* → becomes / |
| **pathways-crm** | crm.pathwayswithin.com | /crm/* → becomes / |
| **pathways-main** | pathwayswithin.com | / /about /contact /locations etc. |

---

## How It Works

### Option 1: Vercel Rewrites (Recommended - No Code Changes)

Each Vercel project uses a different `vercel.json` config:

#### pathways-wisdom (wisdom.pathwayswithin.com)
```json
{
  "name": "pathways-wisdom",
  "rewrites": [
    { "source": "/", "destination": "/wisdom" },
    { "source": "/:path*", "destination": "/wisdom/:path*" }
  ]
}
```

#### pathways-wellness (wellness.pathwayswithin.com)
```json
{
  "name": "pathways-wellness",
  "rewrites": [
    { "source": "/", "destination": "/wellness" },
    { "source": "/:path*", "destination": "/wellness/:path*" }
  ]
}
```

#### pathways-crm (crm.pathwayswithin.com)
```json
{
  "name": "pathways-crm",
  "rewrites": [
    { "source": "/", "destination": "/crm" },
    { "source": "/:path*", "destination": "/crm/:path*" }
  ]
}
```

#### pathways-main (pathwayswithin.com)
```json
{
  "name": "pathways-main"
}
```

---

## Implementation Steps

### Step 1: Rename Vercel Projects

For each project in Vercel Dashboard:

1. **wisdom-eight-topaz** → Rename to **pathways-wisdom**
   - Settings → General → Project Name
   - Change to: `pathways-wisdom`

2. **wellness-phi-three** → Rename to **pathways-wellness**
   - Settings → General → Project Name
   - Change to: `pathways-wellness`

3. **crm-sooty-one** → Rename to **pathways-crm**
   - Settings → General → Project Name
   - Change to: `pathways-crm`

4. Keep main as **pathways-main**

### Step 2: Create Environment-Specific Config Files

We'll create separate vercel config files for each deployment:

**In repo root:**
```
vercel.wisdom.json
vercel.wellness.json
vercel.crm.json
vercel.main.json
```

### Step 3: Configure Each Vercel Project

For each project:

1. **Settings** → **General** → **Build & Development Settings**
2. **Override:** Yes
3. **Build Command:** `npm run build`
4. **Output Directory:** `.next`

### Step 4: Add Custom Domains

For each project:

1. **Settings** → **Domains**
2. Add your domain:
   - pathways-wisdom: `wisdom.pathwayswithin.com`
   - pathways-wellness: `wellness.pathwayswithin.com`
   - pathways-crm: `crm.pathwayswithin.com`
   - pathways-main: `pathwayswithin.com` and `www.pathwayswithin.com`

---

## Configuration Files to Create

I'll create these files for you - each Vercel project will use its corresponding config.

---

## User Experience

### What Users See:

**wisdom.pathwayswithin.com**
- URL shows: `wisdom.pathwayswithin.com/services/individual-therapy`
- Actually serves: `/wisdom/services/individual-therapy` from your app
- Clean, professional URL

**wellness.pathwayswithin.com**
- URL shows: `wellness.pathwayswithin.com/services/massage`
- Actually serves: `/wellness/services/massage` from your app
- Clean, professional URL

**pathwayswithin.com**
- URL shows: `pathwayswithin.com/about`
- Serves: `/about` from your app
- Main marketing site

### Navigation Between Sites

Your navigation component already handles cross-site links. With proper rewrites:
- Click "Therapy" → Goes to `wisdom.pathwayswithin.com`
- Click "Wellness" → Goes to `wellness.pathwayswithin.com`
- Click "About" → Goes to `pathwayswithin.com/about`

Seamless for users! ✅

---

## Benefits

✅ **Simple project names** (pathways-wisdom vs wisdom-eight-topaz)  
✅ **Professional domains** (wisdom.pathwayswithin.com vs wisdom-eight-topaz.vercel.app)  
✅ **One codebase** - maintain one repo, deploys to all sites  
✅ **NY State compliant** - separate domains for therapy/wellness  
✅ **Zero user disruption** - pages look and work exactly the same

---

## Deployment Strategy

### Production (main branch):
- pathways-wisdom → wisdom.pathwayswithin.com
- pathways-wellness → wellness.pathwayswithin.com
- pathways-crm → crm.pathwayswithin.com
- pathways-main → pathwayswithin.com

### Staging (dev branch):
- pathways-wisdom → wisdom-dev.vercel.app
- pathways-wellness → wellness-dev.vercel.app
- pathways-crm → crm-dev.vercel.app
- pathways-main → main-dev.vercel.app

---

## Ready to Implement?

I'll create the config files now and give you step-by-step Vercel configuration instructions.

**Shall I proceed?**

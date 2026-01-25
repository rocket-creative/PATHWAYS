# Deployment Architecture - Simplified

**Last Updated:** January 25, 2026

---

## Git Structure (Simple)

### ✅ 2 Branches Only:

```
main (production)
  └── All production deployments
  
dev (staging/preview)
  └── All preview/testing deployments
```

**Workflow:**
1. Work on `dev` branch
2. Test on preview URLs
3. Merge `dev` → `main` for production
4. Production auto-deploys

---

## Vercel Structure (4 Projects, 8 Deployments)

### ✅ 4 Vercel Projects (Not 8!)

Each project deploys from **BOTH** branches automatically:

| Project Name | Production (main) | Preview (dev) |
|--------------|-------------------|---------------|
| **pathways-main** | pathwayswithin.com | main-dev-xyz.vercel.app |
| **pathways-wisdom** | wisdom.pathwayswithin.com | wisdom-dev-xyz.vercel.app |
| **pathways-wellness** | wellness.pathwayswithin.com | wellness-dev-xyz.vercel.app |
| **pathways-crm** | crm.pathwayswithin.com | crm-dev-xyz.vercel.app |

**Total:** 4 projects → 8 deployments (4 production + 4 preview)

---

## Why 4 Projects (Not 8)?

### Option 1: 4 Projects ✅ (RECOMMENDED)
**Setup:**
- Each project configured for:
  - Production Branch: `main`
  - Preview Branch: `dev`
- Vercel automatically creates preview URLs

**Benefits:**
- ✅ Simple to manage (4 projects)
- ✅ Automatic preview deployments
- ✅ Less configuration
- ✅ Easier to maintain

### Option 2: 8 Projects ❌ (NOT RECOMMENDED)
**Setup:**
- 4 production projects (deploy from `main`)
- 4 staging projects (deploy from `dev`)

**Problems:**
- ❌ Double the maintenance (8 projects)
- ❌ More complex configuration
- ❌ No benefit over automatic previews
- ❌ Harder to sync settings

---

## Current Status

### Git (GitHub):
- ✅ `main` branch → production ready
- ✅ `dev` branch → preview/testing
- 🧹 Old branches cleaned up

### Vercel:
- ⚠️ Only 1 project visible: `pathways-8h3u`
- ❌ Need to create 3 more projects:
  - pathways-wisdom
  - pathways-wellness
  - pathways-crm

---

## Setup Steps for Vercel

### Step 1: Import Repo 4 Times

Go to: https://vercel.com/georges-projects-3ea4d6aa

**Import 1: Main Site**
1. Add New → Project
2. Import: `rocket-creative/PATHWAYS`
3. Name: `pathways-main`
4. Root Directory: (leave blank)
5. Deploy

**Import 2: Wisdom Site**
1. Add New → Project
2. Import: `rocket-creative/PATHWAYS` (same repo!)
3. Name: `pathways-wisdom`
4. Root Directory: (leave blank)
5. Deploy

**Import 3: Wellness Site**
1. Add New → Project
2. Import: `rocket-creative/PATHWAYS` (same repo!)
3. Name: `pathways-wellness`
4. Root Directory: (leave blank)
5. Deploy

**Import 4: CRM Site**
1. Add New → Project
2. Import: `rocket-creative/PATHWAYS` (same repo!)
3. Name: `pathways-crm`
4. Root Directory: (leave blank)
5. Deploy

### Step 2: Configure Each Project

For **ALL 4 projects**, set:

1. **Settings** → **Git**
   - Production Branch: `main`
   - Enable Preview Deployments: ON
   - Deploy Branch: `dev`

2. **Settings** → **Environment Variables**
   - Copy from pathways-8h3u (if it exists)
   - Or add:
     - `RESEND` = your_key
     - `BUSINESS_INTAKE_EMAIL` = georgestoff@rocketcreative.net
     - etc.

### Step 3: Add Domains

Each project → Settings → Domains:
- **pathways-main**: `pathwayswithin.com`
- **pathways-wisdom**: `wisdom.pathwayswithin.com`
- **pathways-wellness**: `wellness.pathwayswithin.com`
- **pathways-crm**: `crm.pathwayswithin.com`

---

## What You'll Get

### Production URLs (from `main` branch):
- https://pathwayswithin.com
- https://wisdom.pathwayswithin.com
- https://wellness.pathwayswithin.com
- https://crm.pathwayswithin.com

### Preview URLs (from `dev` branch - auto-generated):
- https://pathways-main-git-dev-george.vercel.app
- https://pathways-wisdom-git-dev-george.vercel.app
- https://pathways-wellness-git-dev-george.vercel.app
- https://pathways-crm-git-dev-george.vercel.app

### Your Workflow:
1. **Make changes** → commit to `dev`
2. **Test on preview URLs** (automatic)
3. **Merge to main** → production updates automatically
4. **Team reviews** → use preview URLs before production

---

## Summary

**Git:** 2 branches (main, dev) ✅  
**Vercel:** 4 projects (each deploys from both branches) ✅  
**Total Deployments:** 8 (4 prod + 4 preview) ✅  
**Management:** Simple - just 4 projects ✅

---

**Next:** Import the repo 4 times in Vercel Dashboard (takes 10 minutes)

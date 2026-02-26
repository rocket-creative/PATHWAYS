# Git Workflow & Deployment Strategy
**Created:** January 25, 2026  
**Purpose:** Proper dev/production branching for all sites

---

## Current Setup (Single App, Multiple Deployments)

You have **one Next.js app** deployed to multiple Vercel projects:

| Site | Production URL | Purpose |
|------|---------------|---------|
| **Wisdom** | wisdom-eight-topaz.vercel.app | Therapy services |
| **Wellness** | wellness-phi-three.vercel.app | Wellness services |
| **CRM** | crm-sooty-one.vercel.app | Internal dashboard |
| **Main** | pathways-main.vercel.app | Landing/marketing site |

---

## Proposed Git Workflow

### Branch Strategy

```
main (production)
  ↑
  └── dev (development/staging)
       ↑
       └── feature/* (individual features)
```

### Branch Purposes

**`main` branch:**
- **Production-ready code only**
- Deploys to production URLs
- Requires testing before merge
- Protected branch (no direct commits)

**`dev` branch:**
- **Active development**
- Deploys to staging/preview URLs
- Where all features merge first
- Test everything here before promoting to main

**`feature/*` branches:**
- Individual feature development
- Branch from `dev`
- Merge back to `dev` when complete

---

## Vercel Deployment Configuration

### For Each Site (Wisdom, Wellness, CRM, Main)

Each Vercel project needs **two deployments**:

#### Production Deployment
- **Branch:** `main`
- **URL:** Production domain (e.g., wisdom.pathwayswithin.com)
- **Auto-deploy:** Yes, when `main` updates

#### Staging/Preview Deployment
- **Branch:** `dev`
- **URL:** Preview domain (e.g., wisdom-dev-xyz.vercel.app)
- **Auto-deploy:** Yes, when `dev` updates

---

## Setup Steps

### Step 1: Create Dev Branch

```bash
# From main branch
git checkout -b dev
git push -u origin dev
```

### Step 2: Configure Vercel Projects

For **each** of your 4 Vercel projects:

1. Go to Vercel Dashboard → Your Project
2. **Settings** → **Git**
3. **Production Branch:** Set to `main`
4. **Enable Preview Deployments:** Turn ON
5. **Branch for Previews:** `dev` (and optionally `feature/*`)

This gives you:
- **Production URL** - deploys from `main`
- **Preview URL** - deploys from `dev`

### Step 3: Set Up Branch Protection (GitHub)

1. Go to GitHub repo → **Settings** → **Branches**
2. Add branch protection rule for `main`:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass (Vercel build)
   - ✅ Require conversation resolution before merging

---

## Daily Workflow

### Working on New Features

```bash
# 1. Start from dev
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Make changes, commit
git add .
git commit -m "Add your feature"

# 4. Push feature branch
git push -u origin feature/your-feature-name

# 5. Open PR to merge feature → dev
# Test on dev preview URLs

# 6. After testing, merge to dev
# Then open PR: dev → main
# Deploy to production
```

### Deploying to Production

```bash
# 1. Ensure dev is tested and working
# Check all preview URLs:
#   - wisdom-dev.vercel.app
#   - wellness-dev.vercel.app
#   - crm-dev.vercel.app
#   - main-dev.vercel.app

# 2. Create PR: dev → main on GitHub
# 3. Review changes
# 4. Merge PR
# 5. Production auto-deploys from main
```

### Hotfixes (Emergency Production Fixes)

```bash
# 1. Create hotfix branch from main
git checkout main
git checkout -b hotfix/critical-fix

# 2. Make the fix
git commit -m "Hotfix: describe urgent fix"

# 3. Open PR: hotfix → main
# 4. After merge, sync back to dev:
git checkout dev
git merge main
git push origin dev
```

---

## Deployment URLs

### Current (Production from `main`)
- Wisdom: wisdom-eight-topaz.vercel.app
- Wellness: wellness-phi-three.vercel.app
- CRM: crm-sooty-one.vercel.app
- Main: pathways-main.vercel.app

### New (Staging from `dev`)
After setup, you'll automatically get:
- Wisdom: wisdom-dev-abc123.vercel.app
- Wellness: wellness-dev-abc123.vercel.app
- CRM: crm-dev-abc123.vercel.app
- Main: pathways-dev-abc123.vercel.app

*(Vercel generates preview URLs automatically)*

---

## Benefits

✅ **No code changes** - UI stays exactly the same  
✅ **Safe testing** - Test on dev URLs before production  
✅ **Easy rollback** - Keep main stable, revert if needed  
✅ **Clear process** - Everyone knows dev → staging → production  
✅ **Prevents accidents** - Can't accidentally deploy broken code to production

---

## What This Does NOT Change

❌ Code structure (stays as single Next.js app)  
❌ UI/design (zero visual changes)  
❌ Features (everything works the same)  
❌ Existing deployments (production URLs stay live)

---

## Implementation Time

**Total:** ~15-30 minutes

- Create `dev` branch: 2 minutes
- Configure 4 Vercel projects: 10 minutes (2-3 min each)
- Set up GitHub branch protection: 5 minutes
- Document and communicate: 10 minutes

---

## Ready to Implement?

I can set this up now:

1. ✅ Create `dev` branch from current `main`
2. ✅ Push to GitHub
3. 📋 Provide Vercel configuration checklist
4. 📋 Set up branch protection rules

**Shall I proceed?**

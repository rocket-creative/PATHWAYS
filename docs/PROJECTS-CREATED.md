# ✅ All 4 Vercel Projects Created

**Created:** January 25, 2026  
**Status:** Ready for GitHub connection & deployment

---

## Projects Created via CLI

| Project Name | Status | Next Step |
|--------------|--------|-----------|
| **pathways-main** | ✅ Created (renamed from pathways-8h3u) | Link to GitHub |
| **pathways-wisdom** | ✅ Created | Link to GitHub |
| **pathways-wellness** | ✅ Created | Link to GitHub |
| **pathways-crm** | ✅ Created | Link to GitHub |

---

## Next Steps: Connect to GitHub

For **EACH** of the 4 projects:

### 1. Connect to GitHub Repository

Visit each project and connect to GitHub:

**pathways-main:**
https://vercel.com/georges-projects-3ea4d6aa/pathways-main/settings/git

**pathways-wisdom:**
https://vercel.com/georges-projects-3ea4d6aa/pathways-wisdom/settings/git

**pathways-wellness:**
https://vercel.com/georges-projects-3ea4d6aa/pathways-wellness/settings/git

**pathways-crm:**
https://vercel.com/georges-projects-3ea4d6aa/pathways-crm/settings/git

### Steps for Each:
1. Click **Connect Git Repository**
2. Select **GitHub** → **rocket-creative/PATHWAYS**
3. Set **Production Branch**: `main`
4. Enable **Automatic Deployments from Git**: ON
5. Set **Preview Deployments**: `dev` branch
6. Click **Connect**

---

## Configuration After Connecting

### For pathways-wisdom:
**Settings** → **General** → **Build & Development Settings**
- Root Directory: Leave blank
- Build Command: `npm run build`
- Output Directory: `.next`

**Settings** → **Environment Variables**
- Add same variables as pathways-main:
  - `RESEND` (or `RESEND_API_KEY`)
  - `BUSINESS_INTAKE_EMAIL`
  - `RESEND_FROM_EMAIL`
  - etc.

### For pathways-wellness:
Same as wisdom (copy environment variables)

### For pathways-crm:
Same as wisdom (copy environment variables)

---

## Vercel Configuration Files

Each project uses its own config file:

| Project | Config File | Purpose |
|---------|-------------|---------|
| pathways-main | `vercel.json` | Main site (no rewrites) |
| pathways-wisdom | `vercel.wisdom.json` | Rewrites `/wisdom/*` to `/` |
| pathways-wellness | `vercel.wellness.json` | Rewrites `/wellness/*` to `/` |
| pathways-crm | `vercel.crm.json` | Rewrites `/crm/*` to `/` |

**Note:** Vercel automatically detects which config file to use based on project name matching the filename.

---

## Expected URLs After First Deploy

### Production (from main branch):
- pathways-main → pathways-main-georges-projects.vercel.app
- pathways-wisdom → pathways-wisdom-georges-projects.vercel.app
- pathways-wellness → pathways-wellness-georges-projects.vercel.app
- pathways-crm → pathways-crm-georges-projects.vercel.app

### Preview (from dev branch):
- pathways-main-git-dev-georges.vercel.app
- pathways-wisdom-git-dev-georges.vercel.app
- pathways-wellness-git-dev-georges.vercel.app
- pathways-crm-git-dev-georges.vercel.app

---

## Custom Domains (Add Later)

Once deployed and tested:

**Settings** → **Domains** for each project:
- pathways-main → `pathwayswithin.com`
- pathways-wisdom → `wisdom.pathwayswithin.com`
- pathways-wellness → `wellness.pathwayswithin.com`
- pathways-crm → `crm.pathwayswithin.com`

---

## Time to Complete

**GitHub Connection:** 5 minutes (all 4 projects)  
**Environment Variables:** 5 minutes (copy from main)  
**First Deployments:** Automatic after connection  
**Total:** ~10 minutes

---

**Status: Ready for GitHub connection!**

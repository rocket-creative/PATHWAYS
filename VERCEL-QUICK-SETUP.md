# Vercel Quick Setup - 10 Minutes

**Let's get all 4 sites deployed!**

---

## Step 1: Go to Your Vercel Dashboard

👉 **Open:** https://vercel.com/georges-projects-3ea4d6aa

---

## Step 2: Rename Existing Project (2 mins)

1. Click on **pathways-8h3u** project
2. **Settings** (left sidebar)
3. **General** tab
4. Scroll to **Project Name**
5. Change to: `pathways-main`
6. Click **Save**

✅ **Done! 1 of 4 complete**

---

## Step 3: Create Wisdom Project (2 mins)

1. Go back to dashboard
2. Click **Add New...** → **Project**
3. Find **rocket-creative/PATHWAYS** in list
4. Click **Import**
5. **Project Name:** `pathways-wisdom`
6. **Root Directory:** Leave blank
7. Click **Deploy**

⏳ Wait for build to complete (30-60 seconds)

✅ **Done! 2 of 4 complete**

---

## Step 4: Create Wellness Project (2 mins)

1. Click **Add New...** → **Project** again
2. Find **rocket-creative/PATHWAYS** (same repo!)
3. Click **Import**
4. **Project Name:** `pathways-wellness`
5. **Root Directory:** Leave blank
6. Click **Deploy**

⏳ Wait for build

✅ **Done! 3 of 4 complete**

---

## Step 5: Create CRM Project (2 mins)

1. Click **Add New...** → **Project** again
2. Find **rocket-creative/PATHWAYS** (same repo!)
3. Click **Import**
4. **Project Name:** `pathways-crm`
5. **Root Directory:** Leave blank
6. Click **Deploy**

⏳ Wait for build

✅ **Done! All 4 projects created!**

---

## Step 6: Configure Git Settings (2 mins)

For **EACH** of the 4 projects, do this:

1. Click project
2. **Settings** → **Git**
3. Set **Production Branch:** `main`
4. Turn ON **Deploy Preview Deployments**
5. Under Preview Deployments, ensure `dev` branch is enabled
6. Click **Save**

Do this 4 times (pathways-main, pathways-wisdom, pathways-wellness, pathways-crm)

---

## What You'll Have After This:

### Production URLs (from main branch):
- pathways-main → (Vercel URL until you add custom domain)
- pathways-wisdom → (Vercel URL until you add custom domain)
- pathways-wellness → (Vercel URL until you add custom domain)
- pathways-crm → (Vercel URL until you add custom domain)

### Preview URLs (from dev branch - automatic):
Each project will auto-create preview URLs like:
- pathways-main-git-dev-george.vercel.app
- pathways-wisdom-git-dev-george.vercel.app
- etc.

---

## Optional: Add Custom Domains

Later you can add:
- pathways-main → pathwayswithin.com
- pathways-wisdom → wisdom.pathwayswithin.com
- pathways-wellness → wellness.pathwayswithin.com
- pathways-crm → crm.pathwayswithin.com

But for now, the Vercel URLs work fine for testing!

---

## Total Time: ~10 minutes

**Need help?** Screenshot where you get stuck and I'll guide you.

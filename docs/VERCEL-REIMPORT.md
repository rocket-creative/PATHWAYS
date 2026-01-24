# Delete Vercel Project & Re-Import

## Why Git deploy showed old code

- **Vercel Production Branch** = `main`
- Your latest commits are on **`simplify-architecture`**
- `main` was last updated ~3 hours ago; you’ve been committing to `simplify-architecture` since then.

So Vercel was deploying `main`, which doesn’t have your recent changes.

---

## Option A: Fix without deleting (fastest)

**Change Vercel’s Production Branch to `simplify-architecture`:**

1. [Vercel Dashboard](https://vercel.com/dashboard) → your project
2. **Settings** → **Git**
3. **Production Branch** → change `main` to `simplify-architecture` → **Save**
4. Trigger a new deploy (e.g. **Deployments** → **Redeploy** latest, or push a commit to `simplify-architecture`)

Vercel will then deploy from `simplify-architecture` (your latest code).

---

## Option B: Delete project and re-import

### 1. Delete the Vercel project

1. [Vercel Dashboard](https://vercel.com/dashboard)
2. Open your **Pathways** project (pathways-main / pathways-2f45, etc.)
3. **Settings** → scroll to bottom
4. **Delete Project** → confirm

### 2. Re-import from Git

1. **Add New** → **Project**
2. **Import Git Repository** → select your repo
3. **Import** (or **Configure Project** if you want to change settings first)

### 3. Set the right branch when importing

- **Branch to deploy:** `simplify-architecture` (not `main`)  
  so production uses your latest work.

- Or, if you prefer `main` as production:
  - Merge `simplify-architecture` into `main` locally
  - Push `main`
  - Then re-import and keep **Production Branch** = `main`

### 4. After re-import

- **Settings** → **Git** → **Production Branch** = `simplify-architecture` (or `main` if you merged).
- **Deployments** → confirm the new deploy is from the correct branch and commit.

---

## Optional: Merge to `main` so production = `main`

If you want production to always deploy from `main`:

```bash
git checkout main
git pull origin main
git merge simplify-architecture
git push origin main
```

Then either keep the existing Vercel project (Option A but with `main`) or re-import and set **Production Branch** = `main`.

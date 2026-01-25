# Vercel Setup - Manual Steps (Since CLI has limitations)

Since Vercel CLI project creation requires interactive input or additional permissions, here's what you need to do in the Vercel Dashboard:

## Option 1: Use Vercel Dashboard (Recommended - 15 minutes)

### Step 1: Create/Rename Projects

Go to https://vercel.com/georges-projects-3ea4d6aa

1. **pathways-8h3u** → Rename to **pathways-main**
   - Click project → Settings → General → Project Name → Change to `pathways-main`

2. **Create new project: pathways-wisdom**
   - Dashboard → Add New → Project
   - Import from GitHub: rocket-creative/PATHWAYS
   - Name: `pathways-wisdom`
   - Root Directory: Leave blank (use rewrites instead)
   - Click Deploy

3. **Create new project: pathways-wellness**
   - Same process, name: `pathways-wellness`

4. **Create new project: pathways-crm**
   - Same process, name: `pathways-crm`

### Step 2: Configure Each Project

For **pathways-wisdom**:
- Settings → Environment Variables
- Add: `VERCEL_CONFIG_FILE` = `vercel.wisdom.json`
- Settings → Git → Production Branch → `main`
- Settings → Git → Preview Deployments → Enable for `dev` branch

Repeat for **pathways-wellness** (use `vercel.wellness.json`)
Repeat for **pathways-crm** (use `vercel.crm.json`)

### Step 3: Add Domains

Each project → Settings → Domains:
- pathways-main: `pathwayswithin.com`
- pathways-wisdom: `wisdom.pathwayswithin.com`
- pathways-wellness: `wellness.pathwayswithin.com`
- pathways-crm: `crm.pathwayswithin.com`

## Option 2: Programmatic Setup (Advanced)

I've created all the config files. You just need to:
1. Import the same repo 4 times in Vercel
2. Name each project appropriately
3. Each deployment will use its corresponding vercel.*.json file

The rewrites in each config file will handle routing automatically.


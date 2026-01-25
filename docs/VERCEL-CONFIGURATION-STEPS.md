# Vercel Configuration Steps - Simple Setup
**Time to complete:** 20-30 minutes  
**Result:** Clean URLs, one repo, multiple domains

---

## What You'll Get

| Domain | Shows | Project Name |
|--------|-------|--------------|
| **wisdom.pathwayswithin.com** | Therapy services | pathways-wisdom |
| **wellness.pathwayswithin.com** | Wellness services | pathways-wellness |
| **crm.pathwayswithin.com** | Internal CRM | pathways-crm |
| **pathwayswithin.com** | Main marketing site | pathways-main |

---

## Step 1: Rename Existing Vercel Projects (5 mins)

### For Each Project in Vercel Dashboard:

#### Rename: wisdom-eight-topaz → **pathways-wisdom**
1. Go to: https://vercel.com/dashboard
2. Click on **wisdom-eight-topaz** project
3. **Settings** → **General**
4. Scroll to **Project Name**
5. Change to: `pathways-wisdom`
6. Click **Save**

#### Rename: wellness-phi-three → **pathways-wellness**
1. Click on **wellness-phi-three** project
2. **Settings** → **General** → **Project Name**
3. Change to: `pathways-wellness`
4. Click **Save**

#### Rename: crm-sooty-one → **pathways-crm**
1. Click on **crm-sooty-one** project
2. **Settings** → **General** → **Project Name**
3. Change to: `pathways-crm`
4. Click **Save**

#### Rename: pathways-8h3u → **pathways-main** (if needed)
1. Click on **pathways-8h3u** or current main project
2. **Settings** → **General** → **Project Name**
3. Change to: `pathways-main`
4. Click **Save**

---

## Step 2: Configure Vercel Project Settings (15 mins)

### For pathways-wisdom:

1. **Settings** → **General** → **Build & Development Settings**
2. Click **Edit** next to Framework Preset
3. **Build Command:** Keep as `npm run build`
4. **Output Directory:** Keep as `.next`
5. **Install Command:** Keep as `npm install`
6. Click **Save**

7. **Settings** → **Environment Variables** → **Add Variable**
   - Name: `VERCEL_CONFIG_FILE`
   - Value: `vercel.wisdom.json`
   - Environment: Production, Preview, Development
   - Click **Save**

### For pathways-wellness:

Repeat above, but for environment variable:
- Name: `VERCEL_CONFIG_FILE`
- Value: `vercel.wellness.json`

### For pathways-crm:

Repeat above, but for environment variable:
- Name: `VERCEL_CONFIG_FILE`
- Value: `vercel.crm.json`

### For pathways-main:

Keep default `vercel.json` (no special config needed)

---

## Step 3: Configure Git Branches (5 mins)

### For ALL 4 Projects:

1. **Settings** → **Git**
2. **Production Branch:** Set to `main`
3. **Deploy Previews:** Turn ON
4. **Preview Branch:** Add `dev`
5. Click **Save**

---

## Step 4: Add Custom Domains (10 mins)

### For pathways-wisdom:
1. **Settings** → **Domains**
2. Click **Add**
3. Enter: `wisdom.pathwayswithin.com`
4. Click **Add**
5. Follow DNS instructions (add CNAME record in GoDaddy)

### For pathways-wellness:
1. **Settings** → **Domains**
2. Add: `wellness.pathwayswithin.com`
3. Follow DNS instructions

### For pathways-crm:
1. **Settings** → **Domains**
2. Add: `crm.pathwayswithin.com`
3. Follow DNS instructions

### For pathways-main:
1. **Settings** → **Domains**
2. Add: `pathwayswithin.com`
3. Add: `www.pathwayswithin.com` (redirect to pathwayswithin.com)
4. Follow DNS instructions

---

## Step 5: DNS Configuration (GoDaddy)

### You'll need GoDaddy access to add these CNAME records:

| Subdomain | Type | Value |
|-----------|------|-------|
| wisdom | CNAME | cname.vercel-dns.com |
| wellness | CNAME | cname.vercel-dns.com |
| crm | CNAME | cname.vercel-dns.com |
| @ (root) | A | 76.76.21.21 |
| www | CNAME | cname.vercel-dns.com |

Vercel will show you the exact records to add in the Domains section.

---

## Step 6: Deploy & Test (5 mins)

After DNS propagates (5-30 minutes):

### Test URLs:

**Production (from main branch):**
- https://wisdom.pathwayswithin.com
- https://wellness.pathwayswithin.com
- https://crm.pathwayswithin.com
- https://pathwayswithin.com

**Staging (from dev branch - Vercel auto-generates):**
- https://pathways-wisdom-git-dev.vercel.app
- https://pathways-wellness-git-dev.vercel.app
- https://pathways-crm-git-dev.vercel.app
- https://pathways-main-git-dev.vercel.app

---

## How URLs Will Look to Users

### Before (Confusing):
- wisdom-eight-topaz.vercel.app/wisdom/services/individual-therapy ❌

### After (Clean):
- wisdom.pathwayswithin.com/services/individual-therapy ✅

The `/wisdom` prefix is hidden via rewrites - users never see it!

---

## Troubleshooting

### If domains don't work:
1. Check DNS propagation: https://www.whatsmydns.net
2. Verify CNAME records in GoDaddy
3. Wait 5-30 minutes for DNS to propagate
4. Check Vercel domain status (should show green checkmark)

### If pages 404:
1. Verify rewrites in vercel.[site].json files
2. Check deployment logs in Vercel
3. Ensure main branch deployed successfully

### If styling breaks:
1. Check CSP headers in next.config.js
2. Verify all assets load from correct paths
3. Check browser console for errors

---

## What Changed vs What Didn't

### ✅ Changed:
- Project names (simplified)
- Domain URLs (professional)
- Deployment configuration

### ❌ Did NOT Change:
- Code structure (still one Next.js app)
- UI/pages (look exactly the same)
- User experience (seamless navigation)
- Features (everything works the same)

---

## Need Help?

**I can:**
- Help with DNS configuration
- Troubleshoot deployment issues
- Update navigation links if needed
- Add redirects for old URLs

**Just ask!**

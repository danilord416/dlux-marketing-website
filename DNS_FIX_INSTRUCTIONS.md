# DNS Fix Instructions for GoDaddy

## Issues Found:
1. ❌ A record for `@` is pointing to "WebsiteBuilder Site" (should be Netlify IP)
2. ❌ CNAME for `www` is pointing to `dlux-marketing.com.` (should be Netlify URL)
3. ❌ Extra A record for `website` (not needed)
4. ❌ Extra CNAME for `dlux-marketing.netlify.app` (not needed)

## Step-by-Step Fix:

### Step 1: Fix the A Record for Root Domain (@)

1. Find the A record with:
   - **Type:** A
   - **Name:** @
   - **Data:** WebsiteBuilder Site

2. Click the **pencil icon (Edit)** on that row

3. Change the **Data** field from "WebsiteBuilder Site" to: `75.2.60.5`

4. Click **Save**

### Step 2: Fix the CNAME Record for WWW

1. Find the CNAME record with:
   - **Type:** CNAME
   - **Name:** www
   - **Data:** dlux-marketing.com.

2. Click the **pencil icon (Edit)** on that row

3. Change the **Data** field from `dlux-marketing.com.` to: `dlux-marketing.netlify.app`

4. Click **Save**

### Step 3: Delete Unnecessary Records

**Delete the A record for "website":**
1. Find the A record with:
   - **Type:** A
   - **Name:** website
   - **Data:** 75.2.60.5

2. Click the **trash can icon (Delete)** on that row

3. Confirm deletion

**Delete the CNAME record for "dlux-marketing.netlify.app":**
1. Find the CNAME record with:
   - **Type:** CNAME
   - **Name:** dlux-marketing.netlify.app
   - **Data:** dlux-marketing.netlify.app.

2. Click the **trash can icon (Delete)** on that row

3. Confirm deletion

## What Your DNS Should Look Like After Fix:

**A Records:**
- `@` → `75.2.60.5` ✅

**CNAME Records:**
- `www` → `dlux-marketing.netlify.app` ✅
- `pay` → `paylinks.commerce.godaddy.com.` (keep this)
- `_domainconnect` → `_domainconnect.gd.domaincontrol.com.` (keep this)

**NS Records:**
- Keep all NS records (can't delete anyway)

## After Making Changes:

1. **Wait 5-10 minutes** for DNS to propagate
2. Go back to **Netlify** → Domain management
3. Click **"Verify DNS configuration"** or refresh the page
4. Status should change from "Pending" to "Active" ✅

## If Still Pending After 15 Minutes:

1. Double-check all values are exactly as shown above
2. Make sure there are no typos
3. Wait up to 24 hours for full DNS propagation
4. Use https://dnschecker.org to verify DNS is propagating globally


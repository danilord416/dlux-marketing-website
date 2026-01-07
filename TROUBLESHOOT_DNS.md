# Troubleshooting "Pending DNS Verification" in Netlify

## What "Pending DNS Verification" Means

This status means:
- ✅ Your domain is added in Netlify (good!)
- ⏳ Netlify is waiting for DNS records to be updated in GoDaddy
- ⏳ DNS records need to match what Netlify expects

## Step-by-Step Fix

### Step 1: Get the Required DNS Records from Netlify

1. **In Netlify Dashboard:**
   - Go to your site → "Site settings" → "Domain management"
   - Click on your domain (the one showing "Pending")
   - You should see DNS records that need to be added
   - **Write down or screenshot these values**

You'll typically see:
- **A Record:** An IP address (like `75.2.60.5`)
- **CNAME Record:** Your Netlify site URL (like `your-site.netlify.app`)

### Step 2: Check Current DNS in GoDaddy

1. **Log in to GoDaddy**
2. **Go to "My Products"**
3. **Find your domain → Click three dots (⋯) → "Manage DNS"**
4. **Look at your current DNS records**

### Step 3: Update DNS Records in GoDaddy

#### For Root Domain (yourdomain.com):

**Find or create A record:**
- Look for A record with Name: `@`
- If it exists: Click pencil icon to edit
- If it doesn't exist: Click "Add" → "A"
- **Name:** `@`
- **Value:** Enter the IP address from Netlify (e.g., `75.2.60.5`)
- **TTL:** Leave as default (600)
- **Click "Save"**

#### For WWW (www.yourdomain.com):

**Find or create CNAME record:**
- Look for CNAME record with Name: `www`
- If it exists: Click pencil icon to edit
- If it doesn't exist: Click "Add" → "CNAME"
- **Name:** `www`
- **Value:** Enter your Netlify site URL (e.g., `your-site-name.netlify.app`)
- **TTL:** Leave as default (600)
- **Click "Save"**

### Step 4: Remove Conflicting Records

**Check for these and remove/update if needed:**
- Any other A records pointing to different IPs
- Any CNAME records for `www` pointing to GoDaddy parking pages
- Any A records for `www` (should be CNAME, not A)

### Step 5: Verify DNS Records

**In GoDaddy, you should have exactly:**

1. **A Record:**
   - Name: `@`
   - Points to: Netlify IP address

2. **CNAME Record:**
   - Name: `www`
   - Points to: Your Netlify site URL

### Step 6: Wait and Check Status

1. **Wait 5-10 minutes** after updating DNS
2. **Go back to Netlify** → Domain management
3. **Click "Verify DNS configuration"** or refresh the page
4. Status should change from "Pending" to "Active"

## Common Issues and Fixes

### Issue 1: DNS Records Not Matching

**Symptom:** Still shows "Pending" after 30 minutes

**Fix:**
- Double-check the IP address in A record matches Netlify exactly
- Double-check the CNAME value matches your Netlify site URL exactly
- Make sure there are no typos or extra spaces

### Issue 2: Wrong Record Type

**Symptom:** DNS updated but still pending

**Fix:**
- Root domain (`@`) must be **A record**, not CNAME
- WWW must be **CNAME record**, not A record
- Check record types in GoDaddy

### Issue 3: Multiple Conflicting Records

**Symptom:** Multiple A or CNAME records

**Fix:**
- Remove duplicate records
- Keep only the ones pointing to Netlify
- Make sure `@` has only ONE A record

### Issue 4: DNS Cache

**Symptom:** Records look correct but still pending

**Fix:**
- Wait longer (up to 48 hours for full propagation)
- Use DNS checker: https://dnschecker.org
- Enter your domain and check if A record shows Netlify IP globally

## Quick Verification Checklist

Before contacting support, verify:

- [ ] A record for `@` exists and points to Netlify IP
- [ ] CNAME record for `www` exists and points to Netlify URL
- [ ] No conflicting A records for `www`
- [ ] No duplicate records
- [ ] Values match Netlify exactly (no typos)
- [ ] Waited at least 10-15 minutes after updating

## Using DNS Checker Tool

1. Go to https://dnschecker.org
2. Enter your domain (e.g., `yourdomain.com`)
3. Select "A" record type
4. Click "Search"
5. Check if the IP address matches Netlify's IP globally
6. If it shows different IPs or errors, DNS hasn't propagated yet

## Still Not Working?

If it's been more than 24 hours and still "Pending":

1. **Screenshot your GoDaddy DNS records** (hide sensitive info)
2. **Screenshot Netlify's required DNS records**
3. **Compare them side by side**
4. **Contact Netlify support** (they're very helpful)
   - Go to Netlify dashboard → Help → Contact support
   - Explain the issue and share screenshots

## Alternative: Use Netlify Nameservers

If DNS records are too complicated, use Netlify nameservers:

1. **In Netlify:** Domain management → "Add nameservers"
2. **Copy the nameservers** Netlify provides
3. **In GoDaddy:** DNS Management → Nameservers → Change
4. **Select "Custom"** and paste Netlify's nameservers
5. **Save**

This is easier and Netlify manages everything!



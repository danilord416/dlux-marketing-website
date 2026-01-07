# Connect GoDaddy Domain to Netlify - Step by Step Guide

## Overview
This guide will walk you through connecting your GoDaddy domain to your Netlify site. The process involves:
1. Adding your domain in Netlify
2. Getting DNS records from Netlify
3. Updating DNS records in GoDaddy
4. Waiting for DNS to propagate

## Prerequisites
- ✅ Your site is deployed on Netlify
- ✅ You have a GoDaddy domain
- ✅ Access to your GoDaddy account

## Step 1: Add Domain in Netlify (2 minutes)

1. **Go to your Netlify dashboard**
2. **Click on your site** (the DLux Marketing site)
3. **Click "Site settings"** (left sidebar)
4. **Click "Domain management"** (under "Domain settings")
5. **Click "Add custom domain"**
6. **Enter your domain:**
   - If you want `www.yourdomain.com`: Enter `www.yourdomain.com`
   - If you want `yourdomain.com`: Enter `yourdomain.com`
   - If you want both: Add both separately
7. **Click "Verify"**

## Step 2: Get DNS Records from Netlify (1 minute)

After adding your domain, Netlify will show you DNS records you need to add:

### For Root Domain (yourdomain.com):
You'll see something like:
- **Type:** A
- **Name:** @
- **Value:** 75.2.60.5 (this is an example - yours will be different)

### For WWW Subdomain (www.yourdomain.com):
- **Type:** CNAME
- **Name:** www
- **Value:** your-site-name.netlify.app (your actual Netlify URL)

**Important:** Write down or keep this page open - you'll need these values!

## Step 3: Update DNS in GoDaddy (5 minutes)

### Option A: Using GoDaddy DNS Management (Recommended)

1. **Log in to GoDaddy:**
   - Go to https://www.godaddy.com
   - Sign in to your account

2. **Go to DNS Management:**
   - Click "My Products" (top right)
   - Find your domain
   - Click the three dots (⋯) next to your domain
   - Click "Manage DNS"

3. **Remove Existing A Record (if needed):**
   - Look for existing A records with Name: `@`
   - Click the pencil icon to edit
   - Note the current value (in case you need to revert)
   - You can delete it or update it (we'll update it)

4. **Update A Record for Root Domain:**
   - Find the A record with Name: `@`
   - Click the pencil icon to edit
   - **Value:** Enter the IP address Netlify provided (e.g., `75.2.60.5`)
   - **TTL:** Leave as default (usually 600 seconds)
   - Click "Save"

5. **Update or Add CNAME for WWW:**
   - Look for a CNAME record with Name: `www`
   - If it exists, click pencil to edit
   - If it doesn't exist, click "Add" → "CNAME"
   - **Name:** `www`
   - **Value:** Enter your Netlify site URL (e.g., `your-site-name.netlify.app`)
   - **TTL:** Leave as default
   - Click "Save"

6. **Remove Conflicting Records (if any):**
   - If you see other A or CNAME records pointing to different places, you may want to remove them
   - Common ones to check: `www` pointing to GoDaddy parking page

### Option B: Using Netlify DNS (Alternative - Easier)

If you prefer, you can use Netlify's DNS instead:

1. **In Netlify:**
   - Go to Domain management
   - Click "Add nameservers"
   - Netlify will provide nameservers (e.g., `dns1.p01.nsone.net`)

2. **In GoDaddy:**
   - Go to DNS Management
   - Scroll to "Nameservers"
   - Click "Change"
   - Select "Custom"
   - Enter Netlify's nameservers
   - Click "Save"

**Note:** This method is easier but means Netlify manages all your DNS.

## Step 4: Verify DNS Settings

### In GoDaddy, you should have:

**For Root Domain:**
- A record: `@` → Netlify IP address

**For WWW:**
- CNAME record: `www` → `your-site-name.netlify.app`

### Common Records You Might See (Safe to Leave):
- TXT records (for email, verification, etc.)
- MX records (for email)
- Other subdomains you're using

## Step 5: Wait for DNS Propagation (15 minutes - 48 hours)

DNS changes take time to propagate:

- **Usually:** 15 minutes to 2 hours
- **Sometimes:** Up to 48 hours
- **Netlify will show status:** "Pending" → "Active"

### Check Status in Netlify:
1. Go to Domain management
2. You'll see your domain status
3. When it shows "Active" with a green checkmark, it's ready!

### Test Your Domain:
- Try visiting `yourdomain.com` in a browser
- Try visiting `www.yourdomain.com`
- Both should show your Netlify site

## Step 6: Enable HTTPS (Automatic)

Once DNS is active:
1. Netlify automatically provisions an SSL certificate
2. This usually takes 1-2 hours after DNS is active
3. Your site will be accessible via `https://yourdomain.com`

## Troubleshooting

### Domain Not Working After 24 Hours:

1. **Check DNS Records:**
   - Verify A record points to Netlify IP
   - Verify CNAME for www points to Netlify URL
   - Use a DNS checker: https://dnschecker.org

2. **Clear DNS Cache:**
   - On Mac: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
   - Or wait - DNS caches can take time

3. **Verify in Netlify:**
   - Go to Domain management
   - Check for any error messages
   - Netlify will show what's wrong

### Common Issues:

**Issue: Domain shows "Pending" for a long time**
- Solution: Double-check DNS records in GoDaddy match Netlify's requirements exactly

**Issue: www works but root domain doesn't (or vice versa)**
- Solution: Make sure you have both A record (@) and CNAME (www) set up

**Issue: "Domain already in use" error**
- Solution: The domain might be connected to another Netlify site or service
- Check if you have other Netlify sites using this domain

**Issue: SSL certificate not provisioning**
- Solution: Wait 1-2 hours after DNS is active
- If still not working, contact Netlify support

## Quick Reference: DNS Records Needed

### For Root Domain (yourdomain.com):
```
Type: A
Name: @
Value: [Netlify IP address - get from Netlify]
TTL: 600 (default)
```

### For WWW (www.yourdomain.com):
```
Type: CNAME
Name: www
Value: [your-site-name.netlify.app]
TTL: 600 (default)
```

## Alternative: Using Netlify Nameservers (Easier)

If you want Netlify to manage all DNS:

1. **In Netlify Domain Management:**
   - Click "Add nameservers"
   - Copy the nameservers provided

2. **In GoDaddy:**
   - Go to DNS Management
   - Scroll to "Nameservers"
   - Click "Change"
   - Select "Custom"
   - Paste Netlify's nameservers
   - Save

**This is easier but means all DNS is managed by Netlify.**

## Need Help?

- **Netlify Support:** Available in dashboard (chat support)
- **GoDaddy Support:** 1-480-505-8877 or support.godaddy.com
- **DNS Checker:** https://dnschecker.org (to verify DNS propagation)

## Summary

1. ✅ Add domain in Netlify
2. ✅ Get DNS records from Netlify
3. ✅ Update A record in GoDaddy (for root domain)
4. ✅ Update CNAME record in GoDaddy (for www)
5. ✅ Wait for DNS propagation (15 min - 48 hours)
6. ✅ SSL certificate auto-provisions
7. ✅ Your site is live on your custom domain!

Your domain will be connected and working! 🎉



# Netlify Setup - Step by Step Guide

## Overview
This guide will walk you through setting up your DLux Marketing website on Netlify with both staging and production environments - **completely free!**

## What You'll Get
- ✅ Free hosting for your website
- ✅ Automatic deployments from GitHub
- ✅ Staging site for testing (free preview URLs)
- ✅ Production site (your main live site)
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Form submissions (stored in dashboard)

## Step 1: Sign Up for Netlify (2 minutes)

1. **Go to Netlify:** https://www.netlify.com
2. **Click "Sign up"** (top right corner)
3. **Choose "Sign up with GitHub"** (recommended - easiest setup)
   - This connects your GitHub account
   - Click "Authorize Netlify" when prompted
4. **Complete your profile** (optional - you can skip)

## Step 2: Connect Your GitHub Repository (3 minutes)

1. **In Netlify dashboard**, click **"Add new site"** button
2. **Select "Import an existing project"**
3. **Choose "Deploy with GitHub"**
4. **Authorize Netlify** (if prompted)
5. **Find and select** `dlux-marketing-website` repository
6. **Click "Connect"**

## Step 3: Configure Production Site (2 minutes)

You'll see deployment settings. Configure as follows:

### Basic Build Settings:
- **Branch to deploy:** `main` (should be selected by default)
- **Base directory:** (leave empty)
- **Build command:** (leave empty - no build needed for static site)
- **Publish directory:** `/` (root directory - should be default)

### Click "Deploy site"

Netlify will start deploying your site. This takes about 1-2 minutes.

## Step 4: Wait for First Deployment

- You'll see a deployment in progress
- Wait for it to complete (green checkmark)
- Your site will have a random URL like: `random-name-12345.netlify.app`
- **Click on the URL** to see your live site!

## Step 5: Set Up Staging Environment (3 minutes)

1. **Go to Site settings:**
   - Click on your site name in Netlify dashboard
   - Click **"Site settings"** (left sidebar)

2. **Configure Branch Deploys:**
   - Click **"Build & deploy"** in left sidebar
   - Scroll down to **"Branch deploys"** section
   - Click **"Edit settings"**
   - Enable **"Deploy only the production branch"** - **UNCHECK THIS**
   - Enable **"Branch deploys"** - **CHECK THIS**
   - Set **"Production branch"** to: `main`
   - Click **"Save"**

3. **Test Staging:**
   - Go to your GitHub repository
   - Make a small change (like adding a comment)
   - Commit and push to `staging` branch
   - Netlify will automatically create a preview URL
   - You'll see it in Netlify dashboard under "Deploys"

## Step 6: Set Up Custom Domain (Optional - 5 minutes)

If you have a domain name:

1. **In Netlify dashboard** → Your site → **"Site settings"**
2. **Click "Domain management"** in left sidebar
3. **Click "Add custom domain"**
4. **Enter your domain** (e.g., `dluxmarketing.com`)
5. **Follow DNS instructions:**
   - Netlify will show you DNS records to add
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records Netlify provides
   - Wait 24-48 hours for DNS to propagate

## Step 7: Configure Form Notifications (Optional - 5 minutes)

### Option A: View in Dashboard (Free - Already Working)
- Form submissions automatically appear in Netlify dashboard
- Go to: Your site → **"Forms"** tab
- View all submissions here

### Option B: Set Up Zapier for Email (Free - Recommended)
1. **Sign up for Zapier:** https://zapier.com (free account)
2. **Create a new Zap:**
   - Click "Create Zap"
   - **Trigger:** Search for "Netlify"
   - Select "New Form Submission" (Netlify)
   - Connect your Netlify account
   - Select your site and form
3. **Action:**
   - Search for "Email"
   - Select "Email by Zapier"
   - Choose "Send Outbound Email"
   - Configure:
     - To: Your email (dani.dluxmarketing@gmail.com)
     - Subject: "New Contact Form Submission from DLux Marketing"
     - Body: Include form fields
4. **Test and Activate** your Zap

## Step 8: Test Your Contact Form

1. **Visit your live Netlify site**
2. **Go to the contact page**
3. **Fill out and submit the form**
4. **Check Netlify dashboard:**
   - Go to your site → "Forms" tab
   - You should see the submission!

## Your Workflow Going Forward

### Making Changes to Staging:
```bash
git checkout staging
# Make your changes
git add .
git commit -m "Your changes"
git push origin staging
```
- Netlify automatically creates a preview URL
- Test on staging URL
- If good, merge to main

### Deploying to Production:
```bash
git checkout main
git merge staging
git push origin main
```
- Netlify automatically deploys to production
- Your live site updates in 1-2 minutes

## Netlify Dashboard Overview

### Main Dashboard:
- See all your sites
- View recent deployments
- Quick access to settings

### Site Dashboard:
- **Deploys:** See all deployments (staging and production)
- **Forms:** View form submissions
- **Analytics:** Basic site stats (paid feature, but not needed)
- **Domain management:** Configure custom domains
- **Site settings:** Configure build, deploy, and other settings

## Troubleshooting

### Site Not Deploying:
- Check GitHub repository is connected
- Verify branch name is correct (`main`)
- Check deployment logs in Netlify dashboard

### Form Not Working:
- Make sure form has `data-netlify="true"` attribute (already added)
- Check Netlify dashboard → Forms tab
- Verify you're on the live Netlify site (not local)

### Staging Not Creating Previews:
- Verify branch deploys are enabled in settings
- Make sure you're pushing to `staging` branch
- Check "Build & deploy" → "Branch deploys" settings

## Free Tier Limits

✅ **What's Free:**
- 100GB bandwidth/month
- 300 build minutes/month
- 100 form submissions/month
- Unlimited sites
- SSL certificates
- Branch previews

❌ **What Costs Money:**
- More than 100GB bandwidth ($20/month)
- More than 100 form submissions/month ($19/month for forms)
- Advanced analytics ($9/month)

**For most small business websites, the free tier is plenty!**

## Next Steps

1. ✅ Sign up for Netlify
2. ✅ Connect your GitHub repo
3. ✅ Deploy your site
4. ✅ Set up staging branch deploys
5. ✅ Test your contact form
6. ✅ (Optional) Set up Zapier for email notifications
7. ✅ (Optional) Add custom domain

## Need Help?

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** Available in dashboard
- **Community Forum:** https://answers.netlify.com

Your website is ready to deploy! 🚀


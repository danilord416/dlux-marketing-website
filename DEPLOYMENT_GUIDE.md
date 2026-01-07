# Deployment Guide for DLux Marketing Website

This guide will walk you through setting up GitHub and deploying your website to staging and production environments.

## Step 1: Initialize Git Repository

If you haven't already, initialize a git repository in your project folder:

```bash
cd "/Users/danilord/Desktop/DLux Marketing"
git init
git add .
git commit -m "Initial commit - DLux Marketing website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right, then "New repository"
3. Name it something like `dlux-marketing-website`
4. **Don't** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dlux-marketing-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Set Up Branch Structure

Create a staging branch for testing:

```bash
git checkout -b staging
git push -u origin staging
git checkout main
```

## Step 5: Configure GitHub Secrets (for FTP deployment)

If you're using FTP to deploy to your WordPress hosting:

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret" and add these secrets:

**For Staging:**
- `STAGING_FTP_SERVER` - Your staging server FTP address (e.g., `ftp.yourdomain.com`)
- `STAGING_FTP_USERNAME` - Your FTP username
- `STAGING_FTP_PASSWORD` - Your FTP password

**For Production:**
- `PRODUCTION_FTP_SERVER` - Your production server FTP address
- `PRODUCTION_FTP_USERNAME` - Your FTP username
- `PRODUCTION_FTP_PASSWORD` - Your FTP password

## Step 6: Alternative Deployment Options

### Option A: GitHub Pages (Free, Simple)

1. Go to repository Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Choose `main` branch and `/ (root)` folder
4. Click Save
5. Your site will be live at: `https://YOUR_USERNAME.github.io/dlux-marketing-website`

**For staging on GitHub Pages:**
- Create a separate repository for staging, or
- Use a different branch and configure it in Pages settings

### Option B: Netlify (Recommended for Static Sites)

1. Go to [Netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure:
   - **Production branch:** `main`
   - **Publish directory:** `/` (root)
5. Click "Deploy site"
6. For staging: Go to Site settings → Build & deploy → Branch deploys
   - Enable branch deploys for `staging` branch

### Option C: WordPress Hosting via FTP

If you're hosting on WordPress.com or a WordPress hosting provider:

1. Get your FTP credentials from your hosting provider
2. Set up the GitHub Secrets as described in Step 5
3. The GitHub Actions will automatically deploy when you push to:
   - `staging` branch → staging site
   - `main` branch → production site

## Step 7: Workflow for Making Changes

### Making Changes to Staging:

```bash
# Switch to staging branch
git checkout staging

# Make your changes, then:
git add .
git commit -m "Description of changes"
git push origin staging
```

This will automatically deploy to your staging site.

### Promoting Staging to Production:

```bash
# Switch to main branch
git checkout main

# Merge staging into main
git merge staging

# Push to production
git push origin main
```

This will automatically deploy to your production site.

## Step 8: Setting Up Staging WordPress Site

If you're using WordPress hosting:

1. **Create a subdomain** (e.g., `staging.yourdomain.com`) in your hosting control panel
2. **Install WordPress** on the subdomain (or create a subdirectory like `/staging/`)
3. **Upload static files** to the staging directory via FTP or use the GitHub Actions workflow
4. **Configure your staging site** to serve the static HTML files

### For WordPress Hosting:

If your hosting uses WordPress, you have two options:

**Option 1: Static Files in Subdirectory**
- Upload files to `/public_html/staging/` or `/staging/`
- Access via `yourdomain.com/staging/`

**Option 2: Static Files as WordPress Theme**
- Convert your HTML to a WordPress theme (more complex)
- Or use a plugin like "Simply Static" to export WordPress as static files

## Step 9: Testing Your Setup

1. Make a small change (like updating a heading)
2. Commit and push to `staging` branch
3. Check your staging site - changes should appear within a few minutes
4. If everything looks good, merge to `main` and push to production

## Troubleshooting

### GitHub Actions Not Running
- Check that workflows are in `.github/workflows/` folder
- Ensure branch names match (`staging` and `main`)
- Check Actions tab in GitHub for error messages

### FTP Deployment Failing
- Verify FTP credentials in GitHub Secrets
- Check that server directory paths are correct
- Ensure FTP server allows connections from GitHub Actions IPs

### Files Not Updating on Server
- Clear browser cache
- Check file permissions on server
- Verify deployment completed successfully in GitHub Actions

## Need Help?

If you run into issues:
1. Check GitHub Actions logs (Actions tab in repository)
2. Verify FTP credentials are correct
3. Test FTP connection manually with an FTP client
4. Contact your hosting provider for FTP/server configuration help



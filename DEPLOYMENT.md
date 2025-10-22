# GitHub Pages Deployment Guide

## Portfolio Website - Jonas Desmet

### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: **portfolio**
3. Description: "Terminal-based portfolio website for platform engineering"
4. Select: **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have them)
6. Click "Create repository"

### Step 2: Link Local Repository to GitHub

Once you've created the repository on GitHub, run these commands:

```bash
cd C:\Users\jonas\Desktop\Projects\Portfolio_Website

# Add GitHub as remote
git remote add origin https://github.com/Keeposz/portfolio.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/Keeposz/portfolio
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 4: Wait for Deployment

- GitHub will build and deploy your site (takes 1-2 minutes)
- Your site will be live at: **https://keeposz.github.io/portfolio/**

### Step 5: (Optional) Add Custom Domain

If you want to use **jonasdesmet-portfolio.be**:

1. In GitHub Pages settings, add custom domain: `jonasdesmet-portfolio.be`
2. Configure your domain provider (where you bought the domain):
   - Add a CNAME record pointing to: `keeposz.github.io`
   - Or A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Troubleshooting

**If you get authentication errors when pushing:**
- GitHub no longer accepts passwords for git operations
- You need to create a Personal Access Token:
  1. Go to: https://github.com/settings/tokens
  2. Click "Generate new token" → "Generate new token (classic)"
  3. Give it a name: "Portfolio Deployment"
  4. Select scopes: **repo** (full control)
  5. Click "Generate token"
  6. Copy the token and use it as your password when pushing

**Alternative: Use GitHub Desktop**
- Download: https://desktop.github.com/
- Sign in with your GitHub account
- Add the repository: C:\Users\jonas\Desktop\Projects\Portfolio_Website
- Publish to GitHub

### Files Included

- ✅ index.html - Main HTML structure
- ✅ style.css - Terminal styling
- ✅ script.js - Typing animations & interactivity
- ✅ favicon.svg - Retro computer icon
- ✅ Profile.jpg - Your profile photo
- ✅ .gitignore - Files to exclude from git

### Next Steps After Deployment

1. Share your portfolio on LinkedIn
2. Add the link to your GitHub profile README
3. Include it in your CV/resume
4. Update content as you gain new certifications

---

**Your portfolio URL:** https://keeposz.github.io/portfolio/
**GitHub repo:** https://github.com/Keeposz/portfolio

Good luck with your portfolio! 🚀

# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages at `https://mateusveloso16.github.io/portfoliomateusveloso/`

## Prerequisites

- Node.js installed on your computer
- Git installed
- A GitHub repository named `portfoliomateusveloso` (already created)

## Step-by-Step Deployment

### 1. Install Dependencies

```bash
npm install
# or if you use pnpm
pnpm install
```

### 2. Build for GitHub Pages

```bash
GITHUB_PAGES=true npm run build
```

This command will:
- Build your React app with the correct base path (`/portfoliomateusveloso/`)
- Output the files to the `docs/` folder (which GitHub Pages uses)

### 3. Commit and Push to GitHub

```bash
# Add all files to git
git add .

# Commit the changes
git commit -m "Build portfolio for GitHub Pages"

# Push to GitHub
git push origin main
```

### 4. Configure GitHub Pages Settings

1. Go to your GitHub repository: `https://github.com/MateusVeloso16/portfoliomateusveloso`
2. Click on **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and `/docs` folder
   - Click **Save**

### 5. Wait for Deployment

GitHub will automatically build and deploy your site. This usually takes 1-2 minutes.

Your portfolio will be live at: `https://mateusveloso16.github.io/portfoliomateusveloso/`

## Troubleshooting

### Issue: "No such file or directory @ dir_chdir0"

**Solution:** Make sure you ran `GITHUB_PAGES=true npm run build` to generate the `docs/` folder.

### Issue: Styles not loading or page looks broken

**Solution:** This usually means the base path is wrong. Make sure:
1. You built with `GITHUB_PAGES=true npm run build`
2. The `docs/` folder exists in your repository
3. GitHub Pages is set to deploy from `/docs` folder

### Issue: Page shows 404 after deployment

**Solution:** 
1. Check that the `docs/` folder is committed and pushed to GitHub
2. Go to your repository Settings > Pages and verify the source is set correctly
3. Wait a few minutes for GitHub to rebuild

## Future Updates

Every time you make changes to your portfolio:

1. Make your changes locally
2. Run `GITHUB_PAGES=true npm run build`
3. Commit and push: `git add . && git commit -m "Update portfolio" && git push origin main`
4. GitHub will automatically redeploy

## Local Testing (Optional)

To test your build locally before pushing to GitHub:

```bash
# Build for GitHub Pages
GITHUB_PAGES=true npm run build

# Preview the build
npm run preview
```

Then open `http://localhost:4173/portfoliomateusveloso/` in your browser.

## Need Help?

If you encounter any issues:
1. Check that all files are in the `docs/` folder after building
2. Verify GitHub Pages settings point to `/docs` folder
3. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
4. Wait 5 minutes and refresh the page

Good luck! 🚀

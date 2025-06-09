# 🚀 GitHub Pages Deployment Guide

## Quick Setup Steps

### 1. Update Repository Name

First, update the `base` path in `vite.config.ts`:

```typescript
// Replace 'your-repo-name' with your actual GitHub repository name
base: mode === 'production' ? '/your-actual-repo-name/' : '/',
```

### 2. Deploy Options

#### Option A: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy when you push to main branch

#### Option B: Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

### 3. Repository Settings

Make sure your GitHub repository has:

- Pages enabled in repository settings
- Source set to "Deploy from a branch" and select `gh-pages` branch
- OR Source set to "GitHub Actions" (recommended)

### 4. Access Your Site

Your portfolio will be available at:

```
https://your-username.github.io/your-repo-name/
```

## Troubleshooting

### Empty/Blank Page

- Check that the `base` path in `vite.config.ts` matches your repository name
- Ensure repository name is exactly the same (case-sensitive)
- Wait a few minutes for GitHub Pages to build and deploy

### Routing Issues

- The 404.html file handles SPA routing automatically
- If you get 404 errors on page refresh, this should resolve them

### Build Errors

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules dist
npm install
npm run build
```

## Local Testing

Test the production build locally:

```bash
npm run build
npx serve dist
```

Your portfolio is now ready for production deployment! 🎉

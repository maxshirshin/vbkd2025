# VBKD Gallery - GitHub Pages Deployment Guide

## Quick Setup (One-time)

### 1. Enable GitHub Pages in Your Repository Settings

1. Go to your repository: `https://github.com/maxshirshin/vbkd2025`
2. Click **Settings** tab (right side)
3. Scroll to **Pages** section (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **Deploy from a branch**
   - Branch: Select `main` 
   - Folder: Select `/dist`
   - Click **Save**

Your site will be published at: `https://maxshirshin.github.io/vbkd2025/`

### 2. Build and Push to GitHub

```powershell
# Build the project
npm run build

# Commit the dist folder (if not already in .gitignore)
git add dist/
git commit -m "Build: publish to GitHub Pages"
git push origin main
```

## Automated Deployment with GitHub Actions (Recommended)

For automatic builds on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then push this file and it will automatically deploy on every commit to main.

## Testing

1. **Production example on your Pages site:**
   - `https://maxshirshin.github.io/vbkd2025/production-example.html`

2. **Embed in your own site:**
   ```html
   <!-- Add to any HTML page -->
   <div id="my-gallery"></div>
   
   <script src="https://cdn.jsdelivr.net/npm/react@19/dist/umd/react.production.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/react-dom@19/dist/umd/react-dom.production.min.js"></script>
   <link rel="stylesheet" href="https://maxshirshin.github.io/vbkd2025/dist/style.css" />
   <script src="https://maxshirshin.github.io/vbkd2025/dist/vbkd-gallery.umd.js"></script>
   
   <script>
     document.addEventListener('DOMContentLoaded', () => {
       window.VBKDGallery.initVBKDGallery('my-gallery');
     });
   </script>
   ```

## Troubleshooting

- **404 errors**: Wait 1-2 minutes after push for GitHub Pages to build and deploy
- **Script not loading**: Check that dist folder is properly committed
- **Module errors**: Ensure React/ReactDOM CDN links are loaded before the gallery script

## Local Testing

```powershell
# Dev mode (opens example-injection.html)
npm run dev

# Build and preview production
npm run build
npm run preview
```

---

**Useful Links:**
- Repo: https://github.com/maxshirshin/vbkd2025
- GitHub Pages site: https://maxshirshin.github.io/vbkd2025/
- Production example: https://maxshirshin.github.io/vbkd2025/production-example.html

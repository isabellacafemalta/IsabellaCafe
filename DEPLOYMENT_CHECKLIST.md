# Isabella Café - Deployment Checklist

## Pre-Deployment (Local)

- [ ] Run `pnpm install` to install all dependencies
- [ ] Run `pnpm dev` and verify website works locally
- [ ] Test all menu tabs (Coffee, Food, Pastries, Beer/Wine, Breakfast)
- [ ] Test responsive design on mobile (F12 → Toggle device toolbar)
- [ ] Test all navigation links and CTAs
- [ ] Test social media links (Facebook, Instagram)
- [ ] Run `pnpm build` and verify build completes without errors
- [ ] Verify `dist/` folder is created with all files

## Git Setup

- [ ] Initialize git: `git init`
- [ ] Add all files: `git add .`
- [ ] Create initial commit: `git commit -m "Initial commit: Isabella Café website"`
- [ ] Create GitHub repository
- [ ] Add remote: `git remote add origin https://github.com/YOUR_USERNAME/isabella-cafe.git`
- [ ] Push to GitHub: `git push -u origin main`

## VERCEL DEPLOYMENT

### Pre-Deployment
- [ ] Vercel account created (free tier)
- [ ] GitHub account connected to Vercel
- [ ] Repository pushed to GitHub

### Deployment Steps
- [ ] Go to vercel.com and click "New Project"
- [ ] Import GitHub repository
- [ ] Set Build Command: `pnpm build`
- [ ] Set Output Directory: `dist`
- [ ] Set Install Command: `pnpm install`
- [ ] Add Environment Variables:
  - [ ] `NODE_ENV=production`
  - [ ] `VITE_APP_TITLE=Isabella Café`
  - [ ] `VITE_APP_ID=isabella-cafe`
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Test production URL

### Post-Deployment
- [ ] Verify website loads correctly
- [ ] Test all menu tabs
- [ ] Test responsive design
- [ ] Test social media links
- [ ] (Optional) Add custom domain in Settings → Domains

---

## NETLIFY DEPLOYMENT

### Pre-Deployment
- [ ] Netlify account created (free tier)
- [ ] GitHub account connected to Netlify
- [ ] Repository pushed to GitHub

### Deployment Steps
- [ ] Go to netlify.com and click "Add new site"
- [ ] Select "Import an existing project"
- [ ] Choose GitHub and authorize
- [ ] Select your repository
- [ ] Set Build command: `pnpm build`
- [ ] Set Publish directory: `dist`
- [ ] Add Environment Variables:
  - [ ] `NODE_ENV=production`
  - [ ] `VITE_APP_TITLE=Isabella Café`
  - [ ] `VITE_APP_ID=isabella-cafe`
- [ ] Click "Deploy site"
- [ ] Wait for deployment to complete
- [ ] Test production URL

### Post-Deployment
- [ ] Verify website loads correctly
- [ ] Test all menu tabs
- [ ] Test responsive design
- [ ] Test social media links
- [ ] (Optional) Add custom domain in Site settings → Domain management

---

## RAILWAY DEPLOYMENT

### Pre-Deployment
- [ ] Railway account created (free tier)
- [ ] GitHub account connected to Railway
- [ ] Repository pushed to GitHub

### Deployment Steps
- [ ] Go to railway.app and click "New Project"
- [ ] Select "Deploy from GitHub"
- [ ] Authorize GitHub and select your repository
- [ ] Railway auto-detects project configuration
- [ ] Add Environment Variables:
  - [ ] `NODE_ENV=production`
  - [ ] `VITE_APP_TITLE=Isabella Café`
  - [ ] `VITE_APP_ID=isabella-cafe`
  - [ ] `PORT=3000`
- [ ] Verify Build Command: `pnpm build`
- [ ] Verify Start Command: `node dist/index.js`
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Test production URL

### Post-Deployment
- [ ] Verify website loads correctly
- [ ] Test all menu tabs
- [ ] Test responsive design
- [ ] Test social media links
- [ ] (Optional) Add custom domain in Settings → Domains

---

## ENVIRONMENT VARIABLES SUMMARY

### Required for All Platforms
```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
```

### Optional
```
VITE_ANALYTICS_ENDPOINT=https://your-analytics-endpoint.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
PORT=3000 (Railway only)
```

---

## TROUBLESHOOTING

### Build Fails
- [ ] Check Node version (should be 22.x)
- [ ] Check pnpm version (should be 10.x+)
- [ ] Delete `node_modules` and reinstall: `pnpm install`
- [ ] Check for TypeScript errors: `pnpm check`

### Website Shows 404
- [ ] Verify `dist/` folder exists after build
- [ ] Check that redirect rules are configured (Netlify/Railway)
- [ ] Verify environment variables are set

### Static Files Not Loading
- [ ] Verify files in `client/public/` (favicon.ico, robots.txt, sitemap.xml)
- [ ] Check that image URLs use CDN paths, not local paths
- [ ] Verify `dist/public/` contains all static files

### Performance Issues
- [ ] Enable caching for static assets (1 year)
- [ ] Enable minification and optimization
- [ ] Check for large bundle size: `pnpm build --analyze`

---

## AFTER DEPLOYMENT

- [ ] Set up analytics (Google Analytics, Vercel Analytics, etc.)
- [ ] Monitor error logs regularly
- [ ] Set up automatic deployments on git push
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate (auto-configured on all platforms)
- [ ] Test email notifications (if contact form added)
- [ ] Monitor performance metrics

---

## ROLLBACK PROCEDURE

If deployment has issues:

### Vercel
1. Go to Deployments
2. Find previous working deployment
3. Click "Redeploy"

### Netlify
1. Go to Deploys
2. Find previous working deploy
3. Click "Publish deploy"

### Railway
1. Go to Deployments
2. Find previous working deployment
3. Click "Redeploy"

---

## NEXT STEPS

1. Choose your preferred platform (Vercel, Netlify, or Railway)
2. Follow the deployment steps for that platform
3. Test the production website thoroughly
4. Set up custom domain (optional but recommended)
5. Monitor performance and error logs
6. Plan future enhancements (online ordering, reservations, etc.)

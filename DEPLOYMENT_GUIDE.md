# Isabella Café Website — Deployment Guide

Complete instructions for deploying to Vercel, Netlify, and Railway with all necessary environment variables.

---

## 1. VERCEL DEPLOYMENT

### Prerequisites
- Vercel account (free tier available)
- GitHub account with repository

### Step-by-Step Deployment

#### 1.1 Prepare Your Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Isabella Café website"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/isabella-cafe.git
git branch -M main
git push -u origin main
```

#### 1.2 Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select project root: `/` (default)
5. Framework Preset: **Next.js** (or leave as Auto-detect)
6. Build Command: `pnpm build`
7. Output Directory: `dist`
8. Install Command: `pnpm install`

#### 1.3 Environment Variables (Vercel Dashboard)
Add these in **Settings → Environment Variables**:

```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
```

#### 1.4 Deploy
Click "Deploy" and wait for build to complete.

#### 1.5 Custom Domain (Optional)
1. Go to **Settings → Domains**
2. Add your custom domain
3. Update DNS records as instructed

---

## 2. NETLIFY DEPLOYMENT

### Prerequisites
- Netlify account (free tier available)
- GitHub account with repository

### Step-by-Step Deployment

#### 2.1 Prepare Your Repository
Same as Vercel (see section 1.1)

#### 2.2 Deploy via Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and authorize
4. Select your repository
5. Configure build settings:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist`
   - **Node version:** 22

#### 2.3 Environment Variables (Netlify Dashboard)
Go to **Site settings → Build & deploy → Environment** and add:

```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
```

#### 2.4 Deploy
Click "Deploy site" and wait for build to complete.

#### 2.5 Custom Domain (Optional)
1. Go to **Site settings → Domain management**
2. Add custom domain
3. Update DNS records as instructed

#### 2.6 Netlify Configuration File (Optional but Recommended)
Create `netlify.toml` in project root:

```toml
[build]
  command = "pnpm build"
  publish = "dist"
  node_version = "22"

[build.environment]
  NODE_ENV = "production"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 3. RAILWAY DEPLOYMENT

### Prerequisites
- Railway account (free tier available)
- GitHub account with repository

### Step-by-Step Deployment

#### 3.1 Prepare Your Repository
Same as Vercel (see section 1.1)

#### 3.2 Deploy via Railway Dashboard
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Authorize GitHub and select your repository
5. Railway will auto-detect the project

#### 3.3 Configure Build & Start Commands
In Railway dashboard, go to **Variables** and set:

```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
PORT=3000
```

#### 3.4 Build & Start Configuration
Railway should auto-detect from `package.json`:
- **Build Command:** `pnpm build`
- **Start Command:** `node dist/index.js`

If not auto-detected, add to `package.json`:
```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js"
  }
}
```

#### 3.5 Environment Variables (Railway Dashboard)
Click **Variables** and add:

```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
PORT=3000
```

#### 3.6 Deploy
Click "Deploy" and Railway will build and deploy automatically.

#### 3.7 Custom Domain (Optional)
1. Go to **Settings → Domains**
2. Add your custom domain
3. Update DNS records as instructed

#### 3.8 Railway Configuration File (Optional but Recommended)
Create `railway.json` in project root:

```json
{
  "build": {
    "builder": "nixpacks"
  }
}
```

---

## ENVIRONMENT VARIABLES REFERENCE

### Required Variables (All Platforms)
```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
```

### Optional Variables
```
VITE_ANALYTICS_ENDPOINT=https://your-analytics-endpoint.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
PORT=3000 (Railway only)
```

---

## BUILD & START COMMANDS

### Build Command (All Platforms)
```bash
pnpm build
```

### Start Command
- **Vercel:** Automatic (serverless)
- **Netlify:** Automatic (static)
- **Railway:** `node dist/index.js`

---

## PROJECT STRUCTURE FOR DEPLOYMENT

```
isabella-cafe/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── .gitignore
└── DEPLOYMENT_GUIDE.md
```

---

## TROUBLESHOOTING

### Build Fails on Vercel/Netlify/Railway
1. **Check Node version:** Ensure 22.x is installed
2. **Check pnpm version:** Run `pnpm --version` (should be 10.x+)
3. **Clear cache:** Delete `node_modules` and `.pnpm-store`, then reinstall
4. **Check dependencies:** Run `pnpm install` locally to verify

### Static Files Not Loading
1. Verify files are in `client/public/` (favicon, robots.txt, sitemap.xml)
2. Check that image URLs use CDN paths (not local paths)
3. Ensure `dist/public/` contains all static files after build

### 404 Errors on Routes
1. Add redirect rule to serve `index.html` for all routes
2. **Vercel:** Auto-configured for SPA
3. **Netlify:** Use `netlify.toml` redirect rule (included above)
4. **Railway:** Configure Express middleware in `server/index.ts`

### Environment Variables Not Loading
1. **Vercel/Netlify:** Redeploy after adding variables
2. **Railway:** Restart deployment after updating variables
3. Verify variable names match exactly (case-sensitive)

---

## PERFORMANCE OPTIMIZATION

### Recommended Settings

#### Vercel
- **Edge Functions:** Enabled (for faster responses)
- **Caching:** Set to 1 year for static assets

#### Netlify
- **Asset Optimization:** Enabled
- **Minify:** Enabled
- **Cache:** Set to 1 year for static assets

#### Railway
- **Auto-deploy:** Enabled
- **Health Check:** `/` (default)

---

## MONITORING & LOGS

### Vercel
- Dashboard → **Deployments** → Click deployment → **Logs**

### Netlify
- Site overview → **Deploys** → Click deploy → **Deploy log**

### Railway
- Project → **Deployments** → Click deployment → **Logs**

---

## ROLLBACK

### Vercel
1. Go to **Deployments**
2. Find previous deployment
3. Click **Redeploy**

### Netlify
1. Go to **Deploys**
2. Find previous deploy
3. Click **Publish deploy**

### Railway
1. Go to **Deployments**
2. Find previous deployment
3. Click **Redeploy**

---

## NEXT STEPS

1. **Test locally:** Run `pnpm dev` and verify all features work
2. **Build locally:** Run `pnpm build` to verify build succeeds
3. **Deploy:** Follow platform-specific instructions above
4. **Test production:** Verify all pages load and links work
5. **Set up monitoring:** Enable analytics and error tracking
6. **Configure domain:** Add custom domain if needed

---

## SUPPORT

For platform-specific issues:
- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **Railway:** https://docs.railway.app

For Isabella Café website issues, refer to project README.md

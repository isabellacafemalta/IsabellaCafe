# Environment Variables Reference

## Overview

Isabella Café website uses environment variables to configure application settings and integrations. This document lists all available variables and how to use them on each platform.

---

## Required Variables

### NODE_ENV
- **Type:** String
- **Values:** `production` or `development`
- **Default:** `development`
- **Description:** Sets the application environment. Use `production` for all deployments.
- **Example:** `NODE_ENV=production`

### VITE_APP_TITLE
- **Type:** String
- **Default:** `Isabella Café`
- **Description:** Application title displayed in browser tab and meta tags
- **Example:** `VITE_APP_TITLE=Isabella Café`

### VITE_APP_ID
- **Type:** String
- **Default:** `isabella-cafe`
- **Description:** Unique application identifier used for analytics and tracking
- **Example:** `VITE_APP_ID=isabella-cafe`

---

## Optional Variables

### VITE_ANALYTICS_ENDPOINT
- **Type:** URL
- **Default:** Not set
- **Description:** Analytics service endpoint for tracking website visits and user behavior
- **Example:** `VITE_ANALYTICS_ENDPOINT=https://analytics.example.com`
- **Platforms:** All

### VITE_ANALYTICS_WEBSITE_ID
- **Type:** String
- **Default:** Not set
- **Description:** Unique identifier for this website in your analytics service
- **Example:** `VITE_ANALYTICS_WEBSITE_ID=abc123def456`
- **Platforms:** All

### PORT
- **Type:** Number
- **Default:** `3000`
- **Description:** Server port for Express.js backend (Railway only)
- **Example:** `PORT=3000`
- **Platforms:** Railway only

---

## Auto-Injected Variables (Manus Platform Only)

These variables are automatically injected by Manus and should **NOT** be set manually:

| Variable | Purpose |
|----------|---------|
| `BUILT_IN_FORGE_API_KEY` | API authentication key for Manus services |
| `BUILT_IN_FORGE_API_URL` | Manus API endpoint URL |
| `JWT_SECRET` | JWT token signing secret |
| `OAUTH_SERVER_URL` | OAuth server endpoint |
| `OWNER_NAME` | Website owner name |
| `OWNER_OPEN_ID` | Owner OpenID identifier |
| `VITE_FRONTEND_FORGE_API_KEY` | Frontend API key |
| `VITE_FRONTEND_FORGE_API_URL` | Frontend API endpoint |
| `VITE_OAUTH_PORTAL_URL` | OAuth portal URL |

---

## Platform-Specific Setup

### Vercel

**Method 1: Dashboard**
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables one by one
4. Redeploy project

**Method 2: vercel.json**
```json
{
  "env": {
    "NODE_ENV": "production",
    "VITE_APP_TITLE": "Isabella Café",
    "VITE_APP_ID": "isabella-cafe"
  }
}
```

**Method 3: .env.local (Local Development)**
```
NODE_ENV=development
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
```

### Netlify

**Method 1: Dashboard**
1. Go to Site settings
2. Click "Build & deploy"
3. Click "Environment"
4. Add variables
5. Redeploy site

**Method 2: netlify.toml**
```toml
[build.environment]
  NODE_ENV = "production"
  VITE_APP_TITLE = "Isabella Café"
  VITE_APP_ID = "isabella-cafe"
```

**Method 3: .env.local (Local Development)**
```
NODE_ENV=development
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
```

### Railway

**Method 1: Dashboard**
1. Go to Project
2. Click "Variables"
3. Add variables
4. Restart deployment

**Method 2: railway.json**
```json
{
  "variables": {
    "NODE_ENV": "production",
    "VITE_APP_TITLE": "Isabella Café",
    "VITE_APP_ID": "isabella-cafe",
    "PORT": "3000"
  }
}
```

**Method 3: .env.local (Local Development)**
```
NODE_ENV=development
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
PORT=3000
```

---

## Local Development Setup

### 1. Create .env.local file
```bash
cp .env.example .env.local
```

### 2. Edit .env.local
```
NODE_ENV=development
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
```

### 3. Start development server
```bash
pnpm dev
```

### 4. Verify variables are loaded
Open browser console and check that variables are available in `window.__ENV__`

---

## Build-Time vs Runtime Variables

### Build-Time Variables (Vite)
Variables starting with `VITE_` are embedded during build and available in browser:
- `VITE_APP_TITLE`
- `VITE_APP_ID`
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

**Access in code:**
```typescript
console.log(import.meta.env.VITE_APP_TITLE);
```

### Runtime Variables (Node.js)
Variables without `VITE_` prefix are only available in server code:
- `NODE_ENV`
- `PORT`

**Access in code:**
```typescript
console.log(process.env.NODE_ENV);
```

---

## Security Best Practices

1. **Never commit .env files to Git**
   - Add `.env.local` to `.gitignore`
   - Use platform-specific environment variable dashboards

2. **Use different values per environment**
   - Development: `VITE_APP_ID=isabella-cafe-dev`
   - Production: `VITE_APP_ID=isabella-cafe`

3. **Rotate sensitive variables regularly**
   - Change API keys monthly
   - Update analytics IDs when needed

4. **Use secrets for sensitive data**
   - Never expose API keys in code
   - Use platform secret management features

5. **Audit variable access**
   - Review who has access to environment variables
   - Monitor changes in platform dashboards

---

## Troubleshooting

### Variables Not Loading
1. **Verify variable names are correct** (case-sensitive)
2. **Redeploy after adding variables** (Vercel/Netlify/Railway)
3. **Check .env.local file exists** (local development)
4. **Restart dev server** after changing .env.local

### Build-Time Variables Not Available
1. **Ensure variable name starts with VITE_**
2. **Rebuild project** after adding variables
3. **Check browser console** for errors

### Runtime Variables Not Available
1. **Ensure variable name does NOT start with VITE_**
2. **Check server logs** for errors
3. **Verify platform dashboard** shows variable is set

---

## Examples

### Development Setup
```bash
# .env.local
NODE_ENV=development
VITE_APP_TITLE=Isabella Café (Dev)
VITE_APP_ID=isabella-cafe-dev
VITE_ANALYTICS_ENDPOINT=http://localhost:3001
VITE_ANALYTICS_WEBSITE_ID=dev-123
PORT=3000
```

### Production Setup (Vercel)
```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=prod-456
```

### Production Setup (Railway)
```
NODE_ENV=production
VITE_APP_TITLE=Isabella Café
VITE_APP_ID=isabella-cafe
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=prod-456
PORT=3000
```

---

## Additional Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Netlify Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)
- [Railway Environment Variables](https://docs.railway.app/guides/variables)

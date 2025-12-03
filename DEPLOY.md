# Deploy Your Portfolio Website

## Option 1: Vercel (Recommended - Easiest)

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign up/login with your GitHub account
2. Click "Add New Project"
3. Import your repository: `TanvirNibir/Portfolio`
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

**Your site URL will be:** `https://portfolio-*.vercel.app` (or you can add a custom domain)

---

## Option 2: Netlify

### Steps:
1. Go to [netlify.com](https://netlify.com) and sign up/login with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your `Portfolio` repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

**Your site URL will be:** `https://portfolio-*.netlify.app`

---

## Option 3: GitHub Pages (Free but requires setup)

### Steps:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Add to `vite.config.js`:
   ```js
   base: '/Portfolio/'
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repository settings → Pages → Source: `gh-pages` branch

---

## Option 4: Render

### Steps:
1. Go to [render.com](https://render.com) and sign up with GitHub
2. Click "New" → "Static Site"
3. Connect your `Portfolio` repository
4. Build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Click "Create Static Site"

---

## Quick Deploy Commands

### Vercel (CLI):
```bash
npm install -g vercel
vercel
```

### Netlify (CLI):
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

**Recommendation:** Use **Vercel** - it's the easiest and best for React apps!


---
description: How to deploy the verification portal to production
---

# Deployment Workflow

Follow these steps to deploy your application to a production environment (like Vercel, Netlify, or a VPS).

## 1. Environment Check
Ensure you have all the necessary assets in the `public` folder:
- `seal.png` (Institutional Seal)
- `svc_logo.png` (Original Logo)

## 2. Local Build Verification
// turbo
Run the build command locally to ensure there are no TypeScript or Next.js errors:
```bash
npm run build
```

## 3. Deployment Options

### Option A: Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Connect your repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy the app.

### Option B: Manual Server (VPS)
1. Run `npm run build` on your server.
2. Start the production server:
```bash
npm run start
```
3. Use a process manager like `pm2` to keep the app running:
```bash
pm2 start npm --name "verify-portal" -- start
```

## 4. Post-Deployment
- Verify that the registration number `CC-02-02-19-3575` works as expected.
- Test the redirect button at the bottom.
- Check the mobile responsiveness.

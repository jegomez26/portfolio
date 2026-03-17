# GitHub Pages Deployment Guide

## Quick Start - 5 Minutes Setup

### Step 1: Initialize Git Repository
```bash
cd Portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub.com](https://github.com/new)
2. Create a new repository named `Portfolio` or `yourusername.github.io`
3. Copy the repository URL

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/yourusername/Portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section
4. Under "Build and deployment"
   - Source: Select "Deploy from a branch"
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 5: Wait for Deployment
GitHub will automatically build and deploy your site. Once the status shows "Your site is live at...", you're done!

## Your Portfolio URL

- If repository is named `Portfolio`: `https://yourusername.github.io/Portfolio/`
- If repository is named `yourusername.github.io`: `https://yourusername.github.io/`

## Customization Checklist Before Deploying

- [ ] Update your name in `index.html`
- [ ] Update profile description
- [ ] Add your email address
- [ ] Add your phone number
- [ ] Update project information
- [ ] Add project images to `assets/` folder
- [ ] Update social media links
- [ ] Change color scheme (optional)
- [ ] Add your projects with links

## Making Updates

After customization:
```bash
git add .
git commit -m "Customize portfolio content"
git push
```

GitHub will automatically rebuild and redeploy your site!

## Troubleshooting

### Site not showing up
- Verify repository is public
- Check that GitHub Pages is enabled in Settings
- Wait up to 1 minute for deployment

### CSS/JS not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console (F12) for errors
- Verify all file paths are correct

### Images not showing
- Ensure images are in the `assets/` folder
- Use relative paths: `assets/image.jpg`
- Check file extensions (.jpg, .png, etc.)

## Advanced: Custom Domain

To use your own domain (like www.yourname.com):

1. In your DNS provider, create a CNAME record pointing to `yourusername.github.io`
2. In GitHub Settings → Pages → Custom domain, enter your domain
3. Click Save
4. Wait for SSL certificate to be issued

## Additional Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [Custom Domains Help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Need Help?** Check the README.md for more information or contact GitHub Support.

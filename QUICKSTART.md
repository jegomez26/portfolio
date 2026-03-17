# Quick Start Guide

Get your portfolio live in minutes!

## Step 1: Personalize Your Content (5 min)

Open `index.html` in your editor and find and replace:

### Hero Section
```html
<!-- FIND THIS -->
<h1 class="hero-title">Hi, I'm Your Name</h1>
<p class="hero-subtitle">Full Stack Developer | Designer | Tech Enthusiast</p>

<!-- REPLACE WITH YOUR INFO -->
<h1 class="hero-title">Hi, I'm John Doe</h1>
<p class="hero-subtitle">Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
```

### About Section
```html
<!-- Update the description paragraphs -->
<!-- Add your real experience and background -->
```

### Contact Section
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<p>City, Country</p>
```

## Step 2: Add Your Projects (5 min)

For each project, update:
- Project image: Replace `<div class="placeholder">Project 1</div>` with an actual image or keep placeholder
- Project title: Update project name
- Description: Write what the project does
- Technologies: List the tools/languages used
- Links: Add GitHub and live demo URLs

Example:
```html
<h3 class="project-title">E-Commerce Platform</h3>
<p class="project-description">A full-stack e-commerce platform with payment integration and admin dashboard.</p>
<span class="tag">React</span>
<span class="tag">Node.js</span>
<span class="tag">Stripe</span>
<a href="https://github.com/yourname/ecommerce" class="project-link">GitHub</a>
<a href="https://ecommerce-demo.com" class="project-link">Live Demo</a>
```

## Step 3: Update Skills (3 min)

Replace the skill categories with your actual skills:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <ul class="skill-list">
        <li>React</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <!-- Add your skills -->
    </ul>
</div>
```

## Step 4: Add Social Links (2 min)

Update the Contact section:
```html
<a href="https://github.com/yourusername" class="social-link">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" class="social-link">LinkedIn</a>
<a href="https://twitter.com/yourhandle" class="social-link">Twitter</a>
```

## Step 5: (Optional) Customize Colors

Edit `css/styles.css` - find the root variables:

```css
:root {
    --primary-color: #667eea;      /* Change this to your brand color */
    --secondary-color: #764ba2;    /* Accent color */
}
```

Popular color palettes:
- Modern Blue: `#3B82F6` and `#1D4ED8`
- Vibrant Purple: `#9333EA` and `#7e22ce`
- Professional Teal: `#06B6D4` and `#0891B2`

## Step 6: Test Locally

Option A - Open in browser:
```bash
# Just open index.html directly in your browser
```

Option B - Use Python server:
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

Option C - Use Node.js:
```bash
npx http-server
# Then visit http://localhost:8080
```

## Step 7: Deploy to GitHub

```bash
git init
git add .
git commit -m "My awesome portfolio"
git remote add origin https://github.com/yourusername/Portfolio.git
git push -u origin main
```

Then enable GitHub Pages in repository Settings.

## Common Replacements Checklist

- [ ] "Your Name" → Your actual name
- [ ] Email address → Your email
- [ ] Phone number → Your phone
- [ ] "City, Country" → Your location
- [ ] Project names and descriptions
- [ ] Technology tags
- [ ] Project links (GitHub, Live Demo)
- [ ] Social media URLs
- [ ] About section content
- [ ] Skills list

## Need Images?

Free resources:
- **Unsplash**: unsplash.com
- **Pexels**: pexels.com
- **Pixabay**: pixabay.com
- **Placeholder**: via placeholder image generator

Or use the placeholder style - it's actually quite professional!

## File Organization

```
Portfolio/
├── index.html          ← Main file (edit content here)
├── css/styles.css      ← Edit colors and styling
├── js/script.js        ← Don't touch unless you want advanced changes
├── assets/             ← Add your images here
├── README.md           ← Update if needed
└── DEPLOYMENT.md       ← Follow for GitHub Pages setup
```

## You're Ready! 🚀

Your portfolio is now ready to customize and deploy. Follow the DEPLOYMENT.md file to get it live on GitHub Pages!

---

**Questions?** Check the README.md or DEPLOYMENT.md files for detailed information.

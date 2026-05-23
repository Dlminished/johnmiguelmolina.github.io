# Deployment Guide for Your Portfolio

## Quick Start - Deploy to GitHub Pages

### Option 1: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop**
   - Go to https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Create Repository**
   - Open GitHub Desktop
   - Click "File" → "New Repository"
   - Name: `johnmiguelmolina.github.io`
   - Local Path: Select your portfolio-website folder
   - Click "Create Repository"

3. **Publish to GitHub**
   - Click "Publish repository" button
   - Uncheck "Keep this code private"
   - Click "Publish repository"

4. **Enable GitHub Pages**
   - Go to https://github.com/johnmiguelmolina/johnmiguelmolina.github.io
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-3 minutes
   - Your site will be live at: https://johnmiguelmolina.github.io

### Option 2: Using Git Command Line

1. **Initialize Git Repository**
   ```bash
   cd c:/Users/JohnMiguelMolina/Desktop/portfolio-website
   git init
   git add .
   git commit -m "Initial commit: Complete portfolio website"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `johnmiguelmolina.github.io`
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/johnmiguelmolina/johnmiguelmolina.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Save and wait a few minutes
   - Visit: https://johnmiguelmolina.github.io

### Option 3: Using GitHub Web Interface

1. **Create New Repository**
   - Go to https://github.com/new
   - Name: `johnmiguelmolina.github.io`
   - Public repository
   - Create repository

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag all files from your portfolio-website folder
   - Commit changes

3. **Enable GitHub Pages**
   - Settings → Pages → Select "main" branch → Save
   - Your site will be live at: https://johnmiguelmolina.github.io

## Alternative Hosting Options

### Netlify (Free, Easy)
1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Deploy! Your site will be live instantly

### Vercel (Free, Fast)
1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Deploy! Automatic deployments on every push

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form (currently shows alert)
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify social media links work
- [ ] Check that favicon appears in browser tab
- [ ] Test smooth scrolling
- [ ] Verify all animations work

## Updating Your Portfolio

After making changes:

**Using GitHub Desktop:**
1. Make your changes
2. Open GitHub Desktop
3. Write commit message
4. Click "Commit to main"
5. Click "Push origin"

**Using Git Command Line:**
```bash
git add .
git commit -m "Update portfolio content"
git push
```

Your changes will be live in 1-2 minutes!

## Custom Domain (Optional)

To use a custom domain like `johnmiguelmolina.com`:

1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. In your repository, create a file named `CNAME` with your domain
3. In your domain registrar, add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: johnmiguelmolina.github.io
   ```
4. Wait 24-48 hours for DNS propagation

## Making the Contact Form Functional

The contact form currently shows an alert. To make it send real emails:

### Option 1: Formspree (Easiest)
1. Go to https://formspree.io/
2. Sign up for free account
3. Create a new form
4. Replace the form tag in index.html:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: EmailJS
1. Go to https://www.emailjs.com/
2. Sign up and create email service
3. Add EmailJS script to your HTML
4. Update the JavaScript to use EmailJS

### Option 3: Netlify Forms
If hosting on Netlify, just add `netlify` attribute to form:
```html
<form name="contact" method="POST" data-netlify="true">
```

## Troubleshooting

**Site not loading?**
- Wait 5-10 minutes after first deployment
- Check GitHub Pages settings
- Ensure repository is public

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for GitHub to rebuild
- Check that you pushed changes to GitHub

**404 Error?**
- Verify repository name is exactly: `johnmiguelmolina.github.io`
- Check that index.html is in root directory
- Ensure GitHub Pages is enabled in settings

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Support: https://support.github.com/
- Stack Overflow: https://stackoverflow.com/questions/tagged/github-pages

---

**Your portfolio is ready to deploy! Choose the method that works best for you and get it online today! 🚀**
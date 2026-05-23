# John Miguel Molina - Portfolio Website

A modern, responsive portfolio website showcasing my professional profile as a Workday Integration and Reporting Consultant.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and active link highlighting
- **Sections Include**:
  - Hero/Home section with social links
  - About/Summary section
  - Education timeline
  - Work Experience timeline
  - Skills showcase with categorized tags
  - Certifications display
  - Contact form with social media links
- **Animations**: Scroll-reveal animations and hover effects
- **Mobile-Friendly**: Hamburger menu for mobile devices
- **Back to Top Button**: Easy navigation for long pages

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet with responsive design
├── js/
│   └── script.js      # JavaScript for interactivity
├── images/            # Folder for your images (profile, projects, etc.)
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- A text editor (VS Code, Sublime Text, etc.)
- A web browser
- Git installed on your computer
- A GitHub account

### Local Setup

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/johnmiguelmolina/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the project**
   - Open `index.html` in your web browser to view the site locally
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Customize the content**
   - The portfolio has been customized with John Miguel Molina's information
   - All sections have been updated with professional details
   - Contact information and social links are configured

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --accent-color: #3b82f6;       /* Accent color */
    /* ... other colors */
}
```

### Adding Your Photo

1. Add your photo to the `images/` folder
2. Update the hero section in `index.html` to include an image:
   ```html
   <div class="hero-image">
       <img src="images/your-photo.jpg" alt="Your Name">
   </div>
   ```

### Modifying Sections

- **Add more education entries**: Copy and paste a `.timeline-item` div in the education section
- **Add more work experience**: Copy and paste a `.timeline-item` div in the experience section
- **Add more skills**: Add more `.skill-tag` spans in the skills section
- **Add more certifications**: Copy and paste a `.cert-card` div in the certifications section

## 📤 Deploying to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com)
   - Click the "+" icon and select "New repository"
   - Name it `johnmiguelmolina.github.io`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all your portfolio files
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at `https://johnmiguelmolina.github.io`

### Method 2: Using Git Command Line

1. **Initialize Git in your project folder**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial commit: Add portfolio website"
   ```

2. **Create a new repository on GitHub**
   - Go to GitHub and create a new repository named `johnmiguelmolina.github.io`

3. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/johnmiguelmolina/johnmiguelmolina.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Save and wait a few minutes
   - Your site will be live at `https://johnmiguelmolina.github.io`

### Method 3: Using a Custom Repository Name

If you don't want to use `yourusername.github.io`:

1. Create a repository with any name (e.g., `my-portfolio`)
2. Push your code to that repository
3. Enable GitHub Pages in Settings
4. Your site will be at `https://johnmiguelmolina.github.io/my-portfolio`

## 🔧 Configuration

### Contact Form

The contact form currently shows an alert. To make it functional:

1. **Use a form service** like:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [EmailJS](https://www.emailjs.com/)

2. **Example with Formspree**:
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
       <!-- form fields -->
   </form>
   ```

### Analytics (Optional)

Add Google Analytics to track visitors:

1. Get your tracking ID from [Google Analytics](https://analytics.google.com/)
2. Add this code before the closing `</head>` tag in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (optional)

## ✅ Customization Checklist

Portfolio has been customized with:

- [x] Name and title (John Miguel Molina - Workday Integration & Reporting Consultant)
- [x] About/summary text (Professional background and expertise)
- [x] Education details (BS Civil Engineering)
- [x] Work experience (IBM, Accenture)
- [x] Skills list (Workday-specific skills and technical expertise)
- [x] Certifications (Workday certifications and PE license)
- [x] Contact information (molinajohnmiguel@gmail.com, Philippines)
- [x] Social media links (GitHub, LinkedIn)
- [ ] Favicon (optional - can be added later)
- [ ] Meta tags for SEO (can be enhanced)

## 🎯 SEO Optimization

Add these meta tags to the `<head>` section of `index.html`:

```html
<meta name="description" content="Your professional portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
<meta property="og:image" content="https://johnmiguelmolina.github.io/images/preview.jpg">
<meta property="og:url" content="https://johnmiguelmolina.github.io">
<meta name="twitter:card" content="summary_large_image">
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

If you have any questions or suggestions, feel free to reach out:

- Email: molinajohnmiguel@gmail.com
- LinkedIn: [John Miguel Molina](https://linkedin.com/in/johnmiguelmolina)
- GitHub: [johnmiguelmolina](https://github.com/johnmiguelmolina)

## 🙏 Acknowledgments

- Font Awesome for icons
- Modern portfolio design principles
- The open-source community

---

**Made with ❤️ by John Miguel Molina**

*Workday Integration & Reporting Consultant | Civil Engineer*

*Last updated: May 2026*
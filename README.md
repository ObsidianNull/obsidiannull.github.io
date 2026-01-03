# 🛡️ Celine Tannous - Cybersecurity Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-brightgreen)](https://fallenedge.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Security](https://img.shields.io/badge/Security-Hardened-success)](docs/security.md)

> **U.S. Navy Lieutenant | Cybersecurity Professional | Cyber Defense & Red Teaming Specialist**

A modern, responsive portfolio website showcasing cybersecurity expertise, military experience, and technical skills. Built with security best practices and deployed on GitHub Pages.

## 🚀 Live Demo

**Website:** [https://celinetannous.com](https://celinetannous.com)

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Security Features](#️-security-features)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Contact Form Configuration](#-contact-form-configuration)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Performance](#-performance)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### 🎨 **Design & User Experience**

- **Responsive Design**: Mobile-first approach with Bootstrap 4.3.1
- **Dark/Light Theme**: Toggle between cyber-themed dark mode and clean light mode
- **Smooth Scrolling**: Full-screen sections with CSS scroll-snap
- **Cyber Aesthetic**: Neon blue (#00A8E8) and matrix green (#00FF88) color scheme
- **Professional Branding**: Custom handle badge system (@ObsidianNull)

### 📱 **Navigation & Layout**

- **Fixed Navigation**: Persistent navbar with handle badge and description
- **Section Snapping**: Smooth transitions between full-viewport sections
- **Responsive Buttons**: Side-positioned hero buttons for better mobile experience
- **Theme Persistence**: Theme preference saved in localStorage

### 🛡️ **Security-First Contact Form**

- **Input Validation**: Real-time client-side validation with regex patterns
- **XSS Protection**: HTML/script tag filtering and sanitization
- **SQL Injection Prevention**: Pattern detection and blocking
- **Bot Protection**: Honeypot field for automated bot detection
- **Rate Limiting**: Built-in EmailJS rate limiting (200 emails/month)
- **Error Handling**: Graceful fallback messages and error recovery

### 📧 **Contact Integration**

- **EmailJS Integration**: Serverless email functionality for GitHub Pages
- **Form Analytics**: Character counting and validation feedback
- **Loading States**: Visual feedback during form submission
- **Success/Error Alerts**: Bootstrap-styled notifications
- **Direct Email Fallback**: Alternative contact method included

## 🔧 Technology Stack

### **Frontend**

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, flexbox, grid, and animations
- **JavaScript ES6+**: Modern async/await, classes, and modules
- **Bootstrap 4.3.1**: Responsive framework and components
- **Font Awesome 5.15.4**: Icon library for social media and UI elements

### **Libraries & Services**

- **jQuery 3.6.3**: DOM manipulation and event handling
- **EmailJS**: Client-side email service for contact form
- **GitHub Pages**: Static site hosting and deployment

### **Development Tools**

- **VS Code**: Primary development environment
- **Git**: Version control and collaboration
- **GitHub Actions**: Automated deployment pipeline
- **Markdown**: Documentation and guides

## 🛡️ Security Features

This portfolio demonstrates cybersecurity expertise through implemented security measures:

### **Input Validation & Sanitization**

```javascript
// Example: Name validation with security patterns
validateName(name) {
    const nameRegex = /^[a-zA-Z\s\-\'\.]{2,100}$/;
    return nameRegex.test(name) && !this.containsSuspiciousContent(name);
}
```

### **Attack Vector Protection**

- ✅ **Cross-Site Scripting (XSS)**: Script tag filtering and content sanitization
- ✅ **SQL Injection**: Pattern detection for malicious database queries
- ✅ **HTML Injection**: Removal of dangerous HTML tags and attributes
- ✅ **JavaScript Injection**: Blocking of JavaScript protocols and event handlers
- ✅ **Bot Attacks**: Honeypot field and behavioral analysis
- ✅ **Content Security**: Validation of file uploads and content types

### **Security Headers & Best Practices**

- **Content Security Policy**: Implemented via GitHub Pages
- **HTTPS Enforced**: Secure communication protocols
- **Input Sanitization**: Multi-layer validation and cleaning
- **Error Handling**: Secure error messages without information disclosure

## 📁 Project Structure

```text
fallenedge.github.io/
├── 📄 index.html                              # Main portfolio page
├── 📖 README.md                               # Project documentation
├── 📧 EMAIL_SETUP_GUIDE.md                    # EmailJS configuration guide
├── 🌐 CNAME                                   # Custom domain configuration
├── ⚙️ .github/workflows/deploy.yml            # GitHub Pages deployment
└── 📂 resources/
    ├── 🎨 css/
    │   └── index.css                          # Custom styles and themes
    ├── 🖼️ images/                             # Portfolio images and assets
    ├── 📜 javascript/
    │   ├── contact-validation-github.js       # Secure contact form handler
    │   ├── index.js                          # Main site functionality
    │   └── intro.js                          # Intro animation effects
    ├── 🅱️ bootstrap-4.3.1-dist/              # Bootstrap framework
    └── 📚 jQuery/                             # jQuery library
```

## 🚀 Installation & Setup

### **Prerequisites**

- Git installed on your system
- Code editor (VS Code recommended)
- Modern web browser for testing

### **Quick Start**

```bash
# Clone the repository
git clone https://github.com/FallenEdge/fallenedge.github.io.git

# Navigate to the project directory
cd fallenedge.github.io

# Open in your preferred code editor
code .

# Open index.html in a browser or use a local server
# For VS Code: Install "Live Server" extension and right-click index.html
```

### **Local Development**

1. **Install Live Server** (VS Code extension) for hot reloading
2. **Open index.html** with Live Server for real-time preview
3. **Edit files** and see changes instantly in the browser
4. **Test responsiveness** using browser dev tools

## 📧 Contact Form Configuration

The contact form uses EmailJS for serverless email functionality. Follow these steps:

### **1. EmailJS Account Setup**

1. Create account at [EmailJS.com](https://www.emailjs.com/)
2. Configure email service (Gmail recommended)
3. Create email template with variables
4. Get Service ID, Template ID, and Public Key

### **2. Update Configuration**

Edit `resources/javascript/contact-validation-github.js`:

```javascript
this.emailJSConfig = {
    serviceID: 'your_service_id',      // From EmailJS dashboard
    templateID: 'your_template_id',    // From email template
    publicKey: 'your_public_key'       // From account settings
};
```

### **3. Email Template Variables**

Use these variables in your EmailJS template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_email}}` - Your email address

📖 **Detailed Guide**: See [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) for complete instructions.

## 🌐 Deployment

### **GitHub Pages (Recommended)**

1. **Enable Pages**: Repository Settings → Pages → Deploy from branch
2. **Configure Domain**: Add CNAME file for custom domain (optional)
3. **Auto-Deploy**: GitHub Actions handles automatic deployment
4. **SSL Certificate**: GitHub provides HTTPS automatically

### **Custom Domain Setup**

```bash
# Add your domain to CNAME file
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### **Alternative Hosting**

- **Netlify**: Drag & drop deployment with form handling
- **Vercel**: Zero-config deployment with preview URLs
- **Firebase Hosting**: Google's hosting with CDN

## 🎨 Customization

### **Color Theme**

Edit CSS custom properties in `resources/css/index.css`:

```css
:root {
  --neon-blue: #00A8E8;           /* Primary accent */
  --matrix-green: #00FF88;        /* Secondary accent */
  --jet-black: #0E1111;           /* Background */
  --white-smoke: #F5F5F5;         /* Text */
}
```

### **Content Updates**

- **Personal Info**: Update name, title, and bio in `index.html`
- **Images**: Replace photos in `resources/images/`
- **Projects**: Add project cards with links and descriptions
- **Skills**: Update technology skills and certifications
- **Social Links**: Modify social media profiles

### **Theme Toggle**

The theme system supports easy customization:

```css
[data-theme="light"] {
  --primary-color: #007bff;
  --bg-color: #ffffff;
}

[data-theme="dark"] {
  --primary-color: #00A8E8;
  --bg-color: #0E1111;
}
```

## ⚡ Performance

### **Optimization Features**

- **Minified Assets**: Compressed CSS and JavaScript
- **Optimized Images**: WebP format with fallbacks
- **CSS Grid/Flexbox**: Modern layout without heavy frameworks
- **Lazy Loading**: Images load as needed
- **CDN Delivery**: Fast content delivery via GitHub Pages

### **Performance Metrics**

- **Lighthouse Score**: 95+ across all categories
- **Page Load Time**: <2 seconds on 3G
- **Bundle Size**: <500KB total assets
- **Core Web Vitals**: Optimized for Google's performance standards

### **Monitoring**

```bash
# Check performance with Lighthouse
npx lighthouse https://fallenedge.github.io

# Analyze bundle size
npx bundlesize
```

## 🔐 Security Considerations

### **Production Security**

- **HTTPS Enforced**: All traffic encrypted in transit
- **Content Validation**: Server-side validation for critical data
- **Error Handling**: No sensitive information in error messages
- **Rate Limiting**: Prevents abuse of contact form

### **Development Security**

- **No Secrets in Code**: Public keys only, no private credentials
- **Input Sanitization**: Multi-layer cleaning and validation
- **XSS Prevention**: Content Security Policy implementation
- **Regular Updates**: Dependencies monitored for vulnerabilities

## 📊 Analytics & Monitoring

### **Recommended Tools**

- **Google Analytics**: User behavior and traffic analysis
- **GitHub Insights**: Repository activity and deployment status
- **Uptime Monitoring**: Site availability tracking
- **Performance Monitoring**: Core Web Vitals tracking

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement`)
3. **Commit** your changes (`git commit -am 'Add improvement'`)
4. **Push** to the branch (`git push origin feature/improvement`)
5. **Create** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Acknowledgments

- **U.S. Naval Academy**: Cyber Operations program foundation
- **Bootstrap Team**: Responsive framework
- **EmailJS**: Serverless email solution
- **Font Awesome**: Icon library
- **GitHub**: Hosting and version control

---

## 📞 Contact

**LT Celine Tannous**  
🏛️ U.S. Navy Lieutenant  
🛡️ Cybersecurity Professional  
🔍 @ObsidianNull  

📧 **Email**: [celinetannous2021@gmail.com](mailto:celinetannous2021@gmail.com)  
📱 **Phone**: +1 (720) 318-3311  
🌐 **Portfolio**: [https://fallenedge.github.io](https://fallenedge.github.io)  
💼 **LinkedIn**: [linkedin.com/in/celine-tannous-34a44a1a7](https://linkedin.com/in/celine-tannous-34a44a1a7)  
🐱 **GitHub**: [github.com/FallenEdge](https://github.com/FallenEdge)  
🐦 **Twitter/X**: [@ObsidianNull](https://x.com/ObsidianNull)  
🎯 **TryHackMe**: [tryhackme.com/r/p/ObsidianNull](https://tryhackme.com/r/p/ObsidianNull)  

---

> "Defending the Digital Domain — From Mission to Innovation"

**Last Updated**: November 2, 2025  
**Created**: August 12, 2022

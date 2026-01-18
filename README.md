# 🛡️ ObsidianNull - Celine Tannous Cybersecurity Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-brightgreen)](https://obsidiannull.github.io)
[![Live Site](https://img.shields.io/badge/Website-celinetannous.com-blue)](https://celinetannous.com)

> **U.S. Navy Lieutenant | Nuclear Surface Warfare Officer | Cybersecurity Professional**  
> *Hard Systems. Harder Standards.*

A modern, responsive cybersecurity portfolio website featuring an interactive terminal interface, cyber-themed design, and secure contact form. Built with Bootstrap 4 and vanilla JavaScript, demonstrating security-first development practices.

## 🚀 Live Demo

**Primary:** [https://celinetannous.com](https://celinetannous.com)  
**GitHub Pages:** [https://obsidiannull.github.io](https://obsidiannull.github.io)

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Contact Form Configuration](#-contact-form-configuration)
- [Customization](#-customization)
- [Security Features](#️-security-features)
- [Adding Writeups](#-adding-writeups)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

## ✨ Features

### 🎨 **Design & User Experience**
- **Cyber Aesthetic**: Dark obsidian/neon-blue theme with custom CSS variables
- **Fully Responsive**: Bootstrap 4.3.1 grid system for mobile-first design
- **Fullscreen Intro Animation**: Session-gated splash screen with logo (skip with `?intro=1`)
- **Smooth Section Navigation**: Full-viewport sections with scroll-snap behavior
- **Typography**: Inter for UI elements, JetBrains Mono for terminal/code
- **Custom Icons**: Font Awesome 6.4.0 integration

### 🖥️ **Interactive Terminal**
- **Hero Terminal Window**: Desktop & mobile-responsive terminal interface
- **Document-Level Commands**: Type 'T' on desktop or tap on mobile to activate
- **Command System**: Built-in commands (help, about, skills, projects, contact, clear, matrix)
- **Matrix Rain Effect**: Optional easter egg animation in theme colors
- **Mobile Input Controls**: Touch-friendly command input with dedicated "Run" button

### 📧 **Secure Contact Form**
- **EmailJS Integration**: Serverless email delivery via [contact-validation-github.js](resources/javascript/contact-validation-github.js)
- **Real-Time Validation**: Client-side input validation with regex patterns
- **Security Features**:
  - XSS protection with HTML/script tag filtering
  - SQL injection pattern detection
  - Honeypot field for bot protection
  - Character limits and sanitization
- **UX Feedback**: Live character counter, loading states, success/error messages

## 🔧 Technology Stack

### **Frontend**
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties (CSS variables), flexbox, animations
- **JavaScript ES6+**: Vanilla JS with async/await, event handling
- **Bootstrap 4.3.1**: Responsive grid and components (local installation)
- **Font Awesome 6.4.0**: Icon library (CDN)
- **Google Fonts**: Inter (UI), JetBrains Mono (terminal)

### **Libraries & Services**
- **jQuery 3.6.3**: DOM manipulation (local)
- **EmailJS 3.x**: Client-side email service for contact form (CDN)
- **GitHub Pages**: Static site hosting with custom domain

### **Key Files**
- `index.html` - Main single-page application (647 lines)
- `resources/css/index.css` - Primary stylesheet
- `resources/javascript/index.js` - Core interactions and terminal
- `resources/javascript/intro.js` - Splash screen logic
- `resources/javascript/contact-validation-github.js` - Form validation & EmailJS
- `resources/javascript/writeups.js` - Dynamic writeup loading
- `resources/writeups/index.json` - Writeup metadata

## � Project Structure

```
obsidiannull.github.io/
├── index.html                          # Main application (647 lines)
├── index-backup.html                   # Backup version
├── README.md                           # Project documentation
├── CNAME                               # Custom domain: celinetannous.com
├── EMAIL_SETUP_GUIDE.md               # EmailJS configuration guide
└── resources/
    ├── bootstrap-4.3.1-dist/          # Bootstrap framework (local)
    │   ├── css/                        # Bootstrap CSS files
    │   └── js/                         # Bootstrap JS bundle
    ├── css/
    │   ├── index.css                   # Main stylesheet
    │   └── index-backup.css            # Backup stylesheet
    ├── images/
    │   ├── logojpg.jpg                 # Intro logo
    │   ├── logopng.png                 # Nav brand logo
    │   ├── uniformpic.jpeg             # Profile photo
    │   ├── comptia-security-plus.png   # Certification badge
    │   └── CompTIA Security+ ce certificate.pdf
    ├── javascript/
    │   ├── index.js                    # Core interactions & terminal
    │   ├── intro.js                    # Splash screen logic
    │   ├── contact-validation-github.js # Form validation & EmailJS
    │   ├── writeups.js                 # Dynamic writeup loader
    │   ├── index-backup.js             # Backup JS
    │   └── contact-validation-github.js # Form security
    ├── jQuery/
    │   └── jquery-3.6.3.min.js        # jQuery library (local)
    └── writeups/
        ├── index.json                  # Writeup metadata
        ├── apt29-ttp.md               # APT29 TTP analysis
        ├── apt29-ttp.html             # HTML version
        ├── view.html                   # Writeup viewer template
        └── info.txt                    # Notes
```
## 🚀 Quick Start

### **Prerequisites**
- Git
- Modern web browser
- Code editor (VS Code recommended)
- Optional: Live Server extension for local development

### **Local Setup**

```bash
# Clone the repository
git clone https://github.com/ObsidianNull/obsidiannull.github.io.git
cd obsidiannull.github.io

# Open in browser (or use Live Server in VS Code)
open index.html
```

The site will work immediately - all dependencies (Bootstrap, jQuery) are included locally.

## 📧 Contact Form Configuration

The contact form uses [EmailJS](https://www.emailjs.com/) for serverless email delivery. See [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) for detailed setup instructions.

**Quick Setup:**
1. Create an EmailJS account
2. Create an email template
3. Get your Service ID, Template ID, and Public Key
4. Update credentials in [contact-validation-github.js](resources/javascript/contact-validation-github.js)

## 🎨 Customization

### **Styling**
All visual customization is in [resources/css/index.css](resources/css/index.css):

```css
:root {
  --primary-blue: #00E5FF;      /* Neon cyan accent */
  --primary-green: #1FA2FF;     /* Electric blue */
  --primary-red: #FF4D4D;       /* Warnings */
  --bg-primary: #050B1A;        /* Obsidian navy background */
  --bg-secondary: #0B1E3A;      /* Midnight blue */
  --text-primary: #EAF6FF;      /* Ice white text */
}
```

### **Content Updates**
- **Personal Info**: Edit [index.html](index.html) sections (hero, about, contact)
- **Projects**: Update project cards in the "Cyber Arsenal" section
- **Certifications**: Modify credential cards with your certifications
- **Writeups**: Add writeups to [resources/writeups/index.json](resources/writeups/index.json)
- **Images**: Replace files in [resources/images/](resources/images/)

### **Terminal Commands**
Add custom terminal commands in [resources/javascript/index.js](resources/javascript/index.js) in the `processCommand()` function.

## 🛡️ Security Features

The contact form implements multiple security layers:

- ✅ **XSS Protection**: HTML/script tag filtering and sanitization
- ✅ **SQL Injection Prevention**: Pattern detection and blocking
- ✅ **Bot Protection**: Honeypot field (invisible to users)
- ✅ **Input Validation**: Regex patterns for name, email, subject, message
- ✅ **Character Limits**: Enforced on all fields
- ✅ **Rate Limiting**: EmailJS built-in protection (200 emails/month free tier)

All validation logic is in [contact-validation-github.js](resources/javascript/contact-validation-github.js).

## 📝 Adding Writeups

1. Create your writeup in Markdown format in [resources/writeups/](resources/writeups/)
2. Add metadata to [resources/writeups/index.json](resources/writeups/index.json):

```json
{
  "title": "Your Writeup Title",
  "date": "2026-01-18",
  "tags": ["red-team", "forensics"],
  "excerpt": "Brief description...",
  "url": "resources/writeups/your-writeup.md"
}
```

3. The writeup will automatically appear in the "Write-Ups" section

## 🚀 Deployment

The site is configured for GitHub Pages with a custom domain:

1. **GitHub Pages Settings**: Enable in repository settings
2. **Custom Domain**: CNAME file contains `celinetannous.com`
3. **SSL/TLS**: Automatic HTTPS via GitHub Pages
4. **Deployment**: Automatic on push to `main` branch

No build process required - it's a static site that deploys directly.

## 📧 Contact

- **Email**: obsidiannullsec@gmail.com
- **Phone**: +1 (720) 318-3311
- **LinkedIn**: [celine-tannous-34a44a1a7](https://linkedin.com/in/celine-tannous-34a44a1a7)
- **GitHub**: [@ObsidianNull](https://github.com/ObsidianNull)
- **X**: [@ObsidianNull](https://x.com/ObsidianNull)

## 📄 License

This project is personal portfolio of Celine Tannous. All rights reserved.

---

*Hard Systems. Harder Standards.* 🛡️

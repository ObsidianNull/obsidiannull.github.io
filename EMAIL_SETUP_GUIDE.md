# GitHub Pages Email Setup Guide

## Overview

Since GitHub Pages only supports static sites, we need to use a third-party service for email functionality. This guide covers setting up EmailJS for secure contact form submissions.

## Option 1: EmailJS (Recommended for GitHub Pages)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (supports 200 emails/month)
3. Verify your email address

### Step 2: Configure Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Use your Gmail account
   - **Outlook**: Use your Microsoft account
   - **Yahoo**: Use your Yahoo account
4. Follow the authentication process
5. Copy the **Service ID** (e.g., "service_xyz123")

### Step 3: Create Email Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```text
Subject: New Contact Form Submission from {{from_name}}

Hello Celine,

You have received a new message through your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Contact Form
```

1. Save the template and copy the **Template ID** (e.g., "template_abc456")

### Step 4: Get Public Key

1. Go to "Account" in EmailJS dashboard (or check the "Integration" tab)
2. Copy your **Public Key** (this was formerly called "User ID")
3. The Public Key looks like: "user_abc123def456"

### Step 5: Update Configuration

1. Open `resources/javascript/contact-validation-github.js`
2. Replace these values in the `emailJSConfig` object:

```javascript
this.emailJSConfig = {
    serviceID: 'service_xyz123',     // Your Service ID
    templateID: 'template_abc456',   // Your Template ID
    publicKey: 'user_def789'        // Your Public Key (from Account settings)
};
```

### Step 6: Deploy to GitHub Pages

1. Commit and push your changes to GitHub
2. Enable GitHub Pages in your repository settings
3. Your contact form will now work on the live site!

## Option 2: Alternative Services

### Netlify Forms (if using Netlify)

- Add `netlify` attribute to form
- Works only on Netlify hosting
- 100 submissions/month on free plan

### Formspree.io

- Simple form backend service
- 50 submissions/month on free plan
- Good EmailJS alternative

### Web3Forms

- Free form backend service
- No monthly limits
- Good for high-volume sites

## Security Features Included

✅ **Input Validation**: Client-side validation with regex patterns
✅ **XSS Protection**: HTML/script tag filtering
✅ **Honeypot**: Bot detection field
✅ **Rate Limiting**: Built into EmailJS service
✅ **Sanitization**: Input cleaning before sending
✅ **Error Handling**: Graceful fallback messages

## Testing Your Setup

1. Deploy to GitHub Pages
2. Fill out the contact form
3. Check your email for the message
4. Verify the sender information is correct

## Troubleshooting

### Common Issues

- **"EmailJS service not available"**: Check internet connection and EmailJS CDN
- **"Email service error"**: Verify Service ID, Template ID, and User ID
- **No email received**: Check spam folder, verify email service setup
- **Form validation errors**: Check input patterns and field requirements

### Debug Steps

1. Open browser Developer Tools (F12)
2. Check Console for error messages
3. Verify EmailJS configuration values
4. Test with simple inputs first

## Production Considerations

- **Email Limits**: EmailJS free plan allows 200 emails/month
- **Upgrade Options**: Paid plans available for higher volume
- **Backup Plan**: Always include direct email link as fallback
- **Monitoring**: Set up email notifications for form submissions

This setup provides enterprise-level security while being compatible with GitHub Pages static hosting.

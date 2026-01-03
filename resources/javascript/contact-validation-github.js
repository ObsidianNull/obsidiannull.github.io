// GitHub Pages Compatible Contact Form with EmailJS
class GitHubPagesContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.fields = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            message: document.getElementById('message'),
            honeypot: document.querySelector('input[name="website"]')
        };
        this.submitBtn = document.getElementById('submitBtn');
        this.btnText = this.submitBtn.querySelector('.btn-text');
        this.btnSpinner = this.submitBtn.querySelector('.btn-spinner');
        this.charCount = document.getElementById('charCount');
        
        // EmailJS configuration
        this.emailJSConfig = {
            serviceID: 'service_48tmrhf', // Your EmailJS service ID
            templateID: 'template_eeb28jq', // Your EmailJS template ID
            publicKey: 'NfwjUftNCmvbC-YWN' // Replace with your EmailJS Public Key (found in Account settings)
        };
        
        this.initializeValidation();
        this.initializeEmailJS();
    }

    initializeEmailJS() {
        // Initialize EmailJS with Public Key
        if (typeof emailjs !== 'undefined') {
            emailjs.init(this.emailJSConfig.publicKey);
        } else {
            console.error('EmailJS library not loaded');
        }
    }

    initializeValidation() {
        if (!this.form) return;

        // Real-time character count for message
        this.fields.message.addEventListener('input', () => {
            const count = this.fields.message.value.length;
            this.charCount.textContent = count;
            
            if (count > 2000) {
                this.charCount.style.color = '#dc3545';
            } else if (count > 1800) {
                this.charCount.style.color = '#ffc107';
            } else {
                this.charCount.style.color = '#6c757d';
            }
        });

        // Real-time validation for all fields
        Object.values(this.fields).forEach(field => {
            if (field && field !== this.fields.honeypot) {
                field.addEventListener('blur', () => this.validateField(field));
                field.addEventListener('input', () => this.clearFieldError(field));
            }
        });

        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch (field.id) {
            case 'name':
                isValid = this.validateName(value);
                errorMessage = isValid ? '' : 'Name should only contain letters, spaces, hyphens, apostrophes, and periods (2-100 characters)';
                break;
            case 'email':
                isValid = this.validateEmail(value);
                errorMessage = isValid ? '' : 'Please enter a valid email address';
                break;
            case 'message':
                isValid = this.validateMessage(value);
                errorMessage = isValid ? '' : 'Message should be between 10 and 2000 characters';
                break;
        }

        this.setFieldValidation(field, isValid, errorMessage);
        return isValid;
    }

    validateName(name) {
        const nameRegex = /^[a-zA-Z\s\-\'\.]{2,100}$/;
        return nameRegex.test(name) && !this.containsSuspiciousContent(name);
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email) && 
               email.length <= 255 && 
               !this.containsSuspiciousContent(email);
    }

    validateMessage(message) {
        return message.length >= 10 && 
               message.length <= 2000 && 
               !this.containsSuspiciousContent(message) &&
               !this.containsExcessiveHTML(message);
    }

    containsSuspiciousContent(input) {
        const suspiciousPatterns = [
            /<script[^>]*>.*?<\/script>/gi,
            /javascript:/gi,
            /on\w+\s*=/gi,
            /<iframe[^>]*>.*?<\/iframe>/gi,
            /data:text\/html/gi,
            /vbscript:/gi,
            /expression\s*\(/gi,
            /(@import|url\s*\()/gi,
            /(union\s+select|drop\s+table|insert\s+into|delete\s+from)/gi,
            /'(\s*or\s+|\s*and\s+).*=/gi,
            /\b(exec|execute|sp_)\b/gi
        ];

        return suspiciousPatterns.some(pattern => pattern.test(input));
    }

    containsExcessiveHTML(input) {
        const htmlTags = input.match(/<[^>]+>/g);
        return htmlTags && htmlTags.length > 3;
    }

    setFieldValidation(field, isValid, errorMessage) {
        const feedback = field.parentNode.querySelector('.invalid-feedback');
        
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
            if (feedback) feedback.textContent = '';
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            if (feedback) feedback.textContent = errorMessage;
        }
    }

    clearFieldError(field) {
        field.classList.remove('is-invalid');
        const feedback = field.parentNode.querySelector('.invalid-feedback');
        if (feedback) feedback.textContent = '';
    }

    validateForm() {
        let isValid = true;

        // Check honeypot
        if (this.fields.honeypot && this.fields.honeypot.value) {
            console.warn('Bot detected via honeypot');
            return false;
        }

        // Validate all fields
        Object.entries(this.fields).forEach(([key, field]) => {
            if (field && key !== 'honeypot') {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            }
        });

        return isValid;
    }

    sanitizeInput(input) {
        return input
            .replace(/<script[^>]*>.*?<\/script>/gi, '')
            .replace(/<[^>]+>/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '')
            .trim();
    }

    setLoadingState(loading) {
        if (loading) {
            this.submitBtn.disabled = true;
            this.btnText.style.display = 'none';
            this.btnSpinner.style.display = 'inline';
        } else {
            this.submitBtn.disabled = false;
            this.btnText.style.display = 'inline';
            this.btnSpinner.style.display = 'none';
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            this.showAlert('Please correct the errors in the form.', 'error');
            return;
        }

        this.setLoadingState(true);

        try {
            // Prepare EmailJS parameters
            const templateParams = {
                from_name: this.sanitizeInput(this.fields.name.value),
                from_email: this.sanitizeInput(this.fields.email.value),
                message: this.sanitizeInput(this.fields.message.value),
                to_email: 'celinetannous2021@gmail.com',
                reply_to: this.sanitizeInput(this.fields.email.value)
            };

            // Check if EmailJS is loaded
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS service not available');
            }

            // Send email using EmailJS
            const response = await emailjs.send(
                this.emailJSConfig.serviceID,
                this.emailJSConfig.templateID,
                templateParams
            );

            if (response.status === 200) {
                this.showAlert('Your message has been sent successfully!', 'success');
                this.form.reset();
                this.charCount.textContent = '0';
                Object.values(this.fields).forEach(field => {
                    if (field && field !== this.fields.honeypot) {
                        field.classList.remove('is-valid', 'is-invalid');
                    }
                });
            } else {
                throw new Error('Email service error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            this.showAlert('There was an error sending your message. Please try again later or email me directly.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    showAlert(message, type) {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show mt-3`;
        alert.innerHTML = `
            ${message}
            <button type="button" class="close" data-dismiss="alert">
                <span aria-hidden="true">&times;</span>
            </button>
        `;

        // Insert alert after form
        this.form.parentNode.insertBefore(alert, this.form.nextSibling);

        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 8000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new GitHubPagesContactForm();
});
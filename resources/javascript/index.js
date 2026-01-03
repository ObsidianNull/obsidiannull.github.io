// ObsidianNull Portfolio - Enhanced Interactive JavaScript
// Creative cybersecurity-themed interactions and animations

(function() {
    'use strict';

    // DOM Elements
    const nav = document.getElementById('mainNav');
    const terminalInput = document.getElementById('terminalInput');
    const terminalOutput = document.getElementById('terminalOutput');
    const terminalContent = document.getElementById('terminalContent');
    const contactForm = document.getElementById('contactForm');
    const charCounter = document.getElementById('charCount');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const arsenalItems = document.querySelectorAll('.arsenal-item');

    // Command history
    let commandHistory = [];
    let historyIndex = -1;

    // Initialize all functionality
    function init() {
        setupNavigation();
        setupInteractiveTerminal();
        setupProjectFilters();
        setupContactForm();
        setupScrollAnimations();
        setupCertificateInteractions();
    }

    // Navigation Scroll Effects
    function setupNavigation() {
        if (!nav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(nl => nl.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    // Interactive Terminal System
    function setupInteractiveTerminal() {
        if (!terminalOutput) return;

        // Display welcome message
        const welcomeMsg = [
            '<span style="color: var(--primary-blue);">╔═══════════════════════════════════════════════════╗</span>',
            '<span style="color: var(--primary-blue);">║</span>  <span style="color: var(--primary-green);">Terminal v2.0</span>           <span style="color: var(--primary-blue);">║</span>',
            '<span style="color: var(--primary-blue);">║</span>  Press <span style="color: var(--accent-orange);">T</span> to type commands                     <span style="color: var(--primary-blue);">║</span>',
            '<span style="color: var(--primary-blue);">╚═══════════════════════════════════════════════════╝</span>',
            ''
        ];
        
        welcomeMsg.forEach(msg => {
            addOutput(msg);
        });

        let currentInput = '';
        let isTypingMode = false;

        // Handle command input from document
        document.addEventListener('keydown', (e) => {
            // Toggle typing mode with 'T' key
            if (e.key.toLowerCase() === 't' && !isTypingMode && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                isTypingMode = true;
                updatePromptDisplay();
                return;
            }

            // Only process commands in typing mode
            if (!isTypingMode) return;

            if (e.key === 'Enter') {
                e.preventDefault();
                const command = currentInput.trim();
                
                if (command) {
                    // Add command to history
                    commandHistory.unshift(command);
                    historyIndex = -1;
                    
                    // Display command
                    addOutput(`<span style="color: var(--primary-green);">root@obsidiannull:~$</span> ${escapeHtml(command)}`);
                    
                    // Execute command
                    executeCommand(command);
                }
                
                // Clear input and exit typing mode
                currentInput = '';
                isTypingMode = false;
                updatePromptDisplay();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                currentInput = '';
                isTypingMode = false;
                updatePromptDisplay();
            } else if (e.key === 'Backspace') {
                e.preventDefault();
                currentInput = currentInput.slice(0, -1);
                updatePromptDisplay();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    currentInput = commandHistory[historyIndex];
                    updatePromptDisplay();
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    currentInput = commandHistory[historyIndex];
                } else if (historyIndex === 0) {
                    historyIndex = -1;
                    currentInput = '';
                }
                updatePromptDisplay();
            } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                e.preventDefault();
                currentInput += e.key;
                updatePromptDisplay();
            }
        });

        function updatePromptDisplay() {
            const promptLine = document.querySelector('.terminal-input-line');
            if (promptLine) {
                const cursorChar = isTypingMode ? '█' : '_';
                promptLine.innerHTML = `<span class="prompt">root@obsidiannull:~$</span> <span style="color: var(--text-primary);">${escapeHtml(currentInput)}</span><span class="terminal-cursor" style="color: ${isTypingMode ? 'var(--primary-green)' : 'var(--primary-blue)'};">${cursorChar}</span>`;
            }
        }
    }

    // Execute terminal commands
    function executeCommand(cmd) {
        const args = cmd.toLowerCase().split(' ');
        const command = args[0];

        const commands = {
            help: () => {
                addOutput('<span style="color: var(--primary-blue);">Available Commands:</span>');
                addOutput('  <span style="color: var(--primary-green);">help</span>        - Show this help message');
                addOutput('  <span style="color: var(--primary-green);">about</span>       - Learn about ObsidianNull');
                addOutput('  <span style="color: var(--primary-green);">skills</span>      - Display technical skills');
                addOutput('  <span style="color: var(--primary-green);">projects</span>    - List available projects');
                addOutput('  <span style="color: var(--primary-green);">contact</span>     - Show contact information');
                addOutput('  <span style="color: var(--primary-green);">whoami</span>      - Display user information');
                addOutput('  <span style="color: var(--primary-green);">clear</span>       - Clear terminal screen');
                addOutput('  <span style="color: var(--primary-green);">nmap</span>        - Run network scan simulation');
                addOutput('  <span style="color: var(--primary-green);">metasploit</span>  - Launch exploit framework');
                addOutput('  <span style="color: var(--primary-green);">wireshark</span>   - Start packet capture');
                addOutput('');
            },
            about: () => {
                addOutput('<span style="color: var(--primary-blue);">About ObsidianNull:</span>');
                addOutput('Lieutenant Celine Tannous - U.S. Navy');
                addOutput('Elite cybersecurity professional specializing in:');
                addOutput('  • Red Team Operations');
                addOutput('  • Penetration Testing');
                addOutput('  • Threat Analysis & Intelligence');
                addOutput('  • Military Leadership');
                addOutput('');
            },
            skills: () => {
                addOutput('<span style="color: var(--primary-blue);">Technical Skills:</span>');
                addOutput('  <span style="color: var(--accent-orange);">Penetration Testing:</span> Metasploit, Burp Suite, Nmap');
                addOutput('  <span style="color: var(--accent-orange);">Programming:</span> Python, PowerShell, Bash');
                addOutput('  <span style="color: var(--accent-orange);">Forensics:</span> Volatility, Wireshark, Autopsy');
                addOutput('  <span style="color: var(--accent-orange);">Security:</span> SIEM, IDS/IPS, Firewall Config');
                addOutput('');
            },
            projects: () => {
                addOutput('<span style="color: var(--primary-blue);">Featured Projects:</span>');
                addOutput('  1. Network Security Scanner');
                addOutput('  2. Threat Intelligence Platform');
                addOutput('  3. Automated Vulnerability Assessment');
                addOutput('  4. Incident Response Toolkit');
                addOutput('Scroll down to Arsenal section for details.');
                addOutput('');
            },
            contact: () => {
                addOutput('<span style="color: var(--primary-blue);">Contact Information:</span>');
                addOutput('  <span style="color: var(--primary-green);">Email:</span> contact@obsidiannull.com');
                addOutput('  <span style="color: var(--primary-green);">GitHub:</span> github.com/obsidiannull');
                addOutput('  <span style="color: var(--primary-green);">LinkedIn:</span> linkedin.com/in/celinetannous');
                addOutput('');
            },
            whoami: () => {
                addOutput('root');
                addOutput('');
            },
            clear: () => {
                terminalOutput.innerHTML = '';
            },
            nmap: () => {
                addOutput('<span style="color: var(--accent-orange);">[*]</span> Starting Nmap 7.94 scan...');
                setTimeout(() => addOutput('Scanning 192.168.1.0/24...'), 500);
                setTimeout(() => addOutput('Host 192.168.1.1 - UP (0.002s latency)'), 1000);
                setTimeout(() => addOutput('Host 192.168.1.105 - UP (0.003s latency)'), 1500);
                setTimeout(() => addOutput('Host 192.168.1.208 - UP (0.001s latency)'), 2000);
                setTimeout(() => {
                    addOutput('<span style="color: var(--primary-green);">[+]</span> Scan complete. 3 hosts detected.');
                    addOutput('');
                }, 2500);
            },
            metasploit: () => {
                addOutput('<span style="color: #ff3333;">=[ metasploit v6.3.0                  ]=</span>');
                addOutput('+ -- --=[ 2378 exploits - 1232 auxiliary - 413 post       ]');
                addOutput('+ -- --=[ 1385 payloads - 46 encoders - 11 nops          ]');
                addOutput('');
                setTimeout(() => {
                    addOutput('<span style="color: var(--primary-green);">msf6 ></span> Exploit framework ready.');
                    addOutput('');
                }, 1000);
            },
            wireshark: () => {
                addOutput('<span style="color: var(--primary-blue);">[*]</span> Starting Wireshark packet capture...');
                setTimeout(() => addOutput('Interface: eth0'), 500);
                setTimeout(() => addOutput('Capturing on TCP port 443...'), 1000);
                setTimeout(() => addOutput('Packets captured: 127'), 1500);
                setTimeout(() => {
                    addOutput('<span style="color: var(--primary-green);">[+]</span> SSL/TLS traffic analysis in progress.');
                    addOutput('');
                }, 2000);
            },
            ls: () => {
                addOutput('projects/  credentials/  arsenal/  intel/');
                addOutput('');
            },
            pwd: () => {
                addOutput('/home/obsidiannull');
                addOutput('');
            },
            date: () => {
                addOutput(new Date().toString());
                addOutput('');
            },
            echo: () => {
                const text = cmd.substring(5);
                addOutput(text || '');
                addOutput('');
            }
        };

        if (commands[command]) {
            commands[command]();
        } else {
            addOutput(`<span style="color: #ff3333;">Command not found:</span> ${escapeHtml(command)}`);
            addOutput('Type <span style="color: var(--primary-green);">help</span> for available commands.');
            addOutput('');
        }

        // Auto-scroll to bottom
        if (terminalContent) {
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }
    }

    // Add output to terminal
    function addOutput(text) {
        const line = document.createElement('div');
        line.innerHTML = text;
        line.style.marginBottom = '0.25rem';
        terminalOutput.appendChild(line);
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Project Filtering System
    function setupProjectFilters() {
        if (!filterBtns.length || !arsenalItems.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects with animation
                arsenalItems.forEach((item, index) => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        setTimeout(() => {
                            item.style.display = 'block';
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            
                            setTimeout(() => {
                                item.style.transition = 'all 0.5s ease';
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 50);
                        }, index * 100);
                    } else {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(-20px)';
                        
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Enhanced Contact Form
    function setupContactForm() {
        if (!contactForm) return;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitBtn = document.getElementById('submitBtn');

        // Character counter
        if (messageInput && charCounter) {
            messageInput.addEventListener('input', () => {
                const count = messageInput.value.length;
                charCounter.textContent = count;
                
                // Change color based on length
                if (count > 1800) {
                    charCounter.style.color = '#ff3333';
                } else if (count > 1500) {
                    charCounter.style.color = 'var(--accent-orange)';
                } else {
                    charCounter.style.color = 'var(--primary-green)';
                }
            });
        }

        // Terminal-style input effects
        [nameInput, emailInput, messageInput].forEach(input => {
            if (!input) return;

            input.addEventListener('focus', () => {
                input.style.borderColor = 'var(--primary-green)';
                input.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.3)';
            });

            input.addEventListener('blur', () => {
                input.style.borderColor = 'var(--primary-blue)';
                input.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
            });

            // Typing effect for placeholders
            input.addEventListener('input', () => {
                if (input.value.length > 0) {
                    input.style.color = 'var(--text-primary)';
                } else {
                    input.style.color = '#b0b0b0';
                }
            });
        });

        // Form submission with animation
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!submitBtn) return;
            
            const btnText = submitBtn.querySelector('.btn-text');
            const btnSpinner = submitBtn.querySelector('.btn-spinner');
            
            // Show loading state
            btnText.style.display = 'none';
            btnSpinner.style.display = 'flex';
            submitBtn.disabled = true;
            
            // Simulate form processing
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                if (charCounter) charCounter.textContent = '0';
                
                // Show success state
                btnSpinner.style.display = 'none';
                btnText.innerHTML = '<i class="fas fa-check"></i> Message Transmitted';
                btnText.style.display = 'flex';
                submitBtn.style.background = 'linear-gradient(45deg, var(--primary-green), var(--primary-blue))';
                
                // Reset after delay
                setTimeout(() => {
                    btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Transmit Message';
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
                
            }, 2000);
        });
    }

    // Scroll Animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Animate elements on scroll
        const animatedElements = document.querySelectorAll(
            '.arsenal-item, .credential-card, .capability, .contact-item'
        );
        
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });

        // Animate section headers
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            header.classList.add('fade-in');
            observer.observe(header);
        });
    }

    // Certificate Interaction Effects
    function setupCertificateInteractions() {
        const certCards = document.querySelectorAll('.credential-card.certification');
        
        certCards.forEach(card => {
            const verificationBtn = card.querySelector('.verification-btn');
            
            if (verificationBtn) {
                verificationBtn.addEventListener('click', (e) => {
                    const target = e.currentTarget;
                    const isAnchorWithHref = target && target.tagName === 'A' && target.getAttribute('href');

                    // If this is a real link, allow default navigation (e.g., open PDF)
                    if (isAnchorWithHref) {
                        return;
                    }

                    e.preventDefault();

                    // Create verification popup effect
                    const popup = document.createElement('div');
                    popup.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #1a1a1a;
                        color: var(--text-primary);
                        padding: 2rem;
                        border: 2px solid var(--primary-blue);
                        border-radius: 10px;
                        box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
                        z-index: 10000;
                        text-align: center;
                        max-width: 400px;
                        animation: fadeIn 0.3s ease;
                    `;
                    
                    popup.innerHTML = `
                        <h4 style="color: var(--primary-blue); margin-bottom: 1rem;">Certificate Verification</h4>
                        <p style="margin-bottom: 1.5rem;">This certificate is verified and issued by an authorized certification body.</p>
                        <button onclick="this.parentElement.remove()" 
                                style="background: var(--primary-blue); color: var(--bg-primary); border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">
                            Close
                        </button>
                    `;
                    
                    document.body.appendChild(popup);
                    
                    // Auto-remove after 5 seconds
                    setTimeout(() => {
                        if (popup.parentElement) {
                            popup.remove();
                        }
                    }, 5000);
                });
            }
        });
    }

    // Utility Functions
    function addGlowEffect(element, color = 'var(--primary-blue)') {
        element.style.transition = 'all 0.3s ease';
        element.style.boxShadow = `0 0 20px ${color}`;
        element.style.borderColor = color;
    }

    function removeGlowEffect(element) {
        element.style.boxShadow = '';
        element.style.borderColor = '';
    }

    // Matrix Rain Effect (Optional Easter Egg)
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.1;
        `;
        
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        function draw() {
            ctx.fillStyle = 'rgba(5, 11, 26, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            const primaryBlue = getComputedStyle(document.documentElement).getPropertyValue('--primary-blue').trim();
            ctx.fillStyle = primaryBlue || '#00E5FF';
            ctx.font = `${fontSize}px 'JetBrains Mono'`;
            
            drops.forEach((y, index) => {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                const x = index * fontSize;
                
                ctx.fillText(text, x, y * fontSize);
                
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[index] = 0;
                }
                drops[index]++;
            });
        }
        
        setInterval(draw, 33);
    }

    // Konami Code Easter Egg
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode = konamiCode.slice(-konamiSequence.length);
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            createMatrixRain();
            
            // Show easter egg message
            const message = document.createElement('div');
            message.textContent = 'MATRIX MODE ACTIVATED - ObsidianNull';
            message.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-blue);
                color: var(--bg-primary);
                padding: 1rem;
                border-radius: 5px;
                font-weight: 600;
                z-index: 10000;
                animation: fadeIn 0.5s ease;
            `;
            
            document.body.appendChild(message);
            
            setTimeout(() => message.remove(), 3000);
            konamiCode = [];
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        // Recalculate any size-dependent elements
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

    // Expose some functions globally for debugging
    window.ObsidianNull = {
        addGlow: addGlowEffect,
        removeGlow: removeGlowEffect,
        matrixMode: createMatrixRain
    };

})();
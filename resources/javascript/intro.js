//Intro Animation Javascript File - Enhanced Cybersecurity Theme

let intro = document.querySelector(".intro");
let logoSpans = document.querySelectorAll(".logo");
let subtitleText = document.querySelector(".subtitle-text");
let loadingLine = document.querySelector(".loading-line");
let cyberGrid = document.querySelector(".cyber-grid");

// Create cyber grid background
function createCyberGrid() {
    if (!cyberGrid) return;
    
    for (let i = 0; i < 20; i++) {
        const gridLine = document.createElement('div');
        gridLine.className = 'grid-line';
        gridLine.style.animationDelay = `${Math.random() * 2}s`;
        cyberGrid.appendChild(gridLine);
    }
}

// Typewriter effect for subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Main animation sequence
window.addEventListener("DOMContentLoaded", () => {
    // If intro already seen, hide immediately and bail
    const skipIntro = document.documentElement.classList.contains('skip-intro');
    if (skipIntro) {
        if (intro) intro.style.display = 'none';
        document.body.classList.remove('no-scroll');
        return;
    }
    // If using splash logo, run a short, simple timeline
    const splashLogo = document.querySelector('.intro-logo');
    if (splashLogo) {
        setTimeout(() => {
            intro?.classList.add('exit');
        }, 1200);
        setTimeout(() => {
            try { sessionStorage.setItem('introSeen', '1'); } catch(e) {}
            if (intro) intro.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 1800);
        return;
    }

    // Create cyber grid background
    createCyberGrid();
    
    setTimeout(() => {
        // Animate each letter of ObsidianNull
        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
                
                // Add cyber glitch effect on certain letters
                if (idx === 0 || idx === 8 || idx === 11) {
                    setTimeout(() => {
                        span.classList.add('cyber-glitch');
                    }, 200);
                }
            }, (idx + 1) * 150); // Faster sequence
        });
        
        // Start loading line animation
        setTimeout(() => {
            if (loadingLine) {
                loadingLine.classList.add('animate');
            }
        }, 1000);
        
        // Start subtitle typewriter effect
        setTimeout(() => {
            if (subtitleText) {
                typeWriter(subtitleText, "Initializing Cyber Defense Systems...", 80);
            }
        }, 1500);
        
        // System ready message
        setTimeout(() => {
            if (subtitleText) {
                subtitleText.textContent = "System Ready. Access Granted.";
                subtitleText.classList.add('ready');
            }
        }, 4000);
        
        // Begin fade out sequence
        setTimeout(() => {
            logoSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 4800);
        
        // Final exit animation
        setTimeout(() => {
            intro.classList.add('exit');
        }, 5400);
        
        // Remove intro completely and enable body scroll
        setTimeout(() => {
            try { sessionStorage.setItem('introSeen', '1'); } catch(e) {}
            intro.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 6000);
        
    }, 300); // Small delay for page load
});

// Prevent scrolling during intro
if (!document.documentElement.classList.contains('skip-intro')) {
    document.body.classList.add('no-scroll');
}

// Optional: Skip intro on click/tap
intro?.addEventListener('click', () => {
    intro.classList.add('skip');
    setTimeout(() => {
        try { sessionStorage.setItem('introSeen', '1'); } catch(e) {}
        intro.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }, 500);
});
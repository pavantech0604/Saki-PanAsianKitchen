document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const header = document.getElementById('mainHeader');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 3. Hero Animation
    const heroTl = gsap.timeline();
    
    if (document.querySelector('.gsap-hero-text')) {
        heroTl.fromTo('.gsap-hero-text', 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.2 }
        );
    }
    
    // Check if hero image exists before animating
    const heroImg = document.getElementById('heroImage');
    if (heroImg) {
        heroTl.fromTo(heroImg,
            { scale: 1.1 },
            { scale: 1, duration: 2, ease: 'power2.out' },
            '-=1.5'
        );
        
        gsap.to(heroImg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // 5. Scroll Reveal for Sections
    const revealElements = document.querySelectorAll('.gsap-reveal');
    revealElements.forEach((el) => {
        gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // 6. Mobile Nav Interaction (Bottom Bar)
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mobileLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Add a subtle click animation
            gsap.fromTo(link, 
                { scale: 0.9 }, 
                { scale: 1, duration: 0.2, ease: 'back.out(1.7)' }
            );
        });
    });
});

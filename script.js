// script.js - Versi Terlengkap (Particles.js, Smooth Scroll, WhatsApp)

document.addEventListener('DOMContentLoaded', () => {
    
    // Nomor WhatsApp tujuan
    const whatsappNumber = '62895701060973';

    // =========================================
    // 1. Inisialisasi Particles.js
    // =========================================
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, 
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" 
            },
            "shape": {
                "type": "circle", 
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                }
            },
            "size": {
                "value": 3, 
                "random": true,
                "anim": {
                    "enable": false,
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150, 
                "color": "#ffffff", 
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6, 
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" 
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" 
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                },
            }
        },
        "retina_detect": true
    });


    // =========================================
    // 2. Smooth Scrolling & Active Nav Link
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // =========================================
    // 3. Fungsi Kirim Formulir ke WhatsApp
    // =========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const waMessage = 
                `Halo WebForge! Saya tertarik dengan layanan pembuatan website Anda.\n` +
                `*Detail Proyek:*\n` +
                `Nama: ${name}\n` +
                `Email: ${email}\n` +
                `Telepon: ${phone}\n\n` +
                `Pesan:\n${message}`;

            const encodedMessage = encodeURIComponent(waMessage);
            const waURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(waURL, '_blank');
            
            const formMessage = document.getElementById('formMessage');
            formMessage.innerHTML = `<div class="alert alert-info" role="alert">
                <i class="fab fa-whatsapp"></i> Mengalihkan ke WhatsApp... Mohon Tunggu.
            </div>`;
            
            setTimeout(() => {
                contactForm.reset();
                formMessage.innerHTML = '';
            }, 3000);
        });
    }

    // =========================================
    // 4. Animasi On Scroll
    // =========================================
    const serviceCards = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 1s ease-out, transform 0.8s ease-out';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    serviceCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

});
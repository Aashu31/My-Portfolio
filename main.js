document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Certification modal functionality
    const modal = document.querySelector('.certification-modal');
    const modalImg = document.getElementById('certification-image');
    const closeModal = document.querySelector('.close-modal');
    
    // Sample certifications data - replace with your actual certifications
    const certifications = [
        { name: 'AWS Certified Cloud Practitioner', image: 'images/certs/aws-cert.jpg' },
        { name: 'Microsoft Azure Fundamentals', image: 'images/certs/azure-cert.jpg' },
        { name: 'Google Cloud Fundamentals', image: 'images/certs/gcp-cert.jpg' },
        { name: 'Full Stack Web Development', image: 'images/certs/fullstack-cert.jpg' }
    ];
    
    // Populate certifications grid
    const certsGrid = document.querySelector('.certifications-grid');
    
    certifications.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'certification-item';
        certItem.innerHTML = `
            <img src="${cert.image}" alt="${cert.name}">
            <div class="cert-info">${cert.name}</div>
        `;
        
        certItem.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('img').src;
        });
        
        certsGrid.appendChild(certItem);
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    
    // Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.section-title, .about-content, .timeline-item, .skills-category, .project-card, .certification-item, .social-work-item, .contact-info, .contact-form', {
        interval: 200
    });
});
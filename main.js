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
    
    
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop default form submission

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the form.');
            });
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

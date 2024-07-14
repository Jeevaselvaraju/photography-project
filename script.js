// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector('#contactForm input[name="name"]').value;
    const email = document.querySelector('#contactForm input[name="email"]').value;
    const message = document.querySelector('#contactForm textarea[name="message"]').value;

    // Here you can implement your form submission logic, such as sending data to a backend server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Optionally, you can show a confirmation message to the user
    alert('Your message has been sent!');
    // Clear form fields after submission
    document.querySelector('#contactForm input[name="name"]').value = '';
    document.querySelector('#contactForm input[name="email"]').value = '';
    document.querySelector('#contactForm textarea[name="message"]').value = '';
});

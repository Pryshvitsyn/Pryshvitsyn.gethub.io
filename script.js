document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && phone && message) {
        // Here you would typically send the data to a server
        console.log('Form Submitted', { name, email, phone, message });

        // Show feedback to the user
        const feedbackElement = document.getElementById('formFeedback');
        feedbackElement.textContent = 'Thank you! We will get back to you shortly.';
        feedbackElement.classList.remove('hidden');

        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

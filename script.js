// Simple form submission behavior
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show alert for now (you can connect this to an actual backend later)
    alert(`Message sent by: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Reset the form after submission
    document.getElementById('contactForm').reset();
});

// This function will scroll the page to the contact section when the button is clicked.
function goToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Form submitted!'); // Show a message when the form is "submitted"
});

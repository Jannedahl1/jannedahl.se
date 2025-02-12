document.addEventListener("DOMContentLoaded", function() {
    // Image Slider Code
    let currentIndex = 0;
    const images = document.querySelectorAll(".slider-image");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
    }

    setInterval(showNextImage, 3000);  // Change image every 3 seconds
    images[currentIndex].classList.add("active");  // Show the first image initially

    // Button to Scroll to Contact Form
    const contactButton = document.getElementById("contact-button");
    contactButton.addEventListener("click", function() {
        const contactFormSection = document.getElementById("contact-form");
        contactFormSection.scrollIntoView({ behavior: "smooth" });
    });
});

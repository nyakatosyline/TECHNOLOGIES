// EmailJS Configuration
const SERVICE_ID = "contact_service";
const TEMPLATE_ID = "contact_form";
const PUBLIC_KEY = "8obZeApfuSTvttj7u";

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(2, 6, 23, 0.95)';
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(2, 6, 23, 0.7)';
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'none';
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    console.log(`Attempting to send with Service: ${SERVICE_ID}, Template: ${TEMPLATE_ID}, Key: ${PUBLIC_KEY}`);

    // Send the form using emailjs.sendForm
    // Parameters: serviceID, templateID, formElement, publicKey
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this, PUBLIC_KEY)
        .then(() => {
            alert('Message Sent Successfully!');
            this.reset();
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later. Error: ' + JSON.stringify(error));
        })
        .finally(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
});

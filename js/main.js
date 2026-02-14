// Placeholder JavaScript for the Craft Shop site

// Simple form submission handler
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
}
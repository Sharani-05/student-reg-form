document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Extracting form data
        const formData = new FormData(form);

        let message = 'Form Submitted:\n';
        for (const [key, value] of formData.entries()) {
            message += `${key}: ${value}\n`;
        }

        alert(message);

        // Optionally, you could send the data using fetch or XMLHttpRequest here
    });
});
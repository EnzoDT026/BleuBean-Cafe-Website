// Initialize EmailJS
emailjs.init("lKLYLYRvCEBqezajf"); // Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!validateForm()) {
        return; // Stop form submission if validation fails
    }

    // Simulate form submission (you can replace this with an actual API call)
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    document.querySelector('.contact-form').reset();
}

function validateForm() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if any field is empty
    if (!name || !phone || !email || !subject || !message) {
        alert('Please fill out all fields before submitting the form.');
        return false; // Prevent form submission
    }

    // Validate phone field
    if (phone === "+63-" || phone.length < 7) { // Check if phone is empty or incomplete
        alert('Please enter a valid phone number.');
        return false; // Prevent form submission
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name || !phone || !email || !subject || !message) {
        alert('Please fill out all fields before submitting the form.');
        return false;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Send email using EmailJS
    emailjs.send("alexis", "template_74thyz5", {
        name: name,
        phone: phone,
        email: email,
        subject: subject,
        message: message,
    }).then(
        function (response) {
            // Show success modal
            const modal = document.getElementById('successModal');
            modal.style.display = 'block';

            // Clear the form
            document.getElementById('contactForm').reset();
        },
        function (error) {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', error);
        }
    );

    return false; // Prevent form submission
}

// Close the modal when the user clicks the close button
document.getElementById('closeModal').onclick = function () {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
};

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function validateEmail(email) {
    // Improved email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address. Example: user@example.com');
        return false;
    }
    return true;
}

function limitPhoneNumber(input) {
    // Remove any non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');

    // Limit the phone number to 11 characters
    if (input.value.length > 11) {
        input.value = input.value.slice(0, 11); // Trim the input to 11 characters
        alert("Phone number cannot exceed 11 digits.");
    }
}

function ensurePhoneNumberStartsWithCountryCode(input) {
    // Remove any non-numeric characters except "+"
    input.value = input.value.replace(/[^0-9+]/g, '');

    // Ensure the phone number starts with "+63"
    if (!input.value.startsWith("+63")) {
        input.value = "+63" + input.value.replace(/^0+/, ''); // Remove leading zeros if present
    }

    // Remove the "+63" prefix for formatting purposes
    let number = input.value.slice(3);

    // Format the number with dashes (e.g., 912-345-6789)
    if (number.length > 3 && number.length <= 6) {
        number = number.slice(0, 3) + '-' + number.slice(3);
    } else if (number.length > 6) {
        number = number.slice(0, 3) + '-' + number.slice(3, 6) + '-' + number.slice(6, 10);
    }

    // Reapply the "+63" prefix
    input.value = "+63-" + number;

    // Limit the total length to "+63-XXX-XXX-XXXX" (16 characters)
    if (input.value.length > 16) {
        input.value = input.value.slice(0, 16);
        alert("Phone number cannot exceed the format +63-XXX-XXX-XXXX.");
    }
}
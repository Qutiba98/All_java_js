function validateForm() {
    const emailInput = document.getElementById('emailInput');
    const mobileInput = document.getElementById('mobileInput');
    const passwordInput = document.getElementById('passwordInput');
    const termsCheck = document.getElementById('termsCheck');

    let valid = true;

    // Validate email
    const emailValue = emailInput.value.trim();
    if (!validateEmail(emailValue)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate mobile number
    const mobileValue = mobileInput.value.trim();
    if (!validateMobile(mobileValue)) {
        document.getElementById('mobileError').textContent = 'Please enter a valid mobile number (eg: 077********).';
        valid = false;
    } else {
        document.getElementById('mobileError').textContent = '';
    }

    // Validate password length
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 6 || passwordValue.length > 18) {
        document.getElementById('passwordError').textContent = 'Password should be between 6 and 18 characters.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Check if terms and conditions are agreed
    if (!termsCheck.checked) {
        alert('Please agree to the terms and conditions.');
        valid = false;
    }

    // If all inputs are valid, save email and password to localStorage
    if (valid) {
        // Save email and password to localStorage
        localStorage.setItem('email', emailValue);
        localStorage.setItem('password', passwordValue);

        // Example: submitForm();
        console.log('Form validated successfully!');

        // Perform any other actions here, such as showing a message or redirecting
        alert('Registration successful. Redirecting...');

        // Redirect to another page using JavaScript
        window.location.href = 'welcome.html'; // Replace 'welcome.html' with your actual redirect URL
    }
}

// Function to validate email format using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to validate mobile number format
function validateMobile(mobile) {
    const re = /^077\d{7}$/;
    return re.test(mobile);
}

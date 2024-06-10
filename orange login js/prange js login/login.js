
function validateForm() {
    const emailInput = document.getElementById('loginEmailInput');
    const passwordInput = document.getElementById('loginPasswordInput');

    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // Retrieve saved email and password from localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // Check if entered credentials match stored credentials
    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        alert('Login successful! Redirecting to welcome page...');
        window.location.href = 'welcome.html'; // Replace with your actual welcome page URL
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function validateForm(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('loginEmailInput');
    const passwordInput = document.getElementById('loginPasswordInput');

    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        sessionStorage.setItem('currentEmail', enteredEmail);
        alert('تم تسجيل الدخول بنجاح! جاري إعادة التوجيه إلى صفحة الترحيب...');
        // window.location.href = 'welcome.html'; // استبدل 'welcome.html' بعنوان URL الصحيح
    } else {
        alert('البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
    }
}


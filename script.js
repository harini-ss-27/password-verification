// JavaScript for Password Verification
document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const password = document.getElementById('password').value;
    const retypePassword = document.getElementById('retypePassword').value;
    const message = document.getElementById('message');

    if (password === retypePassword) {
        message.textContent = 'Passwords match! Form submitted successfully.';
        message.className = 'message success';
    } else {
        message.textContent = 'Passwords do not match. Please try again.';
        message.className = 'message error';
    }
});

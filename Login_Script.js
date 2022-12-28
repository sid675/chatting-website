function check_email() {
    var email = document.getElementById("Email").value;
    var conditions = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.(.[a-z]+)?$/;
    let message = document.getElementById("message");

    if (email.match(conditions)) {
        message.textContent = "Valid email-id";
        document.getElementById("message").style.color = "green";
    } else {
        message.textContent = "Sorry! Invalid email-id";
        document.getElementById("message").style.color = "red";

    }
}
function eye(){
const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
}
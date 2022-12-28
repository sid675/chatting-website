const firebaseConfig = {
    apiKey: "AIzaSyDu86qU6LwsXzE64c0DhTyQQV0kSv5EneQ",
    authDomain: "chatting-website-cfecc.firebaseapp.com",
    databaseURL:
      "https://chatting-website-cfecc-default-rtdb.firebaseio.com",
    projectId: "chatting-website-cfecc",
    storageBucket: "chatting-website-cfecc.appspot.com",
    messagingSenderId: "514839764180",
    appId: "1:514839764180:web:f76894f19d78d2f8986f41",
    measurementId: "G-KW7CG7BX7C",
  };

  
function eye(){
const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const togglecPassword = document.querySelector('#togglecPassword');
const cpassword = document.querySelector('#id_cpassword');

togglecPassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    cpassword.setAttribute('type', type);


    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

}
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




function check_conditions() {
    var input = document.getElementById("id_password").value;

    if (input.length >= 8) {
        document.getElementById("check0").style.color = "green";
    } else {
        document.getElementById("check0").style.color = "red";
    }
    if (input.length <= 30) {
        document.getElementById("check1").style.color = "green";
    } else {
        document.getElementById("check1").style.color = "red";
    }
    if (input.match(/[0-9]/)) {
        document.getElementById("check2").style.color = "green";
    } else {
        document.getElementById("check2").style.color = "red";
    }
    if (input.match(/[A-Z]/)) {
        document.getElementById("check3").style.color = "green";
    } else {
        document.getElementById("check3").style.color = "red";
    }
    if (input.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        document.getElementById("check4").style.color = "green";
    } else {
        document.getElementById("check4").style.color = "red";
    }
}




function check_password() {
    var input = document.getElementById("id_password").value;
    var cinput = document.getElementById("id_cpassword").value;

    let message = document.getElementById("message1");

    if (input.length != 0) {
        if (input == cinput) {
            message.textContent = "passwords match";
            document.getElementById("message1").style.color = "green";
            
        } else {
            message.textContent = "Passwords don't match";
            document.getElementById("message1").style.color = "red";
        }
    }
}



function check_username() {
    var username = document.getElementById("username").value;
    var length = username.length;
    for (let i = 0; i < length; i++) {
        if (username.includes(" ")) {
            document.getElementById("username").value = username.replace(' ', '');
        }
    }
}

function all_fields() {

    var username = document.getElementById("username").value;
    var id_password = document.getElementById("id_password").value;
    var id_cpassword = document.getElementById("id_cpassword").value;
    var fname = document.getElementById("fName").value;
    var email = document.getElementById("Email").value;


    let message = document.getElementById("message2");

    if (username == null || username == "") {
        message.textContent = "All fields are mandatory";
        document.getElementById("message2").style.color = "red";
    } else if (id_password.length <= 0) {
        message.textContent = "All fields are mandatory";
        document.getElementById("message2").style.color = "red";
    } else if (id_cpassword.length <= 0) {
        message.textContent = "All fields are mandatory";
        document.getElementById("message2").style.color = "red";
    } else if (fname.length <= 0) {
        message.textContent = "All fields are mandatory";
        document.getElementById("message2").style.color = "red";
    } else if (email.length <= 0) {
        message.textContent = "All fields are mandatory";
        document.getElementById("message2").style.color = "red";
    } else {
        if (document.getElementById("message1").style.color == "green" && document.getElementById("check4").style.color == "green" && document.getElementById("check3").style.color == "green" && document.getElementById("check2").style.color == "green" && document.getElementById("check1").style.color == "green" && document.getElementById("check0").style.color == "green" && document.getElementById("message").style.color == "green") {
            message.textContent = "Welcome!";
            document.getElementById("message2").style.color = "Green";
        } else {
            message.textContent = "All conditions did not match";
            document.getElementById("message2").style.color = "red";
        }
    }
}
function check_name(){
    var name = document.getElementById("fname");
}
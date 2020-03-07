function showMain() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function showRegisterForm() {
    document.getElementById("main").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("main").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

window.addEventListener("load", showMain)
document.getElementById("registerBtn").addEventListener("click", showRegisterForm);
document.getElementById("loginBtn").addEventListener("click", showLoginForm);
document.getElementById("backRegisterBtn").addEventListener("click", showMain);
document.getElementById("backLoginBtn").addEventListener("click", showMain);

function registerProcess() {
    let username = "";
    let email = "";
    let age = 0;
    let password = "";
    let password2 = "";
    let errMsg = "";
    let ok = true;

    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    age = document.getElementById("age").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    // CHECK IF INPUTS ARE EMPTY
    if (username == "") {
        errMsg += "You must write your username\n";
        ok = false;
        document.getElementById("username").focus();
    }
    if (email == "") {
        errMsg += "You must write your email\n";
        ok = false;
        document.getElementById("email").focus();
    }
    if (age == "") {
        errMsg += "You must write your age\n";
        ok = false;
        document.getElementById("age").focus();
    }
    if (password == "") {
        errMsg += "You must write your password\n";
        ok = false;
        document.getElementById("password").focus();
    }
    if (password2 == "") {
        errMsg += "You must confirm your password\n";
        ok = false;
        document.getElementById("password2").focus();
    }

    // CHECK MINIMUN AMOUNT OF CHARACTERS
    if (username.length < 4) {
        errMsg += "Your username can't have less than 4 characters\n";
        ok = false;
        document.getElementById("username").focus();
    }
    if (password.length < 8) {
        errMsg += "Your password can't have less than 8 characters\n";
        ok = false;
        document.getElementById("password").focus();
    }

    // CHECK MAXIMUM AMOUNT OF CHARACTERS
    if (username.length > 12) {
        errMsg += "Your username can't have more than 12 characters\n";
        ok = false;
        document.getElementById("username").focus();
    }
    if (password.length > 16) {
        errMsg += "Your password can't have more than 16 characters\n";
        ok = false;
        document.getElementById("password").focus();
    }

    // CHECK AGE
    if (age < 16) {
        errMsg += "You are not old enough to enter this page\n";
        ok = false;
        document.getElementById("age").focus();
    } else if (age > 112) {
        errMsg += "You are a vampire!!!\n";
        ok = false;
        document.getElementById("age").focus();
    }

    // CHECK PASSWORD MATCH
    if (password.length >= 8 && password.length <= 16) {
        if (password !== password2) {
            errMsg += "Your passwords don't match\n";
            ok = false;
            document.getElementById("password").focus();
        }
    }

    // CHECK MAIN VALIDATION
    if (ok) {
        // showMain();
        alert("Your register was successful!");
        let successMsg = "Your username: ";
        alert(username + email + age + password + password2);
        return ok;
    } else {
        alert(errMsg);
        return ok;
        // showRegisterForm();
    }

}
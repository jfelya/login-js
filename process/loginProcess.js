// Way 1
function loginProcess() {
    let users, usernameLogin, passwordLogin;
    let ajaxCall = new XMLHttpRequest();
    let okLogin = true;

    usernameLogin = document.getElementById("usernameLogin").value;
    passwordLogin = document.getElementById("passwordLogin").value;

    ajaxCall.onreadystatechange = function() {

        if (ajaxCall.readyState == 4 && ajaxCall.status == 200) {

            users = JSON.parse(ajaxCall.responseText);

            for (let item in users) {

                if (item === "username") {
                    if (usernameLogin !== users["username"]) {
                        okLogin = false;
                    }
                    console.log("Username: " + okLogin);
                }

                if (item === "password") {
                    if (passwordLogin !== users["password"]) {
                        okLogin = false;
                    }
                }
            }
            // Submit the form manually
            if (okLogin) {
                document.querySelector("form.main-form").submit();
            }
        }
    }
    ajaxCall.open("GET", "docs/users.json", true);
    ajaxCall.send();
}
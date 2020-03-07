// Way 2
async function loginProcess2() {

    let usernameLogin, passwordLogin, response, users;
    let okLogin = true;

    usernameLogin = document.querySelector("#usernameLogin").value;
    passwordLogin = document.querySelector("#passwordLogin").value;

    response = await fetch("docs/users.json");
    users = await response.json();

    for (let item in users)
    {

        if (item === "username" && usernameLogin !== item)
        {
            okLogin = false;
        }

        else if (item === "password" && passwordLogin !== item)
        {

            okLogin = false;

        }
    }

    return okLogin;

}

function launchPromise() {

    loginProcess2().then((loginStatus) => {

      console.log(loginStatus);

  });

}
let signinLS = JSON.parse(localStorage.getItem("signin"));
let signup = document.getElementById("signin-id");
if (signinLS != null) {
    signup.innerHTML = null;
    let username = document.createElement("a");
    username.setAttribute("href", "SignUp.html");
    username.innerText = signinLS.name;

    signup.append(username, )
}
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error");
    
let loggedin = false
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "dt@gmail.com" && password === "9322") {
        loginErrorMsg.textContent = "Logged in successfully!";
        window.location.href = "home.html";
        loggedin = true
    } else {
        loginErrorMsg.textContent = "Your username or password is incorrect. Please try again.";
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("loggedin" , loggedin)
})
if (localStorage.getItem("email") && localStorage.getItem("password")) {
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("password").value = localStorage.getItem("password");
    window.location.href = "home.html";
    loggedin = true;
}

localStorage.setItem("loggedin" , loggedin)

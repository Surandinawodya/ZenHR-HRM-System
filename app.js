const login_btn = document.querySelector("#login-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login_btn2 = document.querySelector("#login-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");


sign_up_btn.addEventListener("click",() =>{
    container.classList.add("sign-up-mode");
});

login_btn.addEventListener("click",() =>{
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click",() =>{
    container.classList.add("sign-up-mode2");
});

login_btn2.addEventListener("click",() =>{
    container.classList.remove("sign-up-mode2");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user inputs
    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;
    const role = document.getElementById('Select Role').value;

    // Validate credentials
    if (username === validCredentials.username &&
        password === validCredentials.password &&
        role === validCredentials.role) {
        alert("Login successful!");
    } else {
        alert("Username, Password, or role is incorrect.");
    }
});


function redirectToLogin() {
    window.location.href = "login.html";
}

function backtohome() {
    window.location.href = "new.html";
}

function createAccount() {
    window.location.href = "create.html";
}

function forgotPassword() {
    window.location.href = "recover.html";
}

function backBtn(){
    window.location.href = "login.html";
}
function recoverVal() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        const usernameValue = document.getElementById('email-crt').value;
        const users = JSON.parse(storedUsers);

        // Find the user with the matching username
        const foundUser = users.find(user => user.username === usernameValue);

        if (foundUser) {
            // Display the password for demonstration purposes
            alert(`Your password is: ${foundUser.password}`);
        } else {
            alert("Username not found");
        }
    } else {
        alert("No user found. Please create an account.");
    }
}


function login() {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
        const usernameValue = document.getElementById('username').value;
        const passwordValue = document.getElementById('password').value;
        const users = JSON.parse(storedUsers);

        // Find the matching user in the array
        const foundUser = users.find(user => user.username === usernameValue && user.password === passwordValue);

        if (foundUser) {
            // Redirect to new.html after successful login
           window.location.href = "loggedin.html";
            
        } else {
            alert("Invalid username or password");
        }
    } else {
        alert("No user found. Please create an account.");
    }
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    login();
});

function loggedOut(){
    window.location.href = "new.html";
}


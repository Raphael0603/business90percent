function redirectToLogin() {
    window.location.href = "login.html";
}

function backtohome() {
    window.location.href = "new.html";
}

function createAccount() {
    window.location.href = "create.html";
}

function backtoSignIn() {
    window.location.href = "login.html";
}

const username = document.getElementById('email-crt');
const password = document.getElementById('password-crt');
const cnfrmpass = document.getElementById('cnfrmpassword');
const signupBtn = document.getElementById('button-Signup');

signupBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Retrieve the values from the input fields
    const usernameValue = username.value;
    const passwordValue = password.value;
    const confirmPasswordValue = cnfrmpass.value;

    // Validate if the password and confirm password match
    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match!");
        return;
    }

    // Retrieve the existing users from local storage
    const storedUsers = localStorage.getItem('users');
    let users = [];

    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }

    // Check if the username already exists in the stored users
    const existingUser = users.find(user => user.username === usernameValue);
    if (existingUser) {
        alert("Username already exists!");
        return;
    }

    // Create an object to store the new user information
    const newUser = {
        username: usernameValue,
        password: passwordValue
    };

    // Add the new user to the existing array
    users.push(newUser);

    // Store the updated users array back into local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the login page
    redirectToLogin();
});

function buildnow() {
    alert("Log in first or create and account!");
}
function build(){
    window.location.href = "content.html";

}
function contact(){
    window.location.href = "about.html";
}
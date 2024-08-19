document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const errorMessageDiv = document.getElementById("error-message");

    // Clear previous error messages
    errorMessageDiv.innerHTML = "";

    // Validate User ID
    if (!/^\d{1,5}$/.test(userId)) {
        if (password === '' || password.length < 6 || password.length > 30) {
            errorMessageDiv.innerHTML = "Both ID/password not valid"; // Both ID and Password are invalid
        } else {
            errorMessageDiv.innerHTML = "ID not valid"; // Only ID is invalid
        }
        return;
    }

    // Validate Password
    if (password.length < 6 || password.length > 30) {
        errorMessageDiv.innerHTML = "Password not valid"; // Password must be between 6 and 30 characters
        return;
    }

    // Static user credentials for validation
    const validUsers = {
        "12345": "password1",
        "23456": "password2",
        "34567": "password3"
    };

    // Check credentials
    if (validUsers[userId] === undefined) {
        if (password === '' || password !== validUsers[userId]) {
            errorMessageDiv.innerHTML = "Both ID/password not valid"; // Both ID and Password are invalid
        } else {
            errorMessageDiv.innerHTML = "ID not valid"; // Only ID is invalid
        }
    } else if (validUsers[userId] !== password) {
        errorMessageDiv.innerHTML = "Password not valid"; // Only Password is invalid
    } else {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to home page
    }
});

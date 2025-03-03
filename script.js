// SignIn Form Validation
document.getElementById("signinForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Validate Username
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    } else if (!/(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) {
        document.getElementById("passwordError").textContent = "Password must contain at least one number and one special character.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (isValid) {
        alert("SignIn successful!");
    }
});

// SignUp Form Validation
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Validate Full Name
    const fullname = document.getElementById("fullname").value.trim();
    if (fullname === "") {
        document.getElementById("fullnameError").textContent = "Full Name is required.";
        isValid = false;
    } else {
        document.getElementById("fullnameError").textContent = "";
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validate Age
    const age = document.getElementById("age").value.trim();
    if (age === "") {
        document.getElementById("ageError").textContent = "Age is required.";
        isValid = false;
    } else if (isNaN(age) || age < 18 || age > 100) {
        document.getElementById("ageError").textContent = "Age must be between 18 and 100.";
        isValid = false;
    } else {
        document.getElementById("ageError").textContent = "";
    }

    // Validate Phone Number
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^\d{10}$/;
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone Number is required.";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone Number must be 10 digits.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Validate Password
    const password1 = document.getElementById("password1").value.trim();
    if (password1 === "") {
        document.getElementById("password1Error").textContent = "Password is required.";
        isValid = false;
    } else if (!/(?=.*\d)(?=.*[!@#$%^&*])/.test(password1)) {
        document.getElementById("password1Error").textContent = "Password must contain at least one number and one special character.";
        isValid = false;
    } else {
        document.getElementById("password1Error").textContent = "";
    }

    // Validate Confirm Password
    const password2 = document.getElementById("password2").value.trim();
    if (password2 === "") {
        document.getElementById("password2Error").textContent = "Confirm Password is required.";
        isValid = false;
    } else if (password1 !== password2) {
        document.getElementById("password2Error").textContent = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById("password2Error").textContent = "";
    }

    // Validate Gender
    const gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").textContent = "Gender is required.";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    // Validate Terms and Conditions
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
        isValid = false;
    } else {
        document.getElementById("termsError").textContent = "";
    }

    if (isValid) {
        alert("SignUp successful!");
    }
});
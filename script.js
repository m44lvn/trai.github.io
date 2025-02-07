document.addEventListener("DOMContentLoaded", function () {
    // FORM REGISTER
    document.getElementById("register-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Stop submit default

        let name = document.getElementById("register-name");
        let email = document.getElementById("register-email");
        let password = document.getElementById("register-password");
        let confirmPassword = document.getElementById("confirm-password");

        let nameError = document.getElementById("name-error");
        let emailError = document.getElementById("email-error");
        let passwordError = document.getElementById("password-error");
        let confirmPasswordError = document.getElementById("confirm-password-error");

        let isValid = true;

        // Reset tampilan error
        document.querySelectorAll(".error-message").forEach(e => e.style.display = "none");
        document.querySelectorAll("input").forEach(input => input.classList.remove("input-error"));

        // Validasi Nama
        if (name.value.trim() === "") {
            nameError.textContent = "Name cannot be blank!";
            nameError.style.display = "block";
            name.classList.add("input-error");
            isValid = false;
        }

        // Validasi Email
        if (email.value.trim() === "") {
            emailError.textContent = "Email cannot be blank!";
            emailError.style.display = "block";
            email.classList.add("input-error");
            isValid = false;
        } else if (!email.value.includes("@")) {
            emailError.textContent = "Email not valid!";
            emailError.style.display = "block";
            email.classList.add("input-error");
            isValid = false;
        }

        // Validasi Password
        if (password.value.trim() === "") {
            passwordError.textContent = "Password cannot be blank!";
            passwordError.style.display = "block";
            password.classList.add("input-error");
            isValid = false;
        } else if (password.value.length < 6) {
            passwordError.textContent = "Password minimum 6 characters!";
            passwordError.style.display = "block";
            password.classList.add("input-error");
            isValid = false;
        }

        // Validasi Konfirmasi Password
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Password confirmation must be same!";
            confirmPasswordError.style.display = "block";
            confirmPassword.classList.add("input-error");
            isValid = false;
        }

        // Jika valid, tampilkan sukses
        if (isValid) {
            alert("Registrasion done! Please login.");
            document.getElementById("register-form").reset();
        }
    });

    // FORM LOGIN
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("login-email");
        let password = document.getElementById("login-password");

        let emailError = document.getElementById("login-email-error");
        let passwordError = document.getElementById("login-password-error");

        let isValid = true;

        emailError.style.display = "none";
        passwordError.style.display = "none";
        email.classList.remove("input-error");
        password.classList.remove("input-error");

        if (email.value.trim() === "") {
            emailError.textContent = "Email cannot be blank!";
            emailError.style.display = "block";
            email.classList.add("input-error");
            isValid = false;
        }

        if (password.value.trim() === "") {
            passwordError.textContent = "Password cannot be blank!";
            passwordError.style.display = "block";
            password.classList.add("input-error");
            isValid = false;
        }

        if (isValid) {
            alert("Login success!");
            document.getElementById("login-form").reset();
        }
    });

    // Navigasi Login & Register
    document.getElementById("go-to-login").addEventListener("click", function () {
        document.getElementById("register-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    });

    document.getElementById("go-to-register").addEventListener("click", function () {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("register-container").style.display = "block";
    });
});

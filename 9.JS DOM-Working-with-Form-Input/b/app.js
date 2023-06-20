function validateForm() {
    // Reset error messages
    var errorMessages = document.getElementsByClassName("error");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerText = "";
    }

    // Get form field values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate name
    var nameRegex = /^[a-zA-Z]+$/;
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required";
    } else if (!nameRegex.test(name)) {
      document.getElementById("nameError").innerText = "Name should contain only letters";
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required";
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email address";
    }

    // Validate password
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (password === "") {
      document.getElementById("passwordError").innerText = "Password is required";
    } else if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").innerText = "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit";
    }

    // Validate confirm password
    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").innerText = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    }

    // Prevent form submission if there are errors
    if (document.getElementsByClassName("error").length > 0) {
      return false;
    }
  }




const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!nameInput.value.match(nameRegex)) {
    nameError.textContent = "Name should contain only letters.";
  }

  if (!emailInput.value.match(emailRegex)) {
    emailError.textContent = "Invalid email address.";
  }

  if (!passwordInput.value.match(passwordRegex)) {
    passwordError.textContent = "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
  }
}

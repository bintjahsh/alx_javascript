const passwordForm = document.getElementById("passwordForm");
const error = document.getElementById("error");

passwordForm.addEventListener("submit", (e) => {
  // prevents the form from submitting by default
  e.preventDefault();
  validatePassword();
  passwordForm.submit();
});
function validatePassword() {
  const pass = document.getElementById("password").value;
  if (pass.length < 8) {
    error.innerText = "Password must be at least 8 characters long";
    return;
  } else if (!pass.match(/[A-Z]/)) {
    error.innerText = "Password must contain at least one uppercase letter";
    return;
  } else if (!pass.match(/[a-z]/)) {
    error.innerText = "Password must contains at least one lowercase letter";
    return;
  } else if (!pass.match(/[0-9]/)) {
    error.innerText = "Password must contain at least one numerical digit";
    return;
  } else if (!pass.match(/[!@#$%^&*]/)) {
    error.innerText =
      "Password must contain at least one special character (e.g., !@#$%^&*)";
    return;
  } else {
    return;
  }
}

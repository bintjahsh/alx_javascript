const emailForm = document.getElementById("emailForm");
const errorMessage = document.getElementById("error");

emailForm.addEventListener("submit", (e) => {
  //prevent form submission by default
  e.preventDefault();
  validateEmail();
});

function validateEmail() {
  const email = document.getElementById("email").value;
  if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
    errorMessage.innerText = "Please enter a valid email address";
    return;
  } else {
    emailForm.submit();
  }
}

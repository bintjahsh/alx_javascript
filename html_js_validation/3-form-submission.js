const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleFormSubmit();
});

function handleFormSubmit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const errorMessage = document.createElement("p");
  submitForm.appendChild(errorMessage);

  if (name === "" || email === "") {
    errorMessage.innerText = "Please fill in all required fields";
    errorMessage.style.color = "red";
    return;
  }
  errorMessage.style.color = "green";
  errorMessage.innerText = "Form submitted successfully!";
  submitForm.submit();
}

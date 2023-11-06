const dynamicForm = document.getElementById("dynamicForm");
let numFields = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");
const errorMessage = document.createElement("p");
errorMessage.style.color = "red";

numFields.addEventListener("change", generateInputFields);

dynamicForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function generateInputFields() {
  inputContainer.innerHTML = "";

  numFields = parseInt(numFields.value);

  for (i = 1; i < numFields + 1; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "field" + i;
    inputContainer.appendChild(inputField);
  }
}

function validateForm() {
  const inputFields = inputContainer.querySelectorAll("input");
  for (item of inputFields) {
    if (item.value === "") {
      errorMessage.innerText = "Please fill in all fields.";
      dynamicForm.appendChild(errorMessage);
      return false;
    }
  }
  dynamicForm.submit();
}

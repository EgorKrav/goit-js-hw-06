const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function () {
  if (this.value.replace() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = this.value.replace();
  }
});

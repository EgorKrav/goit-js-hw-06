const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
  const length = this.getAttribute("data-length");
  const valueLength = this.value.length;

  if (valueLength === parseInt(length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});




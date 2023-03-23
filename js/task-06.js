const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
  const validLength = this.getAttribute("data-length");
  const valueLength = this.value.length;
console.log(length);
  if (valueLength === Number(validLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

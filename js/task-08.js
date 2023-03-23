const loginForm = document.querySelector(".login-form");
const handleSubmit = (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
};
loginForm.addEventListener("submit", handleSubmit);

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
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

  event.target.reset();
});

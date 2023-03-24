const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
};

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

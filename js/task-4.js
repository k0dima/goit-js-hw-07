const refs = {
  form: document.querySelector("form.login-form"),
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = event.target.elements.password.value;
  const email = event.target.elements.email.value;

  if (password === "" || email === "") {
    alert("'All form fields must be filled in'");
    return;
  }

  console.log(password, email);

  event.target.reset();
});

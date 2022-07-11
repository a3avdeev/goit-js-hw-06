const form = document.querySelector("form");

const handleInput = (event) => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  form.reset();
};

form.addEventListener("submit", handleInput);

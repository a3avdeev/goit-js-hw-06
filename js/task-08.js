// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

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

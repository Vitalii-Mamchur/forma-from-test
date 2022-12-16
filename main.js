const form = {
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  button: document.querySelector('.button'),
  inputError: document.querySelector('.input-error'),
};

function checkForm() {
  const email = form.email.value;
  const password = form.password.value;

  if (email && password) {
    form.button.classList.remove('disable');
  } else {
    form.button.classList.add('disable');
  }
}

function inputHandler(event) {
  const { value, id } = event.target;

  if (value) {
    form[id].classList.add('field');
  } else {
    form[id].classList.remove('field');
  }
  checkForm();
}

function deleteError() {
  form.email.classList.remove('error');
  form.inputError.classList.remove('active');
}

function validateEmail() {
  const { value } = form.email;
  const reg = /[a-z,A-Z]{3,20}@[a-z]{3,10}\.[a-z]{2,4}/;

  if (reg.test(value)) {
    deleteError();
    checkForm();
  } else {
    form.button.classList.add('disable');
    form.email.classList.add('error');
    form.inputError.classList.add('active');
  }
}

form.email.oninput = (e) => inputHandler(e);
form.password.oninput = (e) => inputHandler(e);
form.button.onclick = validateEmail;
form.email.onblur = (e) => validateEmail(e);
form.email.onfocus = deleteError;

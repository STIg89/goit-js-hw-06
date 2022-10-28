const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;

  if (formEl.email.value && formEl.password.value !== '') {
    const formData = { email, password };
    console.log(formData);
    form.reset();
  } else {
    window.alert('Все поля должны быть заполнены!');
  }
};

form.addEventListener('submit', onFormSubmit);

const input = document.querySelector('#validation-input');
const requiredLengthOfInput = Number(input.getAttribute('data-length'));

const onInputLength = event => {
  event.currentTarget.classList.add('invalid', 'valid');
  if (event.currentTarget.value.length === requiredLengthOfInput) {
    event.currentTarget.classList.remove('invalid');
  } else event.currentTarget.classList.remove('valid');
};

input.addEventListener('blur', onInputLength);

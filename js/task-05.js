const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const onInputChange = event => {
  refs.outputName.textContent = event.currentTarget.value;
};

refs.inputName.addEventListener('input', onInputChange);

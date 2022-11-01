const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const onInputChange = event => {
  if (event.currentTarget.value.length === 0) {
    refs.outputName.textContent = 'Anonymous';
  } else refs.outputName.textContent = event.currentTarget.value;
};

refs.inputName.addEventListener('input', onInputChange);

const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const onInputChange = event => {
  event.currentTarget.value.length === 0
    ? (refs.outputName.textContent = 'Anonymous')
    : (refs.outputName.textContent = event.currentTarget.value);
};

refs.inputName.addEventListener('input', onInputChange);

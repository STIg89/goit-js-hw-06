const refs = {
  inputSize: document.querySelector('#font-size-control'),
  OutputSize: document.querySelector('#text'),
};

const onInputSizeChange = event => {
  refs.OutputSize.style.fontSize = `${event.currentTarget.value}px`;
};

refs.inputSize.addEventListener('input', onInputSizeChange);

const refs = {
  body: document.querySelector('body'),
  buttonChangeColor: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

const bodyChangeColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent = `${getRandomHexColor()}`;
};

refs.buttonChangeColor.addEventListener('click', bodyChangeColor);

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

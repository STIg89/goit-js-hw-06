const refs = {
  body: document.querySelector('body'),
  buttonChangeColor: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

const bodyChangeColor = () => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.colorValue.textContent = `${randomColor}`;
};

refs.buttonChangeColor.addEventListener('click', bodyChangeColor);

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

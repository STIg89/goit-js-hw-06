const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  inputNumber: document.querySelector('#controls>input'),
  boxesContainer: document.querySelector('#boxes'),
};

const getBoxesAmount = () => {
  const amount = Number(refs.inputNumber.value);
  createBoxes(amount);
};

const createBoxes = amount => {
  let boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  refs.boxesContainer.append(...boxes);
};

const destroyBoxes = () => {
  refs.boxesContainer.innerHTML = '';
};

refs.createBtn.addEventListener('click', getBoxesAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

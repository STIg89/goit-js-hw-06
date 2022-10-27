const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
    console.log(this);
  },
  decrement() {
    this.value -= 1;
    console.log(this);
  },
};

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

const clickPlus = () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
};

incrementBtn.addEventListener('click', clickPlus);

const clickMinus = () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
};

decrementBtn.addEventListener('click', clickMinus);

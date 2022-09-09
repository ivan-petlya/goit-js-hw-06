////////////ver1/////////////////////
const counterForm = document.querySelector("#counter");
const buttonMinus = counterForm.querySelector(
  `button[data-action="decrement"]`
);
const buttonPlus = counterForm.querySelector(`button[data-action="increment"]`);
const counterValue = counterForm.querySelector("#value");
const counter = {
  value: 0,
  plusValue() {
    this.value += 1;
  },
  minusValue() {
    this.value -= 1;
  },
};
buttonPlus.addEventListener("click", function () {
  counter.plusValue();
  counterValue.textContent = counter.value;
});
buttonMinus.addEventListener("click", function () {
  counter.minusValue();
  counterValue.textContent = counter.value;
});

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

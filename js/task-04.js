////////////ver1/////////////////////
const counter = document.querySelector("#counter");
const counterValue = counter.querySelector("#value");
counterValue.textContent = 0;

const buttonMinus = counter.querySelector(`button[data-action="decrement"]`);
buttonMinus.addEventListener("click", () => {
  counterValue.textContent -= 1;
});

const buttonPlus = counter.querySelector(`button[data-action="increment"]`);
buttonPlus.addEventListener("click", () => {
  counterValue.textContent = counterValue.textContent * 1 + 1;
});

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

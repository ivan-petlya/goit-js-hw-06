const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulList = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const tagLi = document.createElement("li");
  tagLi.textContent = ingredients[i];
  tagLi.classList.add("item");

  console.log(tagLi);
  ulList.append(tagLi);
}
////////вариант 2 ////////////////////
// const ingridArray = ingredients.map((el) => {
//   const listEements = document.createElement("li");
//   listEements.textContent = el;
//   listEements.classList.add("item");
//   return listEements;
// });
// const ulList = document.querySelector("#ingredients");
// ulList.append(...ingridArray);
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

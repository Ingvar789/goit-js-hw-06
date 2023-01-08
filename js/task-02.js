const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientContainer = document.getElementById('ingredients');
let li = '';
for (let ingredient of ingredients) {
  li += `<li>${ingredient}</li>`;
}
console.log(li);
ingredientContainer.insertAdjacentHTML("afterbegin", li);

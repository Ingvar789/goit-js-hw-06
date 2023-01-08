const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientContainer = document.getElementById('ingredients');

for (let ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientContainer.append(li);
}

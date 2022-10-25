const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsList = ingredients.map((ingredient, index) => {
  ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = ingredients[index];
  return ingredient;
});

ingredientsList.append(...makeIngredientsList);

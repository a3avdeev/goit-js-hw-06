const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addIngredients = document.querySelector('ul#ingredients')

const makeIngredients = ingredients.map(ingredient =>  {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');
  return newEl;
});

console.log(makeIngredients);
addIngredients.append(...makeIngredients)


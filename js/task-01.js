const categoriesEl = document.querySelectorAll('.item');
const numberOfCategories = categoriesEl.length;
console.log('Number of categories:', numberOfCategories);

categoriesEl.forEach(function (elem, number) {
    const categoryName = elem.querySelector('h2').textContent;
    const elementsNumber = elem.querySelectorAll('li').length;
    console.log('Category:', categoryName);
    console.log('Elements:', elementsNumber);
});


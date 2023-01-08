const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

for (let category of categories) {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
}


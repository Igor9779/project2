import { fetchAndDisplayCategories, fetchRecipes } from './utils.js';

const allCategoriesButton = document.querySelector('.all-categories-button');
const sidebar = document.querySelector('.sidebar');

allCategoriesButton.addEventListener('click', async () => {
    await fetchRecipes();
});

fetchAndDisplayCategories();

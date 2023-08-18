import { fetchAndDisplayCategories, fetchAndDisplayRecipes } from './utils.js';

const allCategoriesButton = document.querySelector('.all-categories-button');
const sidebar = document.querySelector('.sidebar');

allCategoriesButton.addEventListener('click', () => {
    fetchAndDisplayRecipes('All categories');
});

fetchAndDisplayCategories();
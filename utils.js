export async function fetchAndDisplayCategories() {
    const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
    const sidebar = document.querySelector('.sidebar');

    try {
        const response = await fetch(`${BASE_URL}/categories`);
        const categories = await response.json();
        addCategoryButtons(categories, sidebar);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

export async function fetchAndDisplayRecipes(category) {
    const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
    const content = document.querySelector('.content');

    try {
        let apiUrl;
        if (category === 'All categories') {
            apiUrl = `${BASE_URL}/recipes`; // Отримати всі рецепти
        } else {
            apiUrl = `${BASE_URL}/recipes?category=${category}`; // Отримати рецепти за категорією
        }

        const response = await fetch(apiUrl);
        const recipes = await response.json();
        content.innerHTML = '';

        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.textContent = recipe.name;
            content.appendChild(recipeElement);
        });
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function addCategoryButtons(categories, sidebar) {
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.name;
        button.classList.add('category-button');
        sidebar.appendChild(button);
    });
}
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

export async function fetchAndDisplayCategories() {
    const sidebar = document.querySelector('.sidebar');

    try {
        const response = await fetch(`${BASE_URL}/categories`);
        const categories = await response.json();
        addCategoryButtons(categories, sidebar);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

export async function fetchRecipes(category) {

    try {
        let apiUrl = `${BASE_URL}/recipes`; 
        if (category !== 'All categories') {
            apiUrl = `${BASE_URL}/recipes?category=${category}`;
        }

    } catch (error) {
        console.error('Error fetching and displaying recipes:', error);
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
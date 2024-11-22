// Recipe Database
const recipes = [
    {
        name: "Chicken Donburi",
        appliances: ["Stove", "Frying Pan"],
        ingredients: [
            "Soy Sauce",
            "Chicken Stock",
            "Mirin",
            "Sugar",
            "Chicken",
            "Scallions",
            "Snow Peas",
            "Eggs",
            "Sesame Seeds",
            "Rice"
        ],
        instructions: [
            "Mix soy sauce, mirin, stock, and sugar in a large deep frying pan. Bring to a boil.",
            "Reduce the heat to a simmer.",
            "Add chicken. Let it sit for 5 minutes.",
            "Add scallions and snow peas. Simmer until tender (about 2 minutes).",
            "Slowly pour in eggs until it spreads throughout the pan. Do not stir.",
            "Cover and cook over medium heat until the egg has set.",
            "Top with sesame seeds.",
            "Serve over steamed rice."
        ],
        time: "25 mins",
        servings: 4
    },
    {
        name: "Dan Dan Noodles",
        appliances: ["Stove", "Large Pot"],
        ingredients: [
            "Ramen Noodles",
            "Vegetable Oil",
            "Ground Pork",
            "Ginger",
            "Soy Sauce",
            "Bread & Butter Pickles",
            "Pickle Brine",
            "Hot Sesame Oil",
            "Sesame Seeds",
            "Green Onions"
        ],
        instructions: [
            "Bring a large pot of water to a boil.",
            "Discard flavor packets. Cook the ramen noodles according to the package. Drain, rinse under cold water, drain. Set aside.",
            "Heat 2 tbsp vegetable oil in a large skillet over high heat. Bring it to a simmer.",
            "Add ground pork and ginger. Mashing as you go, cook until lightly browned (about 3 minutes).",
            "Add soy sauce, pickles, pickle brine, and water. Cook until liquid is absorbed.",
            "In a bowl, whisk water, remaining soy sauce, pickle brine, oils, and ginger.",
            "Add noodles and toss until coated.",
            "Top with pork, sesame seeds, and green onions."
        ],
        time: "20 mins",
        servings: 4
    },
    {
        name: "Rice Cooker Pancake",
        appliances: ["Rice Cooker"],
        ingredients: [
            "Cooking Spray",
            "All-Purpose Flour",
            "Sugar",
            "Baking Powder",
            "Salt",
            "Eggs",
            "Milk",
            "Butter",
            "Vanilla Extract",
            "Strawberries",
            "Maple Syrup"
        ],
        instructions: [
            "Lightly coat the inner pot with non-stick cooking spray.",
            "Whisk flour, sugar, baking powder, and salt in a large bowl.",
            "Whisk eggs, milk, butter, and vanilla in a medium bowl until incorporated.",
            "Combine both bowls until most lumps are gone.",
            "Pour batter into the rice cooker pot.",
            "Set the rice cooker to the standard 'white rice' cycle.",
            "Cook until the underside is golden.",
            "Test with toothpick until clean (about 35-50 minutes).",
            "Serve with toppings."
        ],
        time: "50 mins",
        servings: 6
    },
    {
        name: "Microwave Chili",
        appliances: ["Microwave"],
        ingredients: [
            "Onion",
            "Garlic",
            "Butter",
            "Cumin",
            "Paprika",
            "Chili Flakes",
            "Chopped Tomatoes",
            "Kidney Beans",
            "Vegetable Bouillon",
            "Dark Chocolate",
            "Sour Cream",
            "Cheese"
        ],
        instructions: [
            "Mix onion, garlic, butter, and spices. Microwave 30 seconds.",
            "Let stand 1 minute.",
            "Add tomatoes, beans, bouillon, and chocolate.",
            "Cover with pierced cling film.",
            "Cook 2 minutes, adding tomato juice if needed.",
            "Serve with toppings."
        ],
        time: "5 mins",
        servings: 4
    },
    {
        name: "Microwave Orange & Soy Salmon",
        appliances: ["Microwave"],
        ingredients: [
            "Soy Sauce",
            "Red Chili",
            "Ginger",
            "Spring Onions",
            "Orange Juice",
            "Honey",
            "Salmon",
            "Pak Choi",
            "Rice"
        ],
        instructions: [
            "Combine sauce ingredients in bowl.",
            "Wrap salmon and pak choi in parchment paper.",
            "Add sauce to parcels.",
            "Microwave 4-5 minutes until salmon is done.",
            "Serve with rice."
        ],
        time: "10 mins",
        servings: 2
    }
];


// Update these functions in your action.js file
function filterRecipes() {
    const selected = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value);

    console.log('Selected items:', selected);

    if (selected.length === 0) {
        // If nothing is selected, show all recipes
        displayRecipes(recipes);
        return;
    }

    const filteredRecipes = recipes.filter(recipe => {
        return selected.some(item => 
            recipe.appliances.some(appliance => appliance.toLowerCase() === item.toLowerCase()) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(item.toLowerCase()))
        );
    });

    console.log('Filtered Recipes:', filteredRecipes);
    displayRecipes(filteredRecipes);
}

function displayRecipes(filteredRecipes) {
    const container = document.getElementById('recipe-container');
    if (!container) {
        console.error('Recipe container not found');
        return;
    }
    
    // Clear previous results
    container.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        container.innerHTML = `
            <div class="recipe-card">
                <p>No recipes match your selection. Try selecting different ingredients or appliances.</p>
            </div>`;
        return;
    }

    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Time:</strong> ${recipe.time}</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <p><strong>Appliances needed:</strong> ${recipe.appliances.join(', ')}</p>
            <p><strong>Main ingredients:</strong> ${recipe.ingredients.slice(0, 5).join(', ')}...</p>
            <button class="view-recipe-btn" onclick="showRecipeDetails('${recipe.name}')">
                View Full Recipe
            </button>
        `;
        container.appendChild(card);
    });

    // Make sure results are visible
    document.getElementById('recipe-results').style.display = 'block';
}

function showRecipeDetails(recipeName) {
    const recipe = recipes.find(r => r.name === recipeName);
    if (!recipe) return;

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
    `;

    content.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Time:</strong> ${recipe.time}</p>
        <p><strong>Servings:</strong> ${recipe.servings}</p>
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h3>Instructions:</h3>
        <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
        <button onclick="this.closest('div[style]').remove()" style="
            position: absolute;
            top: 10px;
            right: 10px;
            background: #659972;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        ">Close</button>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Find Recipes button
    const findRecipesBtn = document.getElementById('findRecipes');
    if (findRecipesBtn) {
        findRecipesBtn.addEventListener('click', function() {
            filterRecipes();
        });
    }
});

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('recipe-modal')) {
        event.target.remove();
    }
});


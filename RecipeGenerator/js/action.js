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
        name: "One Pot Rice Cooker Meal",
        appliances: ["Rice Cooker"],
        ingredients: [
            "Short Grain Rice",
            "Soy Sauce",
            "Dark Soy Sauce",
            "Sugar",
            "Vegetarian Oyster Sauce",
            "Sesame Oil",
            "Garlic",
            "Scallion",
            "Carrot",
            "Shiitake Mushrooms",
            "Bok Choy",
            "Edamame",
            "Vegan Ham"
        ],
        instructions: [
            "Wash rice 2-3 times until water runs clearer. Drain excess water.",
            "Mix rice, sauces, sugar, sesame oil, and water in rice cooker pot.",
            "Add vegetables and protein over the rice.",
            "Cover and set rice cooker to cook.",
            "Once cooked, mix everything together.",
            "Season with additional soy sauce if needed.",
            "Serve with sesame seeds and chili sauce."
        ],
        time: "30 mins",
        servings: 4
    },
    {
        name: "Shakshuka",
        appliances: ["Stove", "Frying Pan"],
        ingredients: [
            "Olive Oil",
            "Red Onions",
            "Red Chili",
            "Garlic",
            "Coriander",
            "Cherry Tomatoes",
            "Caster Sugar",
            "Eggs"
        ],
        instructions: [
            "Heat oil in a frying pan.",
            "Soften onions, chili, garlic, and coriander stalks for 5 minutes. Cover with lid.",
            "Stir in tomatoes and sugar. Cook until thick (8-10 minutes).",
            "Create 4 dips in sauce and crack eggs into each.",
            "Cover and cook on low heat until eggs are done (6-8 minutes).",
            "Top with coriander leaves.",
            "Serve as desired."
        ],
        time: "25 mins",
        servings: 4
    },
    {
        name: "Lemon & Herb Chicken",
        appliances: ["Oven", "Baking Sheet", "Baking Tin"],
        ingredients: [
            "Russet Potatoes",
            "Olive Oil",
            "Salt",
            "Red Onion",
            "Garlic",
            "Canned Tomatoes",
            "Butter Beans",
            "Mixed Dried Herbs",
            "Chicken Thighs",
            "Lemon"
        ],
        instructions: [
            "Preheat oven to 350°F.",
            "Cut and toss potatoes with oil and salt on baking sheet.",
            "Fry onion and garlic until soft.",
            "Add tomatoes and beans to baking tin.",
            "Season chicken with herbs and top with lemon slices.",
            "Place both trays in oven.",
            "Rotate potatoes after 20 minutes.",
            "Cook chicken for 45 minutes total.",
            "Serve while hot."
        ],
        time: "75 mins",
        servings: 4
    },
    {
        name: "Spaghetti Bolognese",
        appliances: ["Stove", "Large Saucepan", "Large Pot"],
        ingredients: [
            "Olive Oil",
            "Ground Beef",
            "Ground Pork",
            "Shallots",
            "Garlic",
            "Crushed Tomato",
            "Tomato Paste",
            "Red Wine",
            "Dried Oregano",
            "Spaghetti",
            "Parmesan",
            "Basil Leaves"
        ],
        instructions: [
            "Brown meats separately in oil and set aside.",
            "Cook shallots and garlic in remaining oil.",
            "Return meat to pan with tomatoes, paste, wine, and oregano.",
            "Simmer covered for 45 minutes.",
            "Cook spaghetti according to package.",
            "Add parmesan to sauce.",
            "Combine pasta and sauce, simmer 5 minutes.",
            "Serve with extra cheese and basil."
        ],
        time: "60 mins",
        servings: 6
    },
    {
        name: "Microwave Mac and Cheese",
        appliances: ["Microwave"],
        ingredients: [
            "Elbow Macaroni",
            "Whole Milk",
            "Kosher Salt",
            "American Cheese",
            "Monterey Jack Cheese",
            "Parmesan Cheese",
            "Cream Cheese",
            "Dijon Mustard"
        ],
        instructions: [
            "Mix macaroni, 1 cup milk, and salt in microwave-safe bowl.",
            "Cover with pierced wrap and microwave 4 minutes.",
            "Stir and cook 3 more minutes until al dente.",
            "Add remaining ingredients and cook in 30-second intervals until cheese melts.",
            "Stir until combined.",
            "Serve hot."
        ],
        time: "15 mins",
        servings: 4
    },
    {
        name: "Congee",
        appliances: ["Rice Cooker"],
        ingredients: [
            "Japanese Rice",
            "Chicken Stock",
            "Celery",
            "Ginger",
            "Scallions"
        ],
        instructions: [
            "Rinse rice until water runs clear.",
            "Place rice, celery and ginger in pot with chicken stock to porridge line.",
            "Select Porridge menu and set for 70 minutes.",
            "Top with scallions and serve."
        ],
        time: "80 mins",
        servings: 2
    },
    {
        name: "Sriracha Noodles",
        appliances: ["Stove", "Pot", "Skillet"],
        ingredients: [
            "Lo Mein Noodles",
            "Butter",
            "Crushed Red Pepper",
            "Eggs",
            "Brown Sugar",
            "Soy Sauce",
            "Sriracha",
            "Cilantro",
            "Green Onion"
        ],
        instructions: [
            "Mix brown sugar, soy sauce, and sriracha.",
            "Cook noodles until tender.",
            "Scramble eggs with red peppers in skillet.",
            "Add cooked noodles to egg mixture.",
            "Add sauce and toss.",
            "Top with cilantro and onions.",
            "Serve immediately."
        ],
        time: "15 mins",
        servings: 2
    }
];

// Selected items tracking
let selectedItems = new Set();

// Tag Management
function updateSelectedTags() {
    const container = document.querySelector('.selected-tags-container');
    const tagsDisplay = document.getElementById('tags-display');
    
    if (selectedItems.size === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    tagsDisplay.innerHTML = '';
    
    selectedItems.forEach(item => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerHTML = `
            ${item}
            <span class="tag-remove" 
                  role="button" 
                  tabindex="0" 
                  onclick="removeTag('${item}')"
                  onkeypress="(event) => { if(event.key === 'Enter') removeTag('${item}') }">
                ×
            </span>
        `;
        tagsDisplay.appendChild(tag);
    });
}

function removeTag(item) {
    selectedItems.delete(item);
    // Uncheck the corresponding checkbox
    const checkbox = document.querySelector(`input[data-item="${item}"]`);
    if (checkbox) checkbox.checked = false;
    
    updateSelectedTags();
    filterRecipes();
}

// Checkbox Management
function handleCheckboxChange(event) {
    const item = event.target.dataset.item;
    if (event.target.checked) {
        selectedItems.add(item);
    } else {
        selectedItems.delete(item);
    }
    
    updateSelectedTags();
    filterRecipes();
}

// Recipe Filtering
function filterRecipes() {
    const container = document.getElementById('recipe-results');
    container.style.display = 'block';

    if (selectedItems.size === 0) {
        displayRecipes(recipes);
        return;
    }

    const filteredRecipes = recipes.filter(recipe => {
        return Array.from(selectedItems).some(item => {
            const lowercaseItem = item.toLowerCase();
            return recipe.appliances.some(appliance => 
                appliance.toLowerCase().includes(lowercaseItem)
            ) || recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(lowercaseItem)
            );
        });
    });

    displayRecipes(filteredRecipes);
}

// Recipe Display
function displayRecipes(filteredRecipes) {
    const container = document.getElementById('recipe-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        container.innerHTML = `
            <div class="recipe-card">
                <p>No recipes match your selection. Try selecting different ingredients or appliances.</p>
            </div>`;
        return;
    }

    filteredRecipes.forEach(recipe => {
        // Find matching tags for this recipe
        const matchingTags = Array.from(selectedItems).filter(item => {
            const lowercaseItem = item.toLowerCase();
            return recipe.appliances.some(a => 
                a.toLowerCase().includes(lowercaseItem)
            ) || recipe.ingredients.some(i => 
                i.toLowerCase().includes(lowercaseItem)
            );
        });

        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <div class="recipe-details">
                <div>
                    <p><strong>Time:</strong> ${recipe.time}</p>
                    <p><strong>Servings:</strong> ${recipe.servings}</p>
                </div>
                <div>
                    <p><strong>Appliances needed:</strong> ${recipe.appliances.join(', ')}</p>
                    <p><strong>Main ingredients:</strong> ${recipe.ingredients.slice(0, 5).join(', ')}...</p>
                </div>
            </div>
            ${matchingTags.length > 0 ? `
                <div class="matching-tags">
                    <p>Matching selections:</p>
                    ${matchingTags.map(tag => `
                        <span class="matching-tag">${tag}</span>
                    `).join('')}
                </div>
            ` : ''}
            <button class="view-recipe-btn" onclick="showRecipeDetails('${recipe.name}')">
                View Full Recipe
            </button>
        `;
        container.appendChild(card);
    });
}

// Recipe Modal
function showRecipeDetails(recipeName) {
    const recipe = recipes.find(r => r.name === recipeName);
    if (!recipe) return;

    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="recipe-modal-content">
            <h2>${recipe.name} <img src='img/dairy.png'/></h2>
            <p><strong>Time:</strong> ${recipe.time}</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            
            <h3>Instructions:</h3>
            <ol>
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
            
            <button class="close-modal-btn" onclick="this.closest('.recipe-modal').remove()">
                Close
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    // Close modal with escape key
    document.addEventListener('keydown', function closeModal(e) {
        if (e.key === 'Escape' && modal.parentElement) {
            modal.remove();
            document.removeEventListener('keydown', closeModal);
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    // Initialize Find Recipes button
    const findRecipesBtn = document.getElementById('findRecipes');
    if (findRecipesBtn) {
        findRecipesBtn.addEventListener('click', filterRecipes);
    }

    // Initial recipe display
    displayRecipes(recipes);
});

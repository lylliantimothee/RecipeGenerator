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
<<<<<<< Updated upstream
        servings: 2
=======
        servings: 2,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
            "./RecipeGenerator/img/dairy.png",
            "./RecipeGenerator/img/grains.png"
        ]
    },
    {
        name: "Burrito Bowls", 
        appliances: ["Stove", "Pot"], 
        ingredients: [
            "2 Cups Uncooked White Rice",
            "½ tsp Salt",
            "2 (15 oz) Canned Black Beans",
            "1 (15 oz) Canned Corn",
            "½ tsp Ground Cumin",
            "¼ tsp Garlic Powder",
            "1 (16 oz) Salsa Jar",
            "¼ Cup Shredded Cheddar Cheese",
            "1 Bunch Green Onions",
            "1 Jalapeño (optional)"
        ], 
        instructions: [
            "Add rice, salt, and 3 cups water to a medium sauce pot. Top with a lid and bring to a boil on high heat.",
            "Once it comes to a boil, turn the heat to low and simmer for about 15 minutes.",
            "In a separate pot, add beans, corn, cumin, and garlic powder. Heat over medium heat, stirring often.",
            "Fluff the rice.",
            "In a bowl, place rice, beans, salsa, and cheese. Top with extras like green onions and jalapeños if desired.",
            "Serve while warm."
        ], 
        time: "30 mins", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
            "./RecipeGenerator/img/dairy.png",
            "./RecipeGenerator/img/grains.png"
        ]
    },
    {
        name: "Scallion Herb Chickpea Salad", 
        appliances: [], 
        ingredients: [
            "1 Avocado",
            "½ Cup Greek Yogurt",
            "1 tsp Lemon Juice",
            "¼ tsp Salt",
            "¼ Cup Fresh Parsley (chopped)",
            "¼ Cup Fresh Cilantro (chopped)",
            "2 Scallions (sliced)",
            "1 (15 oz) Canned Chickpeas"
        ], 
        instructions: [
            "In a bowl, mash avocado, yogurt, lemon juice, salt, parsley, cilantro, and scallions until desired consistency.",
            "Drain chickpeas. Add to the avocado mixture, mashing the chickpeas.",
            "Season and serve to your liking."
        ], 
        time: "10 mins", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
            "./RecipeGenerator/img/dairy.png"
        ]
    },
    {
        name: "Papas Bravas", 
        appliances: [ "Stove", "Saucepan (2qt & 6qt)","Deep-Fry Thermometer", "Food Processor (optional)" ], 
        ingredients: [
            "1 tsp Hot Smoked Paprika",
            "¼ tsp Sugar",
            "5 Cans Whole Peeled Tomatoes (drained)",
            "3 Garlic Cloves (peeled)",
            "½ Yellow Onion (thinly sliced)",
            "Pinch of Salt & Pepper",
            "1 tbsp Olive Oil",
            "2 ½ Waxy Potatoes (quartered)",
            "1 Cup Mayo",
            "Minced Parsley (optional)"
        ], 
        instructions: [
            "In a bowl, mix paprika, sugar, tomatoes, garlic, onion, salt, and pepper. Either by hand or with a food processor, coarsely grind the mixture.",
            "Heat olive oil in a saucepan over medium-high heat.",
            "Add the mixture to the pan. Stir occasionally and reduce for about 5 minutes. Set aside.",
            "Heat enough canola oil to cover the potatoes in a 6 qt saucepan. Heat until the thermometer reads 220°F.",
            "Add potatoes and cook until tender and golden (about 35-40 minutes).",
            "Once cooked, dab the potatoes with a paper towel to remove excess oil.",
            "Increase the oil temperature to 350°F. Working in batches, fry the potatoes until crispy (about 4-5 minutes).",
            "Remove potatoes from heat and season with salt. Drizzle with sauce, mayo, and parsley.",
            "Serve."
        ], 
        time: "1 hour", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/veg.png"
        ]
    },    
    {
        name: "Greek Lemon Potatoes", 
        appliances: [ "Oven" ], 
        ingredients: [
            "<b><i>For the Spice Mix:</i></b>",
            "1 tsp Lawry's Seasoned Salt",
            "1 tsp Black Pepper",
            "1 tsp Sweet Paprika",
            "1 tsp Dried Rosemary",
            "<b><i>For the Potatoes:</i></b>",
            "4 Large Potatoes (peeled & cut into wedges)",
            "8 Garlic Cloves (chopped)",
            "4 tbsp Extra Virgin Olive Oil",
            "1 Lemon (juiced)",
            "1 ¼ cup Stock (vegetable or chicken)",
            "½ cup Grated Parmesan Cheese",
            "1 cup Parsley Leaves (chopped)"
        ], 
        instructions: [
            "Get ready: Preheat the oven to 400°F. Coat a large 9\"x13\" baking dish with a thin layer of olive oil.",
            "Make the spice mix: In a small bowl, mix together the seasoned salt, black pepper, sweet paprika, and dried rosemary.",
            "Prep the potatoes: Place the potato wedges in the oiled baking dish and sprinkle with the spice mix. Toss evenly to distribute the spices.",
            "Prep the broth: In a medium mixing bowl, whisk together the chopped garlic, olive oil, lemon juice, and broth. Pour over the potatoes.",
            "Bake the potatoes: Cover the baking dish with foil and bake for 40 minutes.",
            "Finish the potatoes: Remove the potatoes from the oven, uncover, and sprinkle with the Parmesan cheese. Return to the oven, uncovered, and roast until the potatoes are cooked through and have turned golden brown with a little crust forming, about 10-15 minutes."
        ], 
        time: "1 hour", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
            "./RecipeGenerator/img/dairy.png",
        ]
    },
    {
        name: "Meatloaf", 
        appliances: [ "Oven", "Pans" ], 
        ingredients: [
            "Cooking spray",
            "1 tbsp butter",
            "1 onion, finely chopped",
            "1 carrot, finely chopped",
            "1 stalk celery, finely chopped",
            "1 tsp fresh thyme leaves, chopped",
            "Kosher salt",
            "Freshly ground black pepper",
            "1 clove garlic, minced",
            "1 tsp Worcestershire sauce",
            "1 tbsp tomato paste",
            "2 lb ground beef",
            "½ cup bread crumbs",
            "2 large eggs, lightly beaten",
            "½ cup ketchup",
            "2 tbsp packed brown sugar",
            "Freshly chopped parsley, for serving"
        ], 
        instructions: [
            "Preheat oven to 350°F and grease a 9\"-x-5\" loaf pan with cooking spray.",
            "In a large skillet over medium heat, melt butter. Add onions, carrots, and celery. Season with salt and pepper and cook, stirring occasionally, until soft (about 5 minutes). Add thyme and garlic and cook until fragrant (1 minute more). Turn off heat and stir in Worcestershire sauce and tomato paste. Let cool slightly.",
            "In a large bowl, combine the vegetable mixture, ground beef, bread crumbs, and eggs. Press into the prepared loaf pan.",
            "In a small bowl, whisk together ketchup and brown sugar.",
            "Brush the meatloaf with half the ketchup mixture and bake for 45 minutes. Brush with the remaining ketchup mixture and bake for another 15-20 minutes or until the middle of the loaf reaches 155°F.",
            "Let the meatloaf cool for 15 minutes before slicing. Garnish with freshly chopped parsley and serve."
        ], 
        time: "1 hour", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
            "./RecipeGenerator/img/dairy.png",
            "./RecipeGenerator/img/grains.png"
        ]
    },
    {
        name: "Chia Pudding", 
        appliances: [], 
        ingredients: [
            "2 Tablespoons Chia Seeds",
            "½ Cup Milk (or Almond Milk, Coconut Milk, Oat Milk, Cashew Milk, etc.)",
            "Sweetener of choice (Stevia, Sugar, Honey, etc.)",
            "Flavoring of choice (e.g., 1 tsp cocoa for chocolate pudding, or chai spice for a variation)"
        ], 
        instructions: [
            "Stir chia seeds, milk, sweetener, and flavoring thoroughly.",
            "Cover and refrigerate for several hours or overnight.",
            "Stir again after about an hour or two to maintain consistency as it gels up.",
            "Optional: Add nuts, cereal, or vanilla yogurt before serving."
        ], 
        time: "5 minutes prep, several hours or overnight chilling", 
        servings: "1-2",
        img: [
            "./RecipeGenerator/img/dairy.png",
            "./RecipeGenerator/img/grains.png"
        ]
    },
    {
        name: "Mediterranean Antipasto Salad", 
        appliances: [], 
        ingredients: [
            "1 can Artichoke Hearts",
            "1 can Olives",
            "Sliced Cucumbers",
            "Cherry Tomatoes",
            "Salami (cut into thin strips)",
            "1-2 Tablespoons Olive Oil",
            "Salt",
            "Herb of choice (e.g., dried dill, garlic powder)"
        ], 
        instructions: [
            "Mix together in a bowl (or a couple of bowls if space is tight).",
            "ENJOY!"
        ], 
        time: "5 minutes", 
        servings: "1-2",
        img: [
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
        ]
    },
    {
        name: "Cauliflower Fried Rice", 
        appliances: [ "Pans", "Stove" ], 
        ingredients: [
            "1 medium head of cauliflower (or 4 cups of riced cauliflower)",
            "2 tablespoons sesame oil (or avocado oil)",
            "2 large eggs, beaten",
            "2 cloves garlic, minced",
            "1 cup frozen peas and carrots (optional, adjust for keto)",
            "¼ cup green onions, chopped (reserve some for garnish)",
            "¼ cup soy sauce (or coconut aminos for keto)",
            "½ teaspoon ground ginger",
            "Optional protein: diced chicken, shrimp, or tofu"
        ], 
        instructions: [
            "If using a complete head of cauliflower, chop it into pieces and blend in a food processor until the texture resembles rice, or use store-bought riced cauliflower.",
            "Heat 1 tablespoon sesame oil in a large pan or wok over medium heat.",
            "Cook the beaten eggs in the skillet, stirring periodically, until scrambled and thoroughly set. Remove from the skillet and set aside.",
            "Pour the remaining tablespoon of sesame oil into the same skillet.",
            "Sauté the minced garlic, peas, and carrots for 2-3 minutes, until fragrant and soft.",
            "Add the riced cauliflower to the pan and mix well.",
            "Add the soy sauce or coconut aminos and ground ginger.",
            "Stir often and simmer for 5-6 minutes, or until the cauliflower is soft but not mushy.",
            "Return the scrambled eggs to the skillet and toss in the cauliflower rice.",
            "Add the green onions and any additional protein (e.g., precooked chicken, shrimp).",
            "If preferred, garnish with more green onions and a sprinkle of sesame oil.",
            "Serve hot as a side dish or as the main entrée."
        ], 
        time: "20 mins", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
        ]
    },
    {
        name: "French Bread Pizza", 
        appliances: [ "Oven", "Baking Sheet", "Pans" ], 
        ingredients: [
            "3 tablespoons (45g) unsalted butter",
            "4 tablespoons (60ml) extra-virgin olive oil, divided",
            "4 cloves garlic, finely minced",
            "Pinch red pepper flakes",
            "½ teaspoon dried oregano",
            "¼ cup (15g) minced fresh parsley or basil leaves, or a mix",
            "Kosher salt",
            "1 large loaf French or Italian bread (about 18 inches long and 4 inches wide), split half lengthwise and crosswise",
            "1 (14.5-ounce; 400g) can crushed tomatoes",
            "8 ounces (225g) freshly grated whole milk mozzarella cheese",
            "2 ounces (60g) grated Parmigiano-Reggiano"
        ], 
        instructions: [
            "Adjust oven rack to upper position and preheat oven to 425°F (220°C).",
            "Heat butter and 3 tablespoons (45ml) olive oil in a medium saucepan over medium-low heat until butter is melted.",
            "Add garlic, pepper flakes, and oregano and cook, stirring occasionally, until garlic is softened but not browned, about 2 minutes.",
            "Stir in half of the parsley/basil and a big pinch of salt. Remove from heat.",
            "Place bread cut-side-up on a clean work surface. Using a rimmed baking sheet, press down on bread evenly until compressed to about 2/3rds of its original height. Place bread on top of the rimmed baking sheet.",
            "Using a pastry brush, brush half of the garlic/butter/oil mixture evenly over the cut surfaces of bread, making sure to get plenty of garlic and herbs. Set aside.",
            "Add tomatoes to the remaining garlic/butter/oil mixture in the pan, stir to combine, increase heat to medium, bring to a simmer, then reduce heat to maintain a bare simmer. Cook, stirring occasionally, until rich and reduced, about 15 minutes. Season to taste with salt.",
            "While sauce cooks, spread ¼ of the mozzarella evenly over the surface of the bread and transfer to the oven. Cook until cheese is barely melted, about 8 minutes. Remove from oven and set aside until sauce is cooked.",
            "Spread sauce evenly over bread, then spread remaining mozzarella on top of sauce. Transfer to oven and bake until cheese is melted and just starting to brown, about 10 minutes.",
            "Remove from oven and immediately sprinkle with Parmigiano-Reggiano, remaining parsley/basil, and remaining tablespoon of extra-virgin olive oil.",
            "Allow to cool slightly and serve."
        ], 
        time: "40 minutes", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/veg.png",
            "./RecipeGenerator/img/dairy.png",
            "./RecipeGenerator/img/grains.png"
        ]
    },
    {
        name: "Frittata", 
        appliances: [ "Oven", "Pans" ], 
        ingredients: [
            "2 tablespoons extra virgin olive oil",
            "¾ cup thinly sliced shallots (from 2 to 3 shallots)",
            "2 cups seasoned, cooked vegetables or greens",
            "8 large eggs",
            "⅓ cup heavy cream",
            "½ teaspoon salt",
            "¼ teaspoon freshly ground black pepper",
            "1¼ cups shredded cheese (such as Cheddar or Gruyere)"
        ], 
        instructions: [
            "Preheat the oven to 325°F, and set an oven rack in the middle position.",
            "Heat the oil in a 10-inch cast iron or ovenproof nonstick skillet over medium heat.",
            "Add the shallots and cook, stirring frequently, until softened, 3 to 4 minutes. Do not brown.",
            "Add the cooked vegetables and stir to combine.",
            "In a large bowl, whisk together the eggs, heavy cream, salt, and pepper.",
            "Add the cooked vegetable mixture and cheese to the egg mixture and stir to combine.",
            "Pour the mixture back into the pan (no need to wash it), then place it in the oven and bake until set, 20 to 23 minutes.",
            "Immediately place an oven mitt over the pan handle to remind yourself that it is hot.",
            "Serve the frittata directly from the pan, or use a rubber spatula to loosen the edges and slide the frittata onto a plate."
        ], 
        time: "30 mins", 
        servings: 4,
        img: [
            "./RecipeGenerator/img/appliances.png",
            "./RecipeGenerator/img/protein.png",
            "./RecipeGenerator/img/veg.png",
            "./RecipeGenerator/img/dairy.png"
        ]
>>>>>>> Stashed changes
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

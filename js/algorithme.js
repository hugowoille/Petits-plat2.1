import recipes from "../data/recipes.js";
const cardsContainer = document.getElementById("cards-container");

function displayRecipients() {
	for (let i = 0; i < recipes.length; i++) {
		const recipe = recipes[i];
		// card container
		const card = document.createElement("section");
		card.classList.add("card");
		// img
		const imgCard = document.createElement("img");
		imgCard.src = `./img/recettes/${recipe.image}`;
		// CARD - description
		const cardDescription = document.createElement("div");
		cardDescription.classList.add("card-description");
		// titre
		const recipeTitle = document.createElement("h2");
		recipeTitle.textContent = recipe.name;
		// RECETTE
		const recetteTitle = document.createElement("h3");
		recetteTitle.textContent = "RECETTE";
		// description recette
		const recipeDescription = document.createElement("p");
		recipeDescription.textContent = recipe.description;
		recipeDescription.classList.add("recette-description");
		// ingrédients container
		const ingredientsContainer = document.createElement("div");
		ingredientsContainer.classList.add("ingredients-container");
		const recipeIngredients = recipe.ingredients;
		console.log("recipeIngredients:", recipeIngredients);

		for (let i = 0; i < recipeIngredients.length; i++) {
			const ingredient = recipeIngredients[i];
			const ingredientsDiv = document.createElement("div");
			ingredientsDiv.textContent = "hello";
			ingredientsContainer.appendChild(ingredientsDiv);
		}
		cardDescription.appendChild(recipeTitle);
		cardDescription.appendChild(recetteTitle);
		cardDescription.appendChild(recipeDescription);
		cardDescription.appendChild(ingredientsContainer);
		card.appendChild(imgCard);
		card.appendChild(cardDescription);
		cardsContainer.appendChild(card);
	}
}

displayRecipients();

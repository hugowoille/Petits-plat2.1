import recipes from "../data/recipes.js";

function displayRecipients(
	recipientsIds,
	containerId = "cards-container",
	inputValue
) {
	const cardsContainer = document.getElementById(containerId);
	cardsContainer.innerHTML = "";
	const filteredRecipients = recipes.filter((recipe) =>
		recipientsIds.includes(recipe.id)
	);

	const recipeNumberContainer = document.getElementById("recettes-number");
	recipeNumberContainer.textContent = `${filteredRecipients.length} recettes`;
	if (filteredRecipients.length === 0) {
		console.log("aucune recettes ne match !");
		alert(
			`Aucune recette ne contient ${inputValue} vous pouvez chercher « tarte aux pommes », « poisson » `
		);
	}
	for (let i = 0; i < filteredRecipients.length; i++) {
		const recipe = filteredRecipients[i];
		// card container
		const card = document.createElement("section");
		card.classList.add("card");
		// img
		const imgCard = document.createElement("img");
		imgCard.src = `./img/recettes/${recipe.image}`;
		// time of recipe
		const timeOfRecipe = document.createElement("div");
		timeOfRecipe.classList.add("time-recipe");
		timeOfRecipe.textContent = recipe.time + "min";
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
		// RECETTE
		const ingredientTitle = document.createElement("h3");
		ingredientTitle.textContent = "INGREDIENT";
		// Read more button
		const readMoreButton = document.createElement("button");
		readMoreButton.classList.add("readmore-button");
		readMoreButton.textContent = "Voir plus";
		let isReadMoreClicked = false;
		readMoreButton.addEventListener("click", function () {
			/* recipeDescription.style["-webkit-line-clamp"] = "unset"; */
			recipeDescription.style.transition = "all 0.4s";

			if (!isReadMoreClicked) {
				recipeDescription.style.maxHeight = "400px";
				readMoreButton.textContent = "Voir moins";
				isReadMoreClicked = true;
			} else if (isReadMoreClicked) {
				recipeDescription.style.maxHeight = "80px";
				readMoreButton.textContent = "Voir plus";
				isReadMoreClicked = false;
			}
		});

		// ingrédients container
		const ingredientsContainer = document.createElement("div");
		ingredientsContainer.classList.add("ingredients-container");
		const recipeIngredients = recipe.ingredients;

		for (let i = 0; i < recipeIngredients.length; i++) {
			const getIngredient = recipeIngredients[i];
			const ingredient = document.createElement("div");
			ingredient.classList.add("ingredient");
			const ingredientName = document.createElement("div");
			ingredientName.innerText = getIngredient.ingredient;
			ingredientName.classList.add("ingredient-name");
			const unitAndQuantity = document.createElement("div");
			unitAndQuantity.classList.add("quantity-unit");
			if (
				getIngredient.quantity === undefined &&
				getIngredient.unit === undefined
			) {
				unitAndQuantity.style.display = "none";
			} else if (getIngredient.unit === undefined) {
				unitAndQuantity.innerText = getIngredient.quantity;
			} else {
				unitAndQuantity.innerText =
					getIngredient.quantity + " " + getIngredient.unit;
			}
			ingredient.appendChild(ingredientName);
			ingredient.appendChild(unitAndQuantity);
			ingredientsContainer.appendChild(ingredient);
		}

		cardDescription.appendChild(recipeTitle);
		cardDescription.appendChild(recetteTitle);
		cardDescription.appendChild(recipeDescription);
		cardDescription.appendChild(readMoreButton);
		cardDescription.appendChild(ingredientTitle);
		cardDescription.appendChild(ingredientsContainer);
		card.appendChild(timeOfRecipe);
		card.appendChild(imgCard);
		card.appendChild(cardDescription);
		cardsContainer.appendChild(card);
	}
}

export default displayRecipients;

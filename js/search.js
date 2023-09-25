import recipes from "../data/recipes.js";

function sanitizeString(string) {
	const sanitizedString = string.toLowerCase();
	// + carac spéciaux
	return sanitizedString;
}

function doesRecipeMatch(inputValue, recipe) {
	if (
		inputValue?.length < 3 ||
		inputValue === undefined ||
		inputValue === null
	) {
		return true;
	}
	// sanitize avant de split
	const inputSplitedValue = inputValue.split(" ");
	const splitedDescription = recipe.description.split(" ");
	const splitedName = recipe.name.split(" ");
	const splitedIngredients = [];
	recipe.ingredients.forEach((item) => {
		splitedIngredients.push(...item.ingredient.split(" "));
	});

	for (let i = 0; i < inputSplitedValue.length; i++) {
		const sanitizedInputValue = sanitizeString(inputSplitedValue[i]);
		const inputValueLength = sanitizedInputValue.length;

		for (let d = 0; d < splitedDescription.length; d++) {
			const slicedDescription = sanitizeString(
				splitedDescription[d]
			).slice(0, inputValueLength);
			if (sanitizedInputValue === slicedDescription) {
				return true;
			}
		}
		for (let n = 0; n < splitedName.length; n++) {
			if (sanitizedInputValue === sanitizeString(splitedName[n])) {
				return true;
			}
		}
		for (let g = 0; g < splitedIngredients.length; g++) {
			if (sanitizedInputValue === sanitizeString(splitedIngredients[g])) {
				return true;
			}
		}
	}
	return false;
}

function getFilteredRecipients(inputValue, selectedTags = []) {
	const filteredRecipesIds = [];
	// creer un nouvelle liste de recettes filrté sur base des tags passés
	// getFilteredRecipesByTags(selectedTags)
	recipes.forEach((recipe) => {
		if (doesRecipeMatch(inputValue, recipe)) {
			filteredRecipesIds.push(recipe.id);
		}
	});
	return filteredRecipesIds;
}

function displayRecipients(recipientsIds, containerId = "cards-container") {
	const cardsContainer = document.getElementById(containerId);
	cardsContainer.innerHTML = "";
	const filteredRecipients = recipes.filter((recipe) =>
		recipientsIds.includes(recipe.id)
	);

	for (let i = 0; i < filteredRecipients.length; i++) {
		const recipe = filteredRecipients[i];
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
		// RECETTE
		const ingredientTitle = document.createElement("h3");
		ingredientTitle.textContent = "INGREDIENT";
		// Read more button
		const readMoreButton = document.createElement("button");
		readMoreButton.classList.add("readmore-button");
		readMoreButton.textContent = "Voir plus";
		readMoreButton.addEventListener("click", function () {
			recipeDescription.style["-webkit-line-clamp"] = "unset";
			readMoreButton.style.display = "none";
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
			if (getIngredient.unit === undefined) {
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
		card.appendChild(imgCard);
		card.appendChild(cardDescription);
		cardsContainer.appendChild(card);
	}
}

function filterAndDisplay(newSearchValue, selectedTags) {
	const filteredRecipientIds = getFilteredRecipients(
		newSearchValue,
		selectedTags
	);

	displayRecipients(filteredRecipientIds);
}

export default filterAndDisplay;

import recipes from "../data/recipes.js";
import displayRecipients from "./display_recipients.js";

function sanitizeString(string) {
	const sanitizedString = string.toLowerCase();
	// + carac spéciaux
	return sanitizedString;
}

function doesRecipeMatch(inputValue, recipe) {
	if (
		inputValue?.length <= 3 ||
		inputValue === undefined ||
		inputValue === null ||
		inputValue === ""
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

function filterAndDisplay(newSearchValue, selectedTags) {
	const filteredRecipientIds = getFilteredRecipients(
		newSearchValue,
		selectedTags
	);
	displayRecipients(filteredRecipientIds, "cards-container", newSearchValue);
}

export default filterAndDisplay;

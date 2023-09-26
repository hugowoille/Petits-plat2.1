function getIngredientsList(recipes) {
	const ingredientsList = [];
	for (let r = 0; r < recipes.length; r++) {
		const recipeIngredients = recipes[r].ingredients;
		for (let i = 0; i < recipeIngredients.length; i++) {
			const ingredient = recipeIngredients[i].ingredient;
			if (!ingredientsList.includes(ingredient)) {
				ingredientsList.push(ingredient);
			}
		}
	}
	return ingredientsList;
}

export default getIngredientsList;

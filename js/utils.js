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
function getAppliancesList(recipes) {
	const applianceList = [];
	for (let a = 0; a < recipes.length; a++) {
		const appliance = recipes[a].appliance;
		if (!applianceList.includes(appliance)) {
			applianceList.push(appliance);
		}
	}
	return applianceList;
}
function getUstensilsList(recipes) {
	const ustensilsList = [];
	for (let r = 0; r < recipes.length; r++) {
		const recipeUstensils = recipes[r].ustensils;
		for (let i = 0; i < recipeUstensils.length; i++) {
			const ustensil = recipeUstensils[i];
			if (!ustensilsList.includes(ustensil)) {
				ustensilsList.push(ustensil);
			}
		}
	}
	return ustensilsList;
}

export default {
	getIngredientsList,
	getAppliancesList,
	getUstensilsList,
};

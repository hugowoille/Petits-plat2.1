import recipes from "../data/recipes.js";

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
function getApplianceList(recipes) {
	const applianceList = [];
	for (let a = 0; a < recipes.length; a++) {
		const recipeAppliance = recipes[a];
		applianceList.push(recipeAppliance.appliance);
	}
	return applianceList;
}

console.log(getApplianceList(recipes));

export default getIngredientsList;

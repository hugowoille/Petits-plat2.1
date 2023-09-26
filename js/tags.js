import recipes from "../data/recipes.js";
import getIngredientsList from "./utils.js";

const ingredientsList = getIngredientsList(recipes);
const ingredientsContainer = document.getElementById("ingredients-tags");

for (let i = 0; i < ingredientsList.length; i++) {
	const ingredient = document.createElement("li");
	ingredient.textContent = ingredientsList[i];
	ingredientsContainer.appendChild(ingredient);
}

const cardsContainer = document.getElementById("cards-container");

const ingredientsSearchInput = document.getElementById(
	"ingredients_search-input"
);
const ingredientsTags = document.getElementById("ingredients-tags");
const ingredientBtn = document.getElementById("ingredients-btn");
ingredientBtn.addEventListener("click", showTags);

let isClicked = false;
function showTags() {
	if (!isClicked) {
		ingredientsSearchInput.style.display = "block";
		ingredientsTags.style.display = "block";
		cardsContainer.style.transition = "all 0.4s";
		cardsContainer.style.marginTop = "340px";
		isClicked = true;
	} else if (isClicked) {
		ingredientsSearchInput.style.display = "none";
		ingredientsTags.style.display = "none";
		cardsContainer.style.marginTop = "35px";
		isClicked = false;
	}
}

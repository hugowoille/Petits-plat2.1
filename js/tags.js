import recipes from "../data/recipes.js";
import getIngredientsList from "./utils.js";

const cardsContainer = document.getElementById("cards-container");

// Adding ingredientsList to ingredient container

const ingredientsList = getIngredientsList(recipes);
const ingredientsContainer = document.getElementById("ingredients-tags");
for (let i = 0; i < ingredientsList.length; i++) {
	const ingredient = document.createElement("li");
	ingredient.textContent = ingredientsList[i];
	ingredientsContainer.appendChild(ingredient);
}

const ingredientsTags = document.getElementById("ingredients-tags");
const ingredientsSearchInput = document.getElementById(
	"ingredients_search-input"
);
let isBtnIngredientClicked = true;

const ingredientBtn = document.getElementById("ingredients-btn");
ingredientBtn.addEventListener("click", function () {
	isBtnIngredientClicked = !isBtnIngredientClicked;

	showTags(ingredientsTags, ingredientsSearchInput, isBtnIngredientClicked);
});

// Appliance ->

let isBtnApplianceClicked = true;

const applianceTags = document.getElementById("appliance-tags");
const applianceSearchInput = document.getElementById("appliance_search-input");
const applianceBtn = document.getElementById("appliance-btn");
applianceBtn.addEventListener("click", function () {
	isBtnApplianceClicked = !isBtnApplianceClicked;
	showTags(applianceTags, applianceSearchInput, isBtnApplianceClicked);
});

function showTags(ulOfElement, searchBarOfElement, isClicked) {
	if (!isClicked) {
		ulOfElement.style.display = "block";
		searchBarOfElement.style.display = "block";
		cardsContainer.style.marginTop = "340px";
		isClicked = true;
	} else if (isClicked) {
		ulOfElement.style.display = "none";
		searchBarOfElement.style.display = "none";
		cardsContainer.style.marginTop = "35px";
		isClicked = false;
	}
}

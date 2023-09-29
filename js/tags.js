import recipes from "../data/recipes.js";
import utilsFunction from "./utils.js";

const cardsContainer = document.getElementById("cards-container");
// ingredients

const ingredientsContainer = document.getElementById("ingredients-tags");
const ingredientBtn = document.getElementById("ingredients-btn");
const ingredientsSearchForm = document.getElementById(
	"ingredients-search-form"
);

// Adding ingredientsList to ingredients container

const ingredientsList = utilsFunction.getIngredientsList(recipes);
for (let i = 0; i < ingredientsList.length; i++) {
	const ingredient = document.createElement("li");
	ingredient.textContent = ingredientsList[i];
	ingredientsContainer.appendChild(ingredient);
}

let isBtnIngredientClicked = false;
ingredientBtn.addEventListener("click", function () {
	showTags(
		ingredientsContainer,
		ingredientsSearchForm,
		isBtnIngredientClicked
	);
	isBtnIngredientClicked = !isBtnIngredientClicked;
	updateCardsContainerMargin();
});

// Appliances

const appliancesContainer = document.getElementById("appliance-tags");
const applianceSearchForm = document.getElementById("appliance-search-form");
const applianceBtn = document.getElementById("appliance-btn");

// Adding applianceList to appliances container

const appliancesList = utilsFunction.getAppliancesList(recipes);
for (let i = 0; i < appliancesList.length; i++) {
	const appliance = document.createElement("li");
	appliance.textContent = appliancesList[i];
	appliancesContainer.appendChild(appliance);
}

let isBtnApplianceClicked = false;
applianceBtn.addEventListener("click", function () {
	showTags(appliancesContainer, applianceSearchForm, isBtnApplianceClicked);
	isBtnApplianceClicked = !isBtnApplianceClicked;
	updateCardsContainerMargin();
});

// ustensils

const ustensilsContainer = document.getElementById("ustensils-tags");
const ustensilSearchForm = document.getElementById("ustensils-search-form");
const ustensilBtn = document.getElementById("ustensils-btn");

// adding ustensilsList to ustensils container

const ustensilsList = utilsFunction.getUstensilsList(recipes);
for (let i = 0; i < ustensilsList.length; i++) {
	const ustensil = document.createElement("li");
	ustensil.textContent = ustensilsList[i];
	ustensilsContainer.appendChild(ustensil);
}

let isBtnUstensilClicked = false;
ustensilBtn.addEventListener("click", function () {
	showTags(ustensilsContainer, ustensilSearchForm, isBtnUstensilClicked);
	isBtnUstensilClicked = !isBtnUstensilClicked;
	updateCardsContainerMargin();
});

function showTags(ulOfElement, searchBarOfElement, isClicked) {
	if (!isClicked) {
		ulOfElement.style.display = "block";
		searchBarOfElement.style.display = "block";
		isClicked = true;
	} else if (isClicked) {
		ulOfElement.style.display = "none";
		searchBarOfElement.style.display = "none";
		isClicked = false;
	}
}

function updateCardsContainerMargin() {
	if (
		isBtnIngredientClicked ||
		isBtnApplianceClicked ||
		isBtnUstensilClicked
	) {
		cardsContainer.style.marginTop = "340px";
	} else {
		cardsContainer.style.marginTop = "35px";
	}
}

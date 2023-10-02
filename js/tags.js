import recipes from "../data/recipes.js";
import utilsFunction from "./utils.js";

// ingredients
const ingredientsSection = document.getElementById("ingredients");
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
	let isIngredientClicked = false;
	const tagResetImg = document.createElement("img");
	ingredient.addEventListener("click", function () {
		if (!isIngredientClicked) {
			ingredient.classList.add("focus-li");
			tagResetImg.src = "../img/tag_reset.png";
			tagResetImg.addEventListener("click", function () {
				tagResetImg.style.display = "none";
				ingredient.classList.remove("focus-li");
			});
			ingredient.appendChild(tagResetImg);
			tagResetImg.style.display = "block";
			isIngredientClicked = true;
		} else if (
			isIngredientClicked &&
			tagResetImg.style.display === "none"
		) {
			isIngredientClicked = false;
		}
	});
}

let isBtnIngredientClicked = false;
ingredientBtn.addEventListener("click", function () {
	showTags(
		ingredientsContainer,
		ingredientsSearchForm,
		isBtnIngredientClicked,
		ingredientsSection
	);
	isBtnIngredientClicked = !isBtnIngredientClicked;
});

// reset ingredients tags input

const resetIngredientsInputBtn = document.getElementById(
	"reset-ingredients-input"
);
const ingredientsSearchInput = document.getElementById(
	"ingredients_search-input"
);

resetIngredientsInputBtn.addEventListener("click", function () {
	resetSearchTagsInput(ingredientsSearchInput);
});

// Appliances

const appliancesSection = document.getElementById("appliance");
const appliancesContainer = document.getElementById("appliance-tags");
const applianceSearchForm = document.getElementById("appliance-search-form");
const applianceBtn = document.getElementById("appliance-btn");

// Adding applianceList to appliances container

const appliancesList = utilsFunction.getAppliancesList(recipes);
for (let i = 0; i < appliancesList.length; i++) {
	const appliance = document.createElement("li");
	appliance.textContent = appliancesList[i];
	appliancesContainer.appendChild(appliance);
	let isApplianceClicked = false;
	const tagResetImg = document.createElement("img");
	appliance.addEventListener("click", function () {
		if (!isApplianceClicked) {
			appliance.classList.add("focus-li");
			tagResetImg.src = "../img/tag_reset.png";
			tagResetImg.addEventListener("click", function () {
				tagResetImg.style.display = "none";
				appliance.classList.remove("focus-li");
			});
			appliance.appendChild(tagResetImg);
			tagResetImg.style.display = "block";
			isApplianceClicked = true;
		} else if (isApplianceClicked && tagResetImg.style.display === "none") {
			isApplianceClicked = false;
		}
	});
}

let isBtnApplianceClicked = false;
applianceBtn.addEventListener("click", function () {
	showTags(
		appliancesContainer,
		applianceSearchForm,
		isBtnApplianceClicked,
		appliancesSection
	);
	isBtnApplianceClicked = !isBtnApplianceClicked;
});

// reset appliances tags input

const resetApplianceInputBtn = document.getElementById(
	"reset-appliances-input"
);
const appliancesSearchInput = document.getElementById(
	"appliances_search-input"
);

resetApplianceInputBtn.addEventListener("click", function () {
	resetSearchTagsInput(appliancesSearchInput);
});

// ustensils

const ustensilsSection = document.getElementById("ustensils");
const ustensilsContainer = document.getElementById("ustensils-tags");
const ustensilSearchForm = document.getElementById("ustensils-search-form");
const ustensilBtn = document.getElementById("ustensils-btn");

// adding ustensilsList to ustensils container

const ustensilsList = utilsFunction.getUstensilsList(recipes);
for (let i = 0; i < ustensilsList.length; i++) {
	const ustensil = document.createElement("li");
	ustensil.textContent = ustensilsList[i];
	ustensilsContainer.appendChild(ustensil);

	let isUstensilClicked = false;
	const tagResetImg = document.createElement("img");
	ustensil.addEventListener("click", function () {
		if (!isUstensilClicked) {
			ustensil.classList.add("focus-li");
			tagResetImg.src = "../img/tag_reset.png";
			tagResetImg.addEventListener("click", function () {
				tagResetImg.style.display = "none";
				ustensil.classList.remove("focus-li");
			});
			ustensil.appendChild(tagResetImg);
			tagResetImg.style.display = "block";
			isUstensilClicked = true;
		} else if (isUstensilClicked && tagResetImg.style.display === "none") {
			isUstensilClicked = false;
		}
	});
}

let isBtnUstensilClicked = false;
ustensilBtn.addEventListener("click", function () {
	showTags(
		ustensilsContainer,
		ustensilSearchForm,
		isBtnUstensilClicked,
		ustensilsSection
	);
	isBtnUstensilClicked = !isBtnUstensilClicked;
});

// reset ustensils tags input

const resetUstensilsInputBtn = document.getElementById("reset-ustensils-input");
const ustensilSearchInput = document.getElementById("ustensils_search-input");

resetUstensilsInputBtn.addEventListener("click", function () {
	resetSearchTagsInput(ustensilSearchInput);
});

function onFocusTagsEffect(tag, isTagClicked, resetImg) {
	if (!isTagClicked) {
		tag.classList.add("focus-li");
		resetImg.src = "../img/tag_reset.png";
		resetImg.addEventListener("click", function () {
			resetImg.style.display = "none";
			tag.classList.remove("focus-li");
		});
		tag.appendChild(resetImg);
		resetImg.style.display = "block";
		isTagClicked = true;
	} else if (isTagClicked && resetImg.style.display === "none") {
		isTagClicked = false;
	}
}

function showTags(ulOfElement, searchBarOfElement, isClicked, tagsSection) {
	if (!isClicked) {
		ulOfElement.style.display = "block";
		searchBarOfElement.style.display = "block";
		tagsSection.style.height = "342px";
		isClicked = true;
	} else if (isClicked) {
		ulOfElement.style.display = "none";
		searchBarOfElement.style.display = "none";
		isClicked = false;
		tagsSection.style.height = "48px";
	}
}

function resetSearchTagsInput(input) {
	input.value = "";
}

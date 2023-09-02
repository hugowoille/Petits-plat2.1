const ingredientsSearchInput = document.getElementById(
	"ingredients_search-input"
);
const ingredientsTags = document.getElementById("ingredients-tags");
const ingredientBtn = document.getElementById("ingredients-btn");

const appareilsSearchInput = document.getElementById("appareils_search-input");
const appareilsTags = document.getElementById("appareils-tags");
const appareilsBtn = document.getElementById("appareils-btn");

const ustensilesSearchInput = document.getElementById(
	"ustensiles_search-input"
);
const ustensilesTags = document.getElementById("ustensiles-tags");
const ustensilesBtn = document.getElementById("ustensiles-btn");

ingredientBtn.addEventListener("click", showTags);
appareilsBtn.addEventListener("click", showTags);
ustensilesBtn.addEventListener("click", showTags);

let isClicked = false;
function showTags() {
	if (!isClicked) {
		ingredientsSearchInput.style.display = "block";
		ingredientsTags.style.display = "block";

		isClicked = true;
	} else if (isClicked) {
		ingredientsSearchInput.style.display = "none";
		ingredientsTags.style.display = "none";

		isClicked = false;
	}
}

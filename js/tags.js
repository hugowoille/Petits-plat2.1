const ingredientsSearchInput = document.getElementById(
	"ingredients_search-input"
);
const ingredientsTags = document.getElementById("ingredients-tags");
const ingredientBtn = document.getElementById("ingredients-btn");

ingredientBtn.addEventListener("click", showTags);
let isClicked = false;
function showTags() {
	isClicked = true;
	if (isClicked) {
		ingredientsSearchInput.style.display = "block";
		ingredientsTags.style.display = "block";
	} else {
		ingredientsSearchInput.style.display = "none";
		ingredientsTags.style.display = "none";
	}
}

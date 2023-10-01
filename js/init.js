import recipes from "../data/recipes.js";
import filterAndDisplay from "./search.js";

function init() {
	const searchBar = document.getElementById("search-bar");
	const selectedTags = [];
	filterAndDisplay();

	onSearchChange(searchBar, selectedTags);
}

init();

function onSearchChange(searchBar, selectedTags) {
	searchBar.addEventListener("input", (event) => {
		if (event.target.textLength >= 3) {
			const searchBarValue = document.getElementById("search-bar").value;
			filterAndDisplay(searchBarValue, selectedTags);
		}
	});
}

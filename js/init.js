import recipes from "../data/recipes.js";
import filterAndDisplay from "./search.js";
console.log(recipes);

function onSearchChange() {
	filterAndDisplay();
}

function init() {
	filterAndDisplay();
}

init();

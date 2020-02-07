const db = require("../data/db-config.js");

function getRecipes() {
    return db("Recipes");
}

function getShoppingList(id) {
    return db("Ingredient")
}

function getInstructions(id) {
    return db("Recipes as r")
}
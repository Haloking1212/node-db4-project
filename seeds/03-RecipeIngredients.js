
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('RecipeIngredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('RecipeIngredient').insert([
        { RecipieId: 1, IngredientId: 1, Quanity: "1b Ground Beef" }
      ]);
    });
};

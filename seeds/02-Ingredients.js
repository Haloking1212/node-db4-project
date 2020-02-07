
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredient').insert([
        { IngredientName: 'Beef patty', Mesurement: 'Ground Beef'  }
      ]);
    });
};

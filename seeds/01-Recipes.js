
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { RecipeName: "Mc CrackBurger", Instructions: "Cook da Bugah"}
      ]);
    });
};

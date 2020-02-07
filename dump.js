
exports.up = function(knex) {
    return knex.schema.createTable('Recipes', tbl => {
      tbl.increments()
      tbl.string('RecipeName').notNullable()
      tbl.text('Instructions').notNullable()
    })
    .createTable('Ingredient', tbl => {
      tbl.increments()
      tbl.string('IngredientName').notNullable()
      tbl.string('Mesurement').notNullable()
    })
    .createTable('RecipeIngredient', tbl => {
      tbl.increments()
      tbl.integer('RecipieId')
          .unsigned()
          .references('id')
          .inTable('Recipes')
      tbl.integer('IngredientId')
          .unsigned()
          .references('id')
          .inTable('Ingredients')
      tbl.string('Quanity').notNullable()
    })
  };
  
  exports.down = function(knex) {
    knex.schema
      .dropTableIfExists('RecipeIngredient')
      .dropTableIfExists('Ingredient')
      .dropTableIfExists('Recipes')
  };
  
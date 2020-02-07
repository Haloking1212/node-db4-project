const cleaner = require('knex-cleaner')


exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode:'truncate',
    ingoreTables:['knex_migrations', 'knex_migration_lock'],
  })
};

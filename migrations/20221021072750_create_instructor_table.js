/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('instructor').then(exists => {
        if (!exists) {
            return knex.schema.createTable('instructor' , table => {
                table.increments('id').primary().notNullable() ;
                table.string('first_name').notNullable() ;
                table.string('last_name') ;
                table.string('email').notNullable() ;
                table.string('phone_number') ;
                table.string('linkedin') ;
            }) ;
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('instructor').then(exists => {
        if (exists) {
            return knex.schema.dropTable('instructor') ;
        }
    }) ;
};

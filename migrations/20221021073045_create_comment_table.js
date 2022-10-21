/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {   
    return knex.schema.hasTable('comment').then(exists => {
        if (!exists) {
            return knex.schema.createTable('comment' , table => {
                table.increments('id').primary().notNullable() ;
                table.integer('instructor_id').unsigned() ;
                table.integer('application_id').unsigned() ;
                table.text('message').notNullable() ;
                table.foreign('instructor_id').references('id').inTable('instructor').onDelete('CASCADE') ;
                table.foreign('application_id').references('id').inTable('application').onDelete('CASCADE') ;
            }) ;
        }
    }) ;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('comment').then(exists => {
        if (exists) {
            return knex.schema.dropTable('comment') ;
        }
    })
};

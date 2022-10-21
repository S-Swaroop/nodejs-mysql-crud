/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {   
    return knex.schema.hasTable('course').then(exists => {
        if (!exists) {
            return knex.schema.createTable('course' , table => {
                table.increments('id').primary().notNullable() ;
                table.string('name').notNullable() ;
                table.integer('max_seats').defaultTo(100) ;
                table.date('start_date').notNullable().defaultTo(knex.raw('(CURRENT_DATE())')) ;
                table.integer('instructor_id').unsigned() ;
                table.foreign('instructor_id').references('id').inTable('instructor').onDelete('CASCADE') ;
            }) ;
        }
    }) ;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('course').then(exists => {
        if (exists) {
            return knex.schema.dropTable('course') ;
        }
    })
};

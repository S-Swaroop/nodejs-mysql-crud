/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async knex => {   
    return knex.schema.hasTable('application').then(exists => {
        if (!exists) {
            return knex.schema.createTable('application' , table => {
                table.increments('id').primary().notNullable() ;
                table.string('first_name').notNullable() ;
                table.string('last_name') ;
                table.string('email').notNullable() ;
                table.string('phone_number').notNullable() ;
                table.string('linkedin') ;
                table.date('application_date').notNullable().defaultTo(knex.raw('(CURRENT_DATE())')) ;
                table.integer('course_id').unsigned() ;
                table.foreign('course_id').references('id').inTable('course').onDelete('CASCADE') ;
            }) ;
        }
    }) ;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
    return knex.schema.hasTable('application').then(exists => {
        if (exists) {
            return knex.schema.dropTable('application') ;
        }
    })
};

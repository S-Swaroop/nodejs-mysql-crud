// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: process.env.USER, // replace with your mysql username
            password: process.env.PASSWORD, // replace with your mysql password
            database: process.env.DATABASE
        },
        // debug: true
    }
} ;

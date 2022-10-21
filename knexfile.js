require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mysql2" ,
        connection: {
            host: "127.0.0.1" ,
            user: process.env.USER ,
            password: process.env.PASSWORD ,
            database: process.env.DATABASE ,
        } ,
        debug: true
    } ,
} ;

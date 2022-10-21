const { Model } = require('objection') ;

class Application extends Model {

    static tableName = "application" ;

    static get tableName () {
        return this.tableName ;
    }

    static get idColumn () {
        return 'id' ;
    }
}

module.exports = Application ;
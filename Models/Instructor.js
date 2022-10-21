const { Model } = require('objection') ;

class Instructor extends Model {
    static get tableName () {
        return 'instructor' ;
    }

    static get idColumn () {
        return 'id' ;
    }

    static getRelations () {
        
    }
}
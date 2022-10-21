const { Model } = require('objection') ;

class Instructor extends Model {

    static tableName = "instructor" ;

    static get tableName () {
        return this.tableName ;
    }

    static get idColumn () {
        return 'id' ;
    }
}

module.exports = Instructor ;
const { Model } = require('objection') ;

class Course extends Model {

    static tableName = "course" ;

    static get tableName () {
        return this.tableName ;
    }

    static get idColumn () {
        return 'id' ;
    }
}

module.exports = Course ;
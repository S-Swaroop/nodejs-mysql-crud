const { Model } = require('objection') ;

class Comment extends Model {

    static tableName = "comment" ;

    static get tableName () {
        return this.tableName ;
    }

    static get idColumn () {
        return 'id' ;
    }
}

module.exports = Course ;
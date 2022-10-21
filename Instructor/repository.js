const Instructor = require('../Models/Instructor') ;

const fetchAll = async () => {
    try {
        const instructors = await Instructor.query() ;
        if (instructors[0] instanceof Instructor) {
            return instructors ;
        } else {
            throw {
                status : 404 , 
                message : "No instructors"
            }
        }
    } catch (error) {
        console.log(`@Instructors/repository || ` , error) ;
        throw error ;
    }
}

module.exports = {
    fetchAll
}
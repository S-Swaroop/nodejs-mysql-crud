const Comment = require('../Models/Comment') ;
const Application = require('../Models/Application') ;

const fetchAll = async () => {
    try {
        const comments = await Comment.query() ;
        if (comments[0] instanceof Comment) {
            return comments ;
        } else {
            throw {
                status : 404 , 
                message : "No comments"
            }
        }
    } catch (error) {
        console.log(`@Comments/repository || ` , error) ;
        throw error ;
    }
}

const insert = async (data) => {
    try {
        const comments = Comment.query()
            .where('instructor_id' , '=' , data.instructor_id)
            .where('application_id' , '=' , data.application_id) 
            .where('message' , '=' , data.message) ;

        if (comments[0] instanceof Comment) {
            throw {
                status : 409 , 
                message : 'Comment already exists'
            }
        } else {
            const applicationXcourse = await Application.query()
                .select('course.instructor_id')
                .join('course' , 'course.id' , 'application.course_id')
                .where('application.id' , '=' , data.application_id) ;

            if (applicationXcourse[0].instructor_id != data.instructor_id) {
                throw {
                    status : 409 , 
                    message : "Instructor unauthorized" ,
                } ;
            }

            const newComment = await Comment.query().insert({
                instructor_id : data.instructor_id , 
                application_id : data.application_id , 
                message : data.message 
            }) ;

            return newComment ;
        }

    } catch (error) {
        console.log(`@Courses/repository || ` , error) ;
        throw error ;
    }
};

module.exports = {
    fetchAll , 
    insert 
}
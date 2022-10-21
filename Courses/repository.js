const Course = require('../Models/Course') ;

const fetchById = async (courseId) => {
    try {
        const course = await Course.query().findById(courseId) ;
        if (course instanceof Course) {
            return course ;
        } else {
            throw {
                status : 404 , 
                message : `No such course with id:${courseId}`
            }
        }
    } catch (error) {
        console.log(`@Courses/repository || ` , error) ;
        throw error ;
    }
}

const fetchAll = async () => {
    try {
        const courses = await Course.query() ;
        if (courses[0] instanceof Course) {
            return courses ;
        } else {
            throw {
                status : 404 , 
                message : "No courses"
            }
        }
    } catch (error) {
        console.log(`@Courses/repository || ` , error) ;
        throw error ;
    }
}

const updateById = async (id , data) => {
    try {
        const updatedCourse = await Course.query().patchAndFetchById(id , data) ; 
        if (updatedCourse instanceof Course) {
            return updatedCourse ;
        } else {
            throw {
                status : 404 , 
                message : `No such course with id:${courseId}`
            }
        }
    } catch (error) {
        console.log(`@Courses/repository || ` , error) ;
        throw error ;
    }
}

const insert = async (data) => {
    try {
        const course = Course.query()
            .where('name' , '=' , data.name)
            .where('start_date' , '=' , data.start_date) 
            .where('max_seats' , '=' , data.max_seats)
            .where('instructor_id' , '=' , data.instructor_id) ;
        if (course[0] instanceof Course) {
            throw {
                status : 409 , 
                message : 'Course already exists'
            }
        } else {
            const newCourse = await Course.query().insert({
                name: data.name , 
                start_date : data.start_date , 
                max_seats : data.max_seats , 
                instructor_id : data.instructor_id 
            }) ;

            return newCourse ;
        }
    } catch (error) {
        console.log(`@Courses/repository || ` , error) ;
        throw error ;
    }
}

module.exports = {
    fetchAll , 
    fetchById , 
    updateById , 
    insert
}
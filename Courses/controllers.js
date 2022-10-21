const {
    fetchAll , 
    fetchById , 
    updateById , 
    insert
} = require('./repository') ;


const getAllCourses = async (req , res) => {
    try {
        const allCourses = await fetchAll() ;
        res.status(200).json({
            status : "OK" , 
            data : {
                courses : allCourses
            }
        }) ;
    } catch (error) {
        res.status(error?.status || 500).json({ 
            status : "FAILED", 
            data : { 
                error : error?.message || error 
            } 
        }) ;
    } 
}

const getCourseById = async (req , res) => {
    const { courseId } = req.params ;

    try {
        const course = await fetchById(courseId) ;
        res.status(200).json({
            status : "OK" , 
            data : {
                course : course
            }
        }) ;
    } catch (error) {
        res.status(error?.status || 500).json({ 
            status : "FAILED", 
            data : { 
                error : error?.message || error 
            } 
        }) ;
    } 
}

const updateCourse = async (req , res) => {
    const courseId = req.params ;
    const { data } = req.body ;

    if (!data) {
        res.status(400).json({
            status : "FAILED" ,
            data : {
                error : "One of the following keys is missing or is empty in request body: 'data'"
            }
        }) ;
    }

    try {

        const updatedCourse = await updateById(id , data) ;

        res.status(201).json({
            status : "OK" , 
            data : {
                updatedCourse 
            }
        })
    } catch (error) {
        res.status(error?.status || 500).json({ 
            status : "FAILED", 
            data : { 
                error : error?.message || error 
            } 
        }) ;
    }
}

const createCourse = async (req , res) => {

    const {
        name , 
        max_seats , 
        start_date , 
        instructor_id
    } = req.body ;

    if (!name || !max_seats || !start_date || !instructor_id) {
        res.status(400).json({
            status : "FAILED" ,
            data : {
                error : "One of the following keys is missing or is empty in request body: 'name', 'max_seats', 'start_date', 'instructor_id'"
            }
        }) ;
    }

    try {

        const newCourse = await insert(data) ;

        res.status(201).json({
            status : "OK" , 
            data : {
                message : "Course created successfully" , 
                course : newCourse
            }
        }) ;
    } catch (error) {
        res.status(error?.status || 500).json({ 
            status : "FAILED", 
            data : { 
                error : error?.message || error 
            } 
        }) ;
    }
};

module.exports = {
    getAllCourses , 
    getCourseById , 
    updateCourse , 
    createCourse
}
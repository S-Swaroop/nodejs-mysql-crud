const {
    getAllCourses , 
    getCourseById , 
    createCourse , 
    updateCourse
} = require('./controllers') ;
const express = require('express') ;

const router = express.Router() ; 

router.get('/:courseId' , getCourseById) ;

router.get('/' , getAllCourses) ;

router.post('/' , createCourse) ; 

router.patch('/:courseId' , updateCourse) ;

module.exports = router ;
const express = require('express') ;
const cors = require('cors') ;
const { Model } = require('objection') ;
const Knex = require('knex');
const dbConfig = require('./knexfile').development ;
const courseRouter = require('./Courses/routes') ;
const ApplicationRouter = require('./Application/routes') ;
const instructorRouter = require('./Instructor/routes') ;
const commentRouter = require('./Comment/routes') ;
require('dotenv').config() ;
//--------------DB connection and config-----------------------//
const knex = Knex(dbConfig) ;

Model.knex(knex) ;
//------------------------------------------------------------//

const PORT = process.env.PORT || 8000 ;

const app = express() ;

app.use(cors()) ;

app.use(express.json())

//--------------ROUTES---------------//
app.use('/course' , courseRouter) ; 

app.use('/application' , ApplicationRouter) ;

app.use('/instructor' , instructorRouter) ;

app.use('/comment' , commentRouter) ;
//---------------------------------//

app.get("/" , (req , res) => {
    res.json({
        message : {
            description: "All supported endpoints : " , 
            api: `http://localhost:${PORT}` ,
            "/application": {
                "/" : {
                    GET: "gets all applications" , 
                    POST: "creates applications"
                },
                "/:id" : {
                    GET: "gets application by id" , 
                    POST: "updates application status"
                },
                "/search?name=<name>&email=<email>" : {
                    GET: "get applications filtered according to query params"
                }
            } , 
            "/comment": {
                "/": {
                    GET: "gets all comments", 
                    POST: "adds comment"
                }
            },
            "/instructor": {
                "/" : {
                    GET: "gets all instructors" 
                }
            },
            "/course": {
                "/" : {
                    GET: "gets all courses" ,
                    POST: "create course" 
                } ,
                "/:id" : {
                    GET: "get course by id", 
                    POST: "update course by id"
                }
            }
        }
    })
}) ;

app.listen(PORT , () => {
    console.log(`Server listening to port : ${PORT}`)
}) ;

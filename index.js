const express = require('express') ;
const cors = require('cors') ;
const { Model } = require('objection') ;
const Knex = require('knex');
const dbConfig = require('./knexfile').development ;
const courseRouter = require('./Courses/routes') ;
const ApplicationRouter = require('./Application/routes') ;
const instructorRouter = require('./Instructor/routes') ;
const commentRouter = require('./Comment/routes') ;

const app = express() ;

const knex = Knex(dbConfig) ;

Model.knex(knex) ;

app.use(cors()) ;

app.use(express.json())

app.use('/course' , courseRouter) ; 

app.use('/application' , ApplicationRouter) ;

app.use('/instructor' , instructorRouter) ;

app.use('/comment' , commentRouter) ;

app.get("/" , (req , res) => {
    res.json({
        message : "Hi there!"
    })
}) ;

app.listen(8000) ;

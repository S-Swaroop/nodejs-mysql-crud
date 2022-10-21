const express = require('express') ;
const cors = require('cors') ;
const { default: knex } = require('knex');
const dbConfig = require('./knexfile').development ;


const app = express() ;

app.use(cors) ;

const db = knex(dbConfig) ;

app.get("/" , (req , res) => {
    res.send('connected to db') ;
})

app.listen(8000) ;
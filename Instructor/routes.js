const {
    getAllInstructors
} = require('./controllers') ;

const { Router } = require('express') ;

const router = Router() ;

router.get('/' , getAllInstructors) ; 

module.exports = router ;
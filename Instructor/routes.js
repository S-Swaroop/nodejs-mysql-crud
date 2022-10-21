const {
    getAllInstructors
} = require('./controllers') ;

const { Router } = require('express') ;

const router = Router() ;

router.get('/' , getAllInstructors) ; 

// router.get('/:applicationId' , getApplicationById) ;

// router.patch('/:applicationId' , updateApplication) ;

// router.post('/register' , createApplication) ;

module.exports = router ;
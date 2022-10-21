const {
    getAllApplications , 
    getApplicationById , 
    updateApplication , 
    createApplication
} = require('./controllers') ;

const { Router } = require('express') ;

const router = Router() ;

router.get('/' , getAllApplications) ; 

router.get('/:applicationId' , getApplicationById) ;

router.patch('/:applicationId' , updateApplication) ;

router.post('/register' , createApplication) ;

module.exports = router ;
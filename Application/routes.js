const {
    getAllApplications , 
    getApplicationById , 
    updateApplication , 
    createApplication,
    getAllApplicationsByFilters
} = require('./controllers') ;

const { Router } = require('express') ;

const router = Router() ;


// router.get('/' , getAllApplications) ; 

router.get('/:applicationId' , getApplicationById) ;

router.patch('/:applicationId' , updateApplication) ;

router.get('/' , getAllApplicationsByFilters) ;

router.post('/register' , createApplication) ;

module.exports = router ;

const {
    getAllApplications , 
    getApplicationById , 
    updateApplication , 
    createApplication,
    getAllApplicationsByFilters
} = require('./controllers') ;

const { Router } = require('express') ;

const router = Router() ;


router.get('/search' , getAllApplicationsByFilters) ;

router.get('/:applicationId' , getApplicationById) ;

router.patch('/:applicationId' , updateApplication) ;

router.post('/register' , createApplication) ;

router.get('/' , getAllApplications) ; 

module.exports = router ;

const { Router } = require('express') ;
const { getAllComments , createComment } = require('./controllers') ;

const router = Router() ;

router.get('/' , getAllComments) ;

router.post('/' , createComment) ;

module.exports = router ;
const {
    fetchAll , 
    insert
} = require('./repository') ;


const getAllComments = async (req , res) => {
    try {
        const allComments = await fetchAll() ;
        res.status(200).json({
            status : "OK" , 
            data : {
                comments : allComments
            }
        }) ;
    } catch (error) {
        res.status(error?.status || 500).json({ 
            status : "FAILED", 
            data : { 
                error : error?.message || error 
            } 
        }) ;
    } 
}

const createComment = async (req , res) => {
    const {
        instructor_id , 
        application_id , 
        message
    } = req.body ;

    if (!instructor_id || !application_id || !message) {
        res.status(400).json({
            status : "FAILED" ,
            data : {
                error : "One of the following keys is missing or is empty in request body: 'instructor_id', 'application_id', 'message'"
            }
        }) ;
    }

    try {
        const newComment = await insert({ instructor_id , application_id , message }) ;
        res.status(201).json({
            status : "OK" , 
            data : {
                message : "Comment created successfully" , 
                comment : newComment
            }
        }) ;
    } catch (error) {
        res.status(error?.status || 500).json({ 
            status : "FAILED", 
            data : { 
                error : error?.message || error 
            } 
        }) ;
    }
}

module.exports = {
    getAllComments , 
    createComment
}
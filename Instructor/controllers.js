const { fetchAll } = require('./repository') ;

const getAllInstructors = async (req , res) => {
    try {
        const allInstructors = await fetchAll() ;
        res.status(200).json({
            status : "OK" , 
            data : {
                instructors : allInstructors
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
    getAllInstructors
}
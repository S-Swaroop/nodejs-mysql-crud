const {
    insert , 
    updateById , 
    fetchAll , 
    fetchById
} = require('./repository') ;


const getAllApplications = async (req , res) => {
    try {
        const allApplications = await fetchAll() ;
        res.status(200).json({
            status : "OK" , 
            data : {
                applications : allApplications
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

const getApplicationById = async (req , res) => {
    const { applicationId } = req.params ;

    try {
        const application = await fetchById(applicationId) ;
        res.status(200).json({
            status : "OK" , 
            data : {
                application : application
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

const updateApplication = async (req , res) => {
    const applicationId = req.params ;
    const { data } = req.body ;

    if (!data) {
        res.status(400).json({
            status : "FAILED" ,
            data : {
                error : "One of the following keys is missing or is empty in request body: 'data'"
            }
        }) ;
    }

    try {

        const updatedApplication = await updateById(applicationId , data) ;

        res.status(201).json({
            status : "OK" , 
            data : {
                application : updatedApplication 
            }
        })
    } catch (error) {
        res.status(error?.status || 500).json({ 
            status : "FAILED", 
            data : { 
                error : error?.message || error 
            } 
        }) ;
    }
}

const createApplication = async (req , res) => {

    const {
        name , 
        email , 
        phone_number , 
        linkedin , 
        course_id
    } = req.body ;

    if (!name || !email || !phone_number || !linkedin || !course_id) {
        res.status(400).json({
            status : "FAILED" ,
            data : {
                error : "One of the following keys is missing or is empty in request body: 'name', 'email', 'phone_number', 'linkedin' , 'course_id'"
            }
        }) ;
    }

    try {

        const newApplication = await insert(data) ;

        res.status(201).json({
            status : "OK" , 
            data : {
                message : "Course created successfully" , 
                application : newApplication
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
};

module.exports = {
    getAllApplications , 
    getApplicationById , 
    updateApplication , 
    createApplication
}
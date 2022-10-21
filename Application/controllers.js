const {
    insert , 
    updateById , 
    fetchAll , 
    fetchById ,
    fetchByFilters
} = require('./repository') ;

const getAllApplicationsByFilters = async (req , res) => {
    const { name , email } = req.query ;

    const filters = {
        name : name || '' ,
        email : email || '' 
    }

    try {
        const filteredApplications = await fetchByFilters(filters) ;
        res.status(200).json({
            status : "OK" , 
            data : {
                applications : filteredApplications
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
    const { applicationId } = req.params ;
    const { data } = req.body ;

    if (!data.status) {
        return res.status(400).json({
            status : "FAILED" ,
            data : {
                error : "One of the following keys is missing or is empty in request body: 'data'"
            }
        }) ;
    }

    try {

        const updatedApplication = await updateById(parseInt(applicationId) , data) ;

        return res.status(201).json({
            status : "OK" , 
            data : {
                application : updatedApplication 
            }
        })
    } catch (error) {
        return res.status(error?.status || 500).json({ 
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

        const newApplication = await insert({ name , email , phone_number , linkedin , course_id }) ;

        res.status(201).json({
            status : "OK" , 
            data : {
                message : "Application/Lead created successfully" , 
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
    createApplication ,
    getAllApplicationsByFilters
}
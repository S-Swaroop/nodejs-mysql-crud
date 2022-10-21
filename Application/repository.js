const Application = require('../Models/Application') ;

const fetchById = async (applicationId) => {
    try {
        const application = await Application.query().findById(applicationId) ;
        if (application instanceof Application) {
            return application ;
        } else {
            throw {
                status : 404 , 
                message : `No such application with id:${applicationId}`
            }
        }
    } catch (error) {
        console.log(`@Applications/repository || ` , error) ;
        throw error ;
    }
}

const fetchAll = async () => {
    try {
        const applications = await Application.query() ;
        if (applications[0] instanceof Application) {
            return applications ;
        } else {
            throw {
                status : 404 , 
                message : "No applications"
            }
        }
    } catch (error) {
        console.log(`@Applications/repository || ` , error) ;
        throw error ;
    }
}

const updateById = async (id , data) => {
    try {
        
        const updatedApplication = await Application.query().patchAndFetchById(id , data) ; 
        
        if (updatedApplication instanceof Application) {
            
            return updatedApplication ;

        } else {
            
            throw {
                status : 404 , 
                message : `No such application with id:${id}`
            }
        
        }
    } catch (error) {
        console.log(`@Applications/repository || ` , error) ;
        throw error ;
    }
}

const insert = async (data) => {
    try {
        const application = Application.query()
            .where('name' , '=' , data.name) 
            .where('email' , '=' , data.email) 
            .where('phone_number' , '=' , data.phone_number)
            .where('linkedin' , '=' , data.linkedin)
            .where('course_id' , '=' , data.course_id) ;

        if (application[0] instanceof Application) {
            throw {
                status : 409 , 
                message : 'Application already exists'
            }
        } else {
            const newApplication = await Application.query().insert(data) ;

            return newApplication ;
        }
    } catch (error) {
        console.log(`@Applications/repository || ` , error) ;
        throw error ;
    }
}

module.exports = {
    fetchAll , 
    fetchById , 
    updateById , 
    insert
}
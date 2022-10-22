/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async knex => {
    try {
        //adding instructors
        await knex('instructor').del() ;
        await knex('instructor').insert([
            {
                first_name: "John" ,
                last_name: "Doe" , 
                email: "abc@gmail.com" , 
                phone_number: "9999999999" ,
                linkedin: "https://linkedin.com/in/john-doe"
            } ,
            {
                first_name: "Alex" ,
                last_name: "Hales" , 
                email: "def@gmail.com" , 
                phone_number: "8999999999" ,
                linkedin: "https://linkedin.com/in/alex-hales"
            } ,
            {
                first_name: "Will" ,
                last_name: "Smith" , 
                email: "smith@gmail.com" , 
                phone_number: "7999999999" ,
                linkedin: "https://linkedin.com/in/will-smith"
            } ,
        ]);

        // adding some courses
        await knex('course').del() ;
        await knex('course').insert([
            {
                name: "C++ BootCamp" , 
                max_seats: 50 ,
                start_date: "2022-11-22" ,
                instructor_id: 2
            },
            {
                name: "JavaScript BootCamp" , 
                max_seats: 70 ,
                start_date: "2022-12-22" ,
                instructor_id: 1
            }
        ]) ; 

        // adding some applications
        await knex('application').del() ; 
        await knex('application').insert([
            {
                name: "Sharan Swaroop" ,
                email: "sharan.swaroop17@gmail.com" , 
                phone_number: "7997787897" ,
                linkedin: "https://linkedin.com/in/sharan-swaroop" ,
                course_id: 2
            }, 
            {
                name: "Thomas Edison" ,
                email: "edisonthomas@gmail.com" , 
                phone_number: "7997997897" ,
                linkedin: "https://linkedin.com/in/thomas-edison" ,
                course_id: 1
            }
        ]) ;

        //adding a few comments
        await knex('comment').del() ;
        await knex('comment').insert([
            {
                instructor_id: 1 ,
                application_id: 1 ,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            },
            {
                instructor_id: 2 ,
                application_id: 2 ,
                message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
        ]) ;
    } catch (error) {
        console.log(error.message) ;
    }
};

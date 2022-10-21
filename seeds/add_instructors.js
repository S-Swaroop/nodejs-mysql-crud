/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async knex => {
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
};

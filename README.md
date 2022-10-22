# CRUD API
---
A RESTful web application where user can create, read, update and delete resources and search them by name and email, built using Nodejs, Express and MySQL stack.

# Installation & Run
---
### Step : 1 | Clone this project using Git
* Open the command prompt/terminal and enter the following command
```shell
git clone https://github.com/S-Swaroop/nodejs-mysql-crud.git
```


### Step : 2 | Change the current directory to project directory and install dependencies
```
cd nodejs-mysql-crud && npm install
```


### Step : 3 | Start the MySQL server and create database.
* Open another terminal/Command Prompt and enter the following command :
```
mysql -u <your_username> -p
```
* Enter the user password.

* Create Database 
```
CREATE DATABASE <name_of_database>;
```
* Switch to the database created.
```
use <name_of_database>
```
* You can exit mysql now
```
exit;
```

### Step : 4 | set up enviorment variables
* in the root directory of the project creat a file named `.env` . For reference check out `.env.sample` in the project 

### Step : 5 | Set up all database tables and dummy data.

* run the latest migrations
    * if you have knex set up already then run 
    ```
    knex migrate:latest
    ```
    * otherwise
    ```
    npx knex migrate:latest
    ```
* run seeds
    * if you have knex set up already then run 
    ```
    knex seed:run
    ```
    * otherwise
    ```
    npx knex seed:run
    ```

### Step : 4 | Start the API server
  * Get back to the terminal where you installed dependencies for the project and enter the following command to start the API server
```
npm start
```

Note : Make sure before starting the API server that you have added your env file accordingly and replaced the PORT, database name , user name and user password with yours.

---

# API
---

```
API Endpoint : http://localhost:{PORT} 
PORT - as defined in .env file
```

### /instructor
* `GET`: Gets all instructors


### /course
* `GET`: Gets all courses
* `POST`: Creats new course
```js
/**
 * for the POST request,
 * the request body must contain the payload like this
*/ 
{
    "name": "DSA" , // must be a string 
    "max_seats": 100 , // must be a number
    "start_date": "2022-10-21" , // Date in "YYYY-MM-DD" format 
    "instructor_id": 1 // id of the instructor assigned to it, must be taken from instructor table 
}
```

### /course/:id
* `GET`: Gets course by id

### /application
* `GET`: Gets all applications
* `POST`: Creates and application (this end-point to be used by users)
```js
/**
 * for the POST request,
 * the request body must contain the payload like this
*/ 
{
    "name" : "Sharan Swaroop" , // must be a string 
    "email" : "ss2331@gmail.com" , // must be a string
    "phone_number" : "9999929292" , // must be a string
    "linkedin" : "https://linkedin.com/in/sharan-swaroop" , // must be a string
    "course_id" : 1 // must be an Integer and a valid course.id from the Course table
}
```

### /application/:id
* `GET`: Gets application by id
* `PATCH`: updates status of an application (this endpoint is to be used by an instructor)
```js
/**
 * for the PATCH request,
 * the request body must contain the payload like this
*/ 
{
    "status": "ACCEPT" // must be one of these : ["ACCEPT", "REJECT", "WAITLIST"]
}
```

### /application/search?name=<applicant_name>&email=<applicant_email>
* `GET`: Gets all applications in which name starts with `<applicant_name>` and email starts with `<applicant_email>`

### /comment 
* `GET`: Gets all comments
* `POST`: Create comment for a particular application
```js
/**
 * for the POST request,
 * the request body must contain the payload like this
 * NOTE : only instructor of the course for which this application is adding a comment is allowed to add comments
*/ 
{
    "instructor_id": 1, // must be an Integer and a valid instructor.id from the instructor table
    "application_id": 1, // must be an Integer and a valid application.id from the application table
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}
```
---
# Approach

<!-- ![](https://github.com/chiraag-kakar/todo-api/blob/main/approach.png) -->


---
# Database Schema
* ### instructor table

| Field        | Type         | Null | Key | Default | Extra          |
|--------------|--------------|------|-----|---------|----------------|
| id           | int unsigned | NO   | PRI | NULL    | auto_increment |
| first_name   | varchar(255) | NO   |     | NULL    |                |
| last_name    | varchar(255) | YES  |     | NULL    |                |
| email        | varchar(255) | NO   |     | NULL    |                |
| phone_number | varchar(10) | YES  |     | NULL    |                |
| linkedin     | varchar(255) | YES  |     | NULL    |                |

* ### course table

| Field         | Type         | Null | Key | Default   | Extra             |
|---------------|--------------|------|-----|-----------|-------------------|
| id            | int unsigned | NO   | PRI | NULL      | auto_increment    |
| name          | varchar(255) | NO   |     | NULL      |                   |
| max_seats     | int          | YES  |     | 100       |                   |
| start_date    | date         | NO   |     | curdate() | DEFAULT_GENERATED |
| instructor_id | int unsigned | YES  | MUL | NULL      |                   |

* ### application table

| Field            | Type                                         | Null | Key | Default   | Extra             |
|------------------|----------------------------------------------|------|-----|-----------|-------------------|
| id               | int unsigned                                 | NO   | PRI | NULL      | auto_increment    |
| name             | varchar(255)                                 | NO   |     | NULL      |                   |
| email            | varchar(255)                                 | NO   |     | NULL      |                   |
| phone_number     | varchar(10)                                 | NO   |     | NULL      |                   |
| linkedin         | varchar(255)                                 | YES  |     | NULL      |                   |
| status           | enum('APPLIED','REJECT','ACCEPT','WAITLIST') | YES  |     | APPLIED   |                   |
| application_date | date                                         | NO   |     | curdate() | DEFAULT_GENERATED |
| course_id        | int unsigned                                 | YES  | MUL | NULL      |

* ### comment table 

| Field          | Type         | Null | Key | Default | Extra          |
|----------------|--------------|------|-----|---------|----------------|
| id             | int unsigned | NO   | PRI | NULL    | auto_increment |
| instructor_id  | int unsigned | YES  | MUL | NULL    |                |
| application_id | int unsigned | YES  | MUL | NULL    |                |
| message        | text         | NO   |     | NULL    |                |   
---

# API Specifications at a Glance
- [x] Supports basic CRUD operations.
- [x] User can get an existing applications by name and email.

## Author : [Sharan Swaroop](https://github.com/S-Swaroop)
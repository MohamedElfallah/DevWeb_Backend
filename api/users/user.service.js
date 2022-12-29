const pool = require('../../config/database')

module.exports = {
    // Create user service : 
    /*
    user data : 
        firstname : string 
        lastname : string
        email : string 
        password : string 
    */
    create: (data, callBack) => {
        pool.query(
            "insert into users(firstname, lastname, email, password) values(?,?, ?, ?)", [
                data.firstname,
                data.lastname,
                data.email,
                data.password
            ], (error, results) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            })
    },
    getUserByEmail: (data, callBack) => {
        pool.query(
            'select * from users where email= ?', [data.email],
            (error, results) => {
                if (error) return callBack(error);
                return callBack(null, results)
            })
    },
    
}
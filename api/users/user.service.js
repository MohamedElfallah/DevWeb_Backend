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
            `insert into "Users"(firstname, lastname, email, password) values($1, $2, $3, $4)
                `, [
                data.firstname,
                data.lastname,
                data.email,
                data.password
            ], (error, results, ) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            })
    },
    getUserByEmail: (data, callBack) => {
        pool.query(
            'select * from "Users" where email= $1 ', [data.email],
            (error, results) => {
                if (error) return callBack(error)
                return callBack(null, results)
            })
    }
}
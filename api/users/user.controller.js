const { create, getUserByEmail } = require('./user.service.js');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
require('dotenv').config()

module.exports = {
    CreateUser: (req, res) => {
        data = req.body;
        console.log(process.env.PGDB)
        getUserByEmail(data, (error, results) => {
            if (error) return res.json({
                success: 0,
                message: "DB connection error"
            })
            if(results)return res.json({
                success: 0,
                message : "user alredy registered with this mail"
            })
            salt = genSaltSync(10);
            console.log("Imm heere")
            data.password = hashSync(data.password, salt);
            create(data, (error, results) => {
                if (error)return res.json({
                    success: 0,
                    message: "DB Connection error"
                })
                return res.json({
                    success: 1,
                    message: "user created succefully"
                })
            }) 
        })
    },
    LoginUser : (req, res) => {
            data = req.body;
            getUserByEmail(data, (error , results) => {
                if(error) return {
                    success: 0,
                    message : "Connection failure"
                }
                curr_user = results[0].password
                logged = compareSync(data.password, curr_user)
                if(logged) return res.json({logged : logged})
                return res.json( {message : 'wrong creds'})

            })
    }
}

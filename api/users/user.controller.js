const { create, getUserByEmail } = require('./user.service.js');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    CreateUser: (req, res) => {
        data = req.body;
        console.log(process.env.PGDB)
        getUserByEmail(data, (error, results) => {
            if (error) return res.json({
                    success: 0,
                    message: error
                })
                // console.log(results)
            if (results.rowCount) return res.json({
                success: 0,
                message: "user alredy registered with this mail"
            })
            salt = genSaltSync(10);
            console.log("Imm heere")
            data.password = hashSync(data.password, salt);
            create(data, (error, results) => {
                if (error) return res.json({
                    success: 0,
                    message: "DB Connection error"
                })
                return res.json({
                    success: 1,
                    message: "user created succefully",
                })
            })
        })
    },
    LoginUser: (req, res) => {
        data = req.body;
        getUserByEmail(data, (error, results) => {
            if (error) return {
                success: 0,
                message: "Connection failure"
            }
            if (results.rowCount) {
                curr_user = results.rows[0].password
                logged = compareSync(data.password, curr_user)
                if (logged) return res.json({
                    succes: 1,
                    token: sign({ id: results.rows[0].id }, process.env.jwtKey)

                })
            };
            return res.json({ succes: 0, message: 'wrong creds' })

        })
    }
}
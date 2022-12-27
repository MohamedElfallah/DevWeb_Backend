const { create, getUserByEmail } = require('./user.service.js');
const { genSaltSync, hashSync } = require('bcrypt');
require('dotenv').config()

module.exports = {
    CreateUser: (req, res) => {
        found = 0;
        data = req.body;
        console.log(process.env.PGDB)
        getUserByEmail(data, (error, results) => {
            if (error) console.log(error);
            if (results) found = 1;
        })
        if (found) {
            return res.json({
                success: 0,
                message: "email already used"
            })
        }
        console.log("Imm heere")
        salt = genSaltSync(10);
        data.password = hashSync(data.password, salt);
        create(data, (error, results) => {
            if (error) console.log(error);
            if (results) return res.json({
                success: 1,
                message: "user created succefully"
            })
        })
    }
}
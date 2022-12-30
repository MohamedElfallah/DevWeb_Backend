const { verify } = require("jsonwebtoken");
require('dotenv').config()

module.exports = async(req, res, next) => {
    try {

        const token = await req.headers.authorization.split(" ")[1];

        const decodedToken = await verify(token, process.env.jwtKey);

        const user = await decodedToken;

        req.user = user;

        next();

    } catch (error) {
        res.json({
            success: 0,
            message: "not authorized"
        })
    }
};
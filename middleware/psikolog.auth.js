const express = require("express");
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyPsikolog = (req, res, next) => {
    const tokenPsikolog = req.header('auth-psikolog')
    if(!tokenPsikolog) return res.status(400).json({
        status : res.statusCode,
        message : "Access Denied!"
    })
    try{
        const verified = jwt.verify(tokenPsikolog, process.env.SECRET_KEY)
        req.user = verified
        next()
    }catch(err){
        res.status(400).json({
            status : res.statusCode,
            message : "Invalid Token!"
        })
    }
}
module.exports = verifyPsikolog
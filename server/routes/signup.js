const express = require("express");
const con = require('../utils/db');
 const bcrypt = require("bcrypt");
const route = express.Router();


route.post("/signup", async (req, res) => {
    console.log(req.body);
    const bodyData = req.body;
    const name = bodyData.name;
    const email = bodyData.email;
    let password = bodyData.password;
    const number = bodyData.number;
    
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password,salt);

    let query = `INSERT INTO user (name,email,number,password) VALUES ('${name}','${email}','${number}','${password}')`;
    con.query(query, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
    res.json({status:400,message:"User Register Successfully"});
})


module.exports = route;
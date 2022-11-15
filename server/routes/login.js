const express = require("express");
const bcrypt = require("bcrypt");
const con = require('../utils/db')

const route = express.Router();


route.post("/login", async (req, res) => {
    console.log(req.body);
    const bodyData = req.body;
    const email = bodyData.email;
    let password = bodyData.password;
    let query = `SELECT * FROM user WHERE email='${email}'`;

    con.query(query, async function (err, result) {
        if (err) throw err;
        console.log("Result: " + result[0].email);
        console.log(result.length);
        if (result.length == 0) {
            return res.json({ status: 200, message: "User Not Exist Please Register First" })
        } else {
            const result2 = await bcrypt.compare(password, result[0].password);
            if (result2) {
                console.log("match");
                return res.json({ status: 200, message: "User Successfully Login" })
            } else {
                return res.json({ status: 200, message: "Password Not Match" })
            }

        }
    });


})


module.exports = route;
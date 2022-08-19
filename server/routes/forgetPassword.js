const express = require('express');
const router = express.Router();
const ForgetPassword = require('../services/forgetPassword');
const sendMail = require('../services/mail')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res) {
   const userName = req.body.userName;
 

   await ForgetPassword.userForgetPasword(userName).then(
      (user) => {
         const email = user[0].email;
         sendMail.sendMail(email);
 
            return res.json({
               message: "success",
               pinCode : 4000
            });
         } 
 
   ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;
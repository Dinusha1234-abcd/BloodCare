const express = require('express');
const router = express.Router();
const ForgetPassword = require('../services/forgetPassword');
const sendMail = require('../services/mail')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
 
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password,salt)

   await ForgetPassword.userPasswordChange(userName ,hashPassword).then(
      ( ) => {
       
         return res.json({
               passwordChange: "success",
                
            });
         } 
 
   ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;
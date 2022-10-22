const express = require('express');
const router = express.Router();
const ForgetPassword = require('../services/forgetPassword');
const sendMail = require('../services/mail')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
function generatePin () {
   min = 0,
   max = 9999;
   return ("0" + Math.floor(Math.random() * (max - min + 1)) + min).substr(-4);
}
router.post('/', async function (req, res) {
   const userName = req.body.userName;
   const number = generatePin () 

   await ForgetPassword.userForgetPasword(userName).then(
      (user) => {
         const email = user[0].email;
         const subject =  'Reset Password PIN Number';
         const text = 'hello' ;
         const html = '<h>Your Pin Number : ' + number +'</h>';
         sendMail.sendMail(email,subject,text,html);
 
            return res.json({
               message: "success",
               pinCode : number
            });
         } 
  ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;
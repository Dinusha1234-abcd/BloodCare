const express = require('express');
const router = express.Router();
const login = require('../services/login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res) {
   const userName = req.body.userName;
   const password = req.body.password;

   await login.userLogin(userName).then(
      (user) => {
         const hashedPassword = user[0].password;
         const firstName = user[0].firstName;
         const lastName = user[0].lastName;
         const type = user[0].type;
         if (bcrypt.compareSync(password, hashedPassword)) {
            const token = jwt.sign({ userName }, '123%Readwtevzeaaccvrv');
            return res.json({
               message: "success",
               token: token,
               firstName: firstName,
               lastName: lastName,
               type: type
            });
         } else {
            return res.json({ message: "unsuccess" });
         }

      }
   ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;
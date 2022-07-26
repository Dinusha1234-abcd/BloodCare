const express = require('express');
const router = express.Router();
const login = require('../services/login');

router.get('/', async function(req,res){
  //  const userName = req.body.userName;
   // const password = req.body.password;
  
        await login.userLogin().then(
            (users)=>{
        
                console.log(users[0].firstName);
            }
        );
    
});

module.exports = router;
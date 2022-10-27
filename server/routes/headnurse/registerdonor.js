const express = require('express');
const router = express.Router();
const { hash } = require('bcrypt');
const bcrypt = require('bcrypt');

const registerformUpdate = require('../../services/headNurse/registerdonor');

router.post('/',async function(req, res){
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const NIC = 'req.body.NIC';
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const groupNumber = req.body.groupNumber;
    const blood = req.body.blood;
    const bloodCounterNumber = req.body.bloodCounterNumber;
    const email = req.body.email;
    const password = req.body.password;
    
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    let gender = 'f';
    let dateOfBirth= '1998-06-20';
    let centerNumber;
   
     await registerformUpdate.insertfoodType(firstName,lastName,NIC,phoneNumber,email, address,groupNumber,groupNumber,blood,gender,dateOfBirth ,hashPassword,bloodCounterNumber).then(
        () =>{  return res.json(
            {
              message: "sucess"  
            })
        }
           
    ).catch((err) =>{
        console.log(err);
    })

});
module.exports = router;
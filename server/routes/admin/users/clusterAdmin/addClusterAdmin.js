const express = require('express');
const router = express.Router();
const addClusterAdmin = require('../../../../services/admin/users/clusterAdmin/addClusterAdmin');

router.post('/',async function(req,res){
   const admin = req.body.adminNic;
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const NIC = req.body.NIC;
   const address = req.body.address;
   const email = req.body.email;
   const mobileNumber = req.body.mobileNumber;
   const occupation = req.body.occupation;
   let gender  ;
   let dateOfBirth;
   let centerNumber; 
   const getGender =  ()=>{ if(NIC.substr(3, 6)>500) { return true} }

   function getMonth(dayData) {
    if (dayData > 335) {
       return 12;
    } else if (dayData > 305) {
       return 11;
    } else if (dayData > 274) {
       return 10;
    } else if (dayData > 244) {
       return 9;
    } else if (dayData > 213) {
       return 8;
    } else if (dayData > 182) {
       return 7;
    } else if (dayData > 152) {
       return 6;
    } else if (dayData > 121) {
       return 5;
    } else if (dayData > 91) {
       return 4;
    } else if (dayData > 60) {
       return 3;
    } else if (dayData < 32) {
       return 1;
    } else if (dayData > 31) {
       return 2;
    }
 }

 function getDate(dayData) {
    if (dayData > 335) {
       return (dayData - 335);
    } else if (dayData > 305) {
       return (dayData - 335);
    } else if (dayData > 274) {
       return (dayData - 274);
    } else if (dayData > 244) {
       return (dayData - 244);
    } else if (dayData > 213) {
       return (dayData - 213);
    } else if (dayData > 182) {
       return (dayData - 182);
    } else if (dayData > 152) {
       return (dayData - 152);
    } else if (dayData > 121) {
       return (dayData - 121);
    } else if (dayData > 91) {
       return (dayData - 91);
    } else if (dayData > 60) {
       return (dayData - 60);
    } else if (dayData < 32) {
       return (dayData - 32);
    } else if (dayData > 31) {
       return (dayData - 31);
    }
 }


 await addClusterAdmin.insertClusterAdmin(centerNumber,firstName,lastName,NIC,gender,dateOfBirth,address, email, mobileNumber, occupation).then(
    (user) => {
     
          return res.json({
             message: "success",
          });
      
    }
 ).catch((err) => {
    console.log(err);
    return res.json({ message: "unsucess" });
 });


}
);
module.exports = router;
const express = require('express');
const router = express.Router();
const updateNurse = require('../../../../services/clusterAdmin/medicalStaff/nurse/updateNurse');


router.post('/', async function (req, res) {
   const id = req.body.id;
   const firstName = req.body.updateFirstName;
   const lastName = req.body.updateLastName;
   const NIC = req.body.updateNIC;
   const address = req.body.updateAddress;
   const email = req.body.updateEmail;
   const mobileNumber = req.body.updateMobileNumber;

   let gender;
   let dateOfBirth;

   const getGender = (dayData) => { if (dayData > 500) { return true } else { return false } }


   function getMonth(dayData) {
      if (dayData > 500) {
         dayData = dayData - 500;
      }
      if (dayData > 1 && dayData < 366) {

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
      } else {
         return false;
      }
   }

   //get date function
   function getDay(dayData) {

      if (dayData > 500) {
         dayData = dayData - 500;
      }
      if (dayData > 1 && dayData < 366) {
         if (dayData > 335) {
            return (dayData - 335);
         } else if (dayData > 305) {
            return (dayData - 305);
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
      } else {
         return false;
      }
   }
   //cheack NIC number length
   if (NIC.length == 10) {
      const year = "19" + NIC.substr(0, 2);
      gender = (getGender(NIC.substr(2, 3)) ? "f" : "m");
      const month = getMonth(NIC.substr(2, 3));
      const day = getDay(NIC.substr(2, 3));
      dateOfBirth = year + "-" + month + "-" + day;
   }
   if (NIC.length == 12) {
      const year = NIC.substr(0, 4);
      gender = (getGender(NIC.substr(4, 3)) ? "f" : "m");
      const month = getMonth(parseInt(NIC.substr(4, 3)));
      const day = getDate(parseInt(NIC.substr(4, 3)));
      dateOfBirth = year + "-" + month + "-" + day;
   }

   await updateNurse.updateNurse(id, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber).then(
      (user) => {

         return res.json({
            message: "success",
         });

      }
   ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;
const express = require('express');
const router = express.Router();
const addDoctor = require('../../../../services/clusterAdmin/medicalStaff/doctor/addDoctor');


router.post('/', async function (req, res) {
   const clusterAdmin = req.body.clusterAdminNic;
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const NIC = req.body.NIC;
   const address = req.body.address;
   const email = req.body.email;
   const mobileNumber = req.body.mobileNumber;
   const occupation = req.body.occupation;
   let gender;
   let dateOfBirth;
   let centerNumber;
   const getGender = () => { if (NIC.substr(3, 6) > 500) { return true } }

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

   //cheack NIC number length
   if (NIC.length == 10) {
      const year = "19" + NIC.substr(0, 2);
      gender = (getGender ? "f" : "m");
      const month = getMonth(parseInt(NIC.substr(3, 6)));
      const day = getMonth(parseInt(NIC.substr(3, 6)));
      dateOfBirth = year + "-" + month + "-" + day;
   }
   if (NIC.length == 12) {
      const year = NIC.substr(0, 4);
      gender = () => { if (NIC.substr(3, 6) > 500) { rtprint("f") } else { print("m") } }
      const month = getMonth(parseInt(NIC.substr(5, 8)));
      const day = getDate(parseInt(NIC.substr(5, 8)));
      dateOfBirth = year + "-" + month + "-" + day;
   }
   await addDoctor.getBloodCenterNumber(clusterAdmin).then(
      (clusterAdmin) => {
         centerNumber = clusterAdmin[0].bloodCenterNo;
      }
   )
   await addDoctor.insertDoctor(centerNumber, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber, occupation).then(
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
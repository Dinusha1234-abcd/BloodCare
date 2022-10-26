const db = require('../db');


async function getDonorDetails(){
    const rows =await db.query( `SELECT user.userNic, user.firstName,user.lastName, 
     user.gender,
     user.dateOfBirth, user.email, user.phoneNumber, user.address, 
    register_donor.registerDonorId,register_donor.province,register_donor.district,
    blood_donation.bloodCounterNumber,blood_counter.BloodType,blood_counter.BloodRHtype
      FROM user 
      INNER JOIN register_donor ON user.userNic = register_donor.userNic 
      INNER JOIN blood_donation ON register_donor.registerDonorId = blood_donation.registedDonorId
      INNER JOIN blood_counter ON blood_donation.bloodCounterNumber = blood_counter.bloodCounterNo`);
    const data =rows;
    return rows;
}

module.exports = {getDonorDetails}
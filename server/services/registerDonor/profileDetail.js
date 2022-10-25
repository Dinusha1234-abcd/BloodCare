const db = require('../db');

async function getDonor(regDonorNic){
    const rows = await db.query(`SELECT registerDonorId FROM register_donor WHERE userNic=?`,[regDonorNic]);
    return rows;

}

async function getDonorProfile(donorId){
    const rows =await db.query(`SELECT register_donor.province, register_donor.district, user.firstName, user.lastName, user.email, user.phoneNumber, user.address FROM user INNER JOIN register_donor ON user.userNic=register_donor.userNic INNER JOIN blood_donation ON blood_donation.registedDonorId=register_donor.registerDonorId INNER JOIN blood_counter ON blood_donation.bloodCounterNumber=blood_counter.bloodCounterNo WHERE register_donor.registerDonorId=?`,[donorId])
    const data = rows;
    return rows ; 
}
module.exports= {getDonor,getDonorProfile}
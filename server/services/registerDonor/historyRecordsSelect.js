const db = require('../db');

async function getDonor(regDonorNic){
    const rows = await db.query( `SELECT registerDonorId FROM register_donor WHERE userNic=?`,[regDonorNic]);
    return rows;
}

async function getHistoryRecords(donorId){
    const rows =await db.query(`SELECT blood_camp.date,blood_camp.place, blood_donation.bloodCounterNumber FROM blood_donation INNER JOIN register_donor ON blood_donation.registedDonorId=register_donor.registerDonorId INNER JOIN blood_camp ON blood_donation.campNumber=blood_camp.bloodCampNumber WHERE register_donor.registerDonorId=?`,[donorId]);
    const data =rows;
    return rows;
}

module.exports = {getDonor, getHistoryRecords}
const db = require('../db');



async function getHistoryRecords(regDonorNic){
    const rows =await db.query( `SELECT blood_camp.date,blood_camp.place, blood_donation.bloodCounterNumber FROM blood_camp INNER JOIN blood_donation INNER JOIN register_donor ON blood_donation.registedDonorId=register_donor.registerDonorId WHERE register_donor.userNic=?`,[regDonorNic]);
    const data =rows;
    return rows;
}

module.exports = {getHistoryRecords}
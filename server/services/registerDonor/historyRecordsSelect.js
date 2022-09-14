const db = require('../db');



async function getHistoryRecords(){
    const rows =await db.query( `SELECT * FROM user INNNER JOIN blood_donation ON user.userNic = blood_donation.registedDonorId`);
    const data =rows;
    return rows;
}

module.exports = {getHistoryRecords}
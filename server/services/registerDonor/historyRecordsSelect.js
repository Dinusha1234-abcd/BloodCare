const db = require('../db');



async function getHistoryRecords(){
    const rows =await db.query( `SELECT blood_camp.date,blood_camp.place, blood_donation.bloodCounterNumber FROM blood_camp INNER JOIN blood_donation`);
    const data =rows;
    return rows;
}

module.exports = {getHistoryRecords}
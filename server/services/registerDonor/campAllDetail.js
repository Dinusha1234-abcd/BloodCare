const db = require('../db');

async function getAllCamp(date){
    const rows =await db.query( `SELECT blood_camp.name, blood_camp.date,blood_camp.place,blood_camp_organizer.organizerName, blood_camp_organizer.phoneNumber FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic=blood_camp_organizer.nic WHERE status='accept' && blood_camp.date >=? ORDER BY blood_camp.date `, [date]);
    const data =rows;
    return rows;
}

module.exports = {getAllCamp}
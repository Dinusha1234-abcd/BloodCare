const db = require('./db');

async function getCampsData(FullName,NIC,email,mobileNumber,campName,campDate, location, district, clusterCenter){
    const rows =await db.query( `SELECT * FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic`);
    const data =rows;
    return rows;
}


module.exports = { getCampsData } 
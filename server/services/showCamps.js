const db = require('./db');

async function getCamp(FullName,NIC,email,mobileNumber,campName,campDate, location, district, clusterCenter,numberofDonors){
    const rows =await db.query( `SELECT b.bloodCampNumber, b.date , b.name, b.place ,  b.status , b.numberofDonors,  b.bloodCenterNo, o.organizerNumber ,  o.nic ,  o.name ,  o.phoneNumber ,  o.email FROM blood_camp b INNER JOIN blood_camp_organizer o ON `);
    const data =rows;
    return rows;
}


module.exports = { getCamp } 
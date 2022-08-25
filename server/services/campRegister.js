const db = require('./db');
// const config = require('../config');

async function addCamp(FullName,NIC,email,mobileNumber,campName,campDate, location, district, clusterCenter,numberofDonors){
    await db.query(`INSERT INTO  blood_camp ( bloodCampNumber ,  date , name, place ,  status , numberofDonors,  bloodCenterNo ) VALUES ( ?,?,?,?,?,?,?)`,
    [ '',campDate,campName,location, 'pending',numberofDonors, '1']);
    
    await db.query(`INSERT INTO  blood_camp_organizer ( organizerNumber ,  nic ,  name ,  phoneNumber ,  email ) VALUES ( ?,?,?,?,?)`,
    [ '',NIC,FullName, mobileNumber, email]);
}

module.exports = { addCamp } 

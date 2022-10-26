const db = require('./db');

async function addCamp(FullName,NIC,email,mobileNumber,campName,campDate, location, district, clusterCenter,){
    await db.query(`INSERT INTO  blood_camp ( bloodCampNumber , date , name, place ,  status , bloodCenterNo ) VALUES ( ?,?,?,?,?,?)`,
    [ '',campDate,campName,location, 'pending', '1']);
    
    await db.query(`INSERT INTO  blood_camp_organizer ( organizerNumber ,  nic ,  name ,  phoneNumber ,  email ) VALUES ( ?,?,?,?,?)`,
    [ '',NIC,FullName, mobileNumber, email]);
}

module.exports = { addCamp } 

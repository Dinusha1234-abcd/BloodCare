const db = require('./db');

async function addCamp(FullName,NIC,email,mobileNumber,campName,campDate, location, district, clusterCenter,numberofDonors){
    await db.query(`INSERT INTO  blood_camp ( bloodCampNumber , name, organizerNic,date,place ,  watingRegister,status , bloodCenterNo ) VALUES ( ?,?,?,?,?,?,?,?)`,
    [ '', campName,NIC,campDate,location,numberofDonors, 'pending', '1']);
    
    await db.query(`INSERT INTO  blood_camp_organizer ( organizerNumber ,  nic ,  organizerName ,  phoneNumber ,  email ) VALUES ( ?,?,?,?,?)`,
    [ '',NIC,FullName, mobileNumber, email]);
}

async function getClusterCenter(){
    const row = await db.query(`SELECT * FROM blood_center`);
    return row
}

module.exports = { addCamp,getClusterCenter } 

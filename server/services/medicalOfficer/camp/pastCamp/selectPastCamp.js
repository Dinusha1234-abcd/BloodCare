const db = require('../../../db');


async function getBloodCenterNumber(medicalOfficerNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  medical_officer  WHERE userNic=?`,[medicalOfficerNic]);
     return  rows ;
}

async function getPastCamps(clusterCenterNo,date){
   
    const rows = await db.query( `SELECT blood_camp.bloodCampNumber,blood_camp.date, blood_camp_organizer.organizerName,COUNT(registered_donation.campNumber) AS numberofregisters FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic INNER JOIN registered_donation ON registered_donation.campNumber = blood_camp.bloodCampNumber  WHERE blood_camp.bloodCenterNo=? && blood_camp.status='accept' && blood_camp.date  < ? `,[clusterCenterNo, date]);
    const data = rows;
    return  rows ;
  
    
}
 
module.exports = {getBloodCenterNumber,getPastCamps } 
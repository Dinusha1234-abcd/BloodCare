const db = require('../../../db');


async function getBloodCenterNumber(medicalOfficerNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  medical_officer  WHERE userNic=?`,[medicalOfficerNic]);
     return  rows ;
}

async function getUpcomingCamps(clusterCenterNo,date){
   
    const rows = await db.query( `SELECT * FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic INNER JOIN headnurse_assign_bloodcamp ON headnurse_assign_bloodcamp.campNumber= blood_camp.bloodCampNumber INNER JOIN medical_staff ON medical_staff.staffId = headnurse_assign_bloodcamp.headNurseId INNER JOIN user ON user.userNic = medical_staff.userNic WHERE blood_camp.bloodCenterNo=? && blood_camp.status='accept' && blood_camp.date >?  && medical_staff.medicalType= 'headNurse'`,[clusterCenterNo,date]);
    const data = rows;
    return  rows ;
  
    
}
 
module.exports = {getBloodCenterNumber,getUpcomingCamps } 
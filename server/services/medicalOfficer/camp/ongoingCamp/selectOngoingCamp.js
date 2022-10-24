const db = require('../../../db');


async function getBloodCenterNumber(medicalOfficerNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`,[medicalOfficerNic]);
     return  rows ;
}

async function getOngoingCamps(clusterCenterNo, date){
   
    const rows = await db.query( `SELECT * FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic WHERE blood_camp.bloodCenterNo=? && blood_camp.status='accept' && blood_camp.date = ?  `,[clusterCenterNo,date]);
    const data = rows;
    return  rows ;
  
    
}
 
module.exports = {getBloodCenterNumber,getOngoingCamps } 
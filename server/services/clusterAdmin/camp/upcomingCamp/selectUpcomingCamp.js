const db = require('../../../db');


async function getBloodCenterNumber(clusterAdminNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`,[clusterAdminNic]);
     return  rows ;
}

async function getUpcomingCamps(clusterCenterNo){
   
    const rows = await db.query( `SELECT * FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic WHERE blood_camp.bloodCenterNo=? && blood_camp.status='accept' `,[clusterCenterNo]);
    const data = rows;
    return  rows ;
  
    
}
 
module.exports = {getBloodCenterNumber,getUpcomingCamps } 
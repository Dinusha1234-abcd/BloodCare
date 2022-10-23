const db = require('../../../db');


async function getBloodCenterNumber(clusterAdminNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`,[clusterAdminNic]);
     return  rows ;
}

async function getDoctors(clusterCenterNo){
   
    const rows = await db.query( `SELECT * FROM user INNER JOIN medical_staff ON user.userNic = medical_staff.userNic WHERE medical_staff.bloodCenterNo=? && medical_staff.type = 'Doctor' && user.workStatus='1' `,[clusterCenterNo]);
    const data = rows;
    return  rows ;
  
    
}
 
module.exports = {getBloodCenterNumber,getDoctors } 
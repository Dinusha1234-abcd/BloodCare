const db = require('../../../db');



async function getDoctors(clusterCenterNo){
    console.log(clusterCenterNo); 
    const rows = await db.query( `SELECT * FROM user INNER JOIN medical_staff ON user.userNic = medical_staff.userNic WHERE medical_staff.bloodCenterNo=?`,[clusterCenterNo]);
    const data = rows;
    return  rows ;
  
    
}

module.exports = {getDoctors } 
const db = require('../../db');

async function getMembers(){
   
    const rows = await db.query( `SELECT 
    sum(medical_staff.medicalType ='doctor')  as doctors,
    sum(medical_staff.medicalType ='headNurse')  as headNurses,
    sum(medical_staff.medicalType ='nurse')  as nurses,
    sum(medical_staff.medicalType ='driver')  as drivers,
    sum(medical_staff.medicalType ='medicalOfficer')  as medicalOfficers
    FROM medical_staff INNER JOIN user ON  user.userNic = medical_staff.userNic    WHERE user.workStatus='1'
    `);
    return  rows ;
    
}
// async function getMembers2(){
//     const rows = await db.query(`SELECT COUNT(cluster_center_administator.userNic) AS ccAdministry FROM cluster_center_administator INNER JOIN user ON user.userNic=cluster_center_administator.userNic WHERE user.workStatus = '1'`);
//     return  rows ;
// }

module.exports = {getMembers,} 
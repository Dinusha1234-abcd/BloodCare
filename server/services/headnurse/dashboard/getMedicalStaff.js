const db = require('../../db');

async function getMedicalStaff(clusterNic){
   
    const rows = await db.query( `SELECT 
    sum(medical_staff.medicalType ='doctor')  as doctors,
    sum(medical_staff.medicalType ='headNurse')  as headNurses,
    sum(medical_staff.medicalType ='nurse')  as nurses,
    sum(medical_staff.medicalType ='driver')  as drivers 
    FROM medical_staff INNER JOIN user ON  user.userNic = medical_staff.userNic    WHERE user.workStatus='1' && medical_staff.bloodCenterNo=(SELECT bloodCenterNo FROM cluster_center_administator WHERE userNic=?) `,[clusterNic]);
    return  rows ;
    
}
module.exports = {getMedicalStaff} 
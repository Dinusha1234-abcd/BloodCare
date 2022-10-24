const db = require('../../../db');

async function getBloodCenterNumber(clusterAdminNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`,[clusterAdminNic]);
     return  rows ;
}


async function getMedicalStaff(centerNumber, date,campNumber){
   
    const rows = await db.query( `SELECT * FROM medical_staff INNER JOIN user ON medical_staff.userNic = user.userNic INNER JOIN work_assign ON work_assign.staffId = medical_staff.staffId INNER JOIN blood_camp ON blood_camp.bloodCampNumber = work_assign.bloodCampNumber   WHERE blood_camp.bloodCenterNo=? && blood_camp.date!=? && blood_camp.bloodCampNumber != ?`,[centerNumber,date,campNumber]);
    return  rows ;
    
}
module.exports = {getMedicalStaff,getBloodCenterNumber} 
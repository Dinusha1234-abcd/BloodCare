const db = require('../../../db');

async function getBloodCenterNumber(clusterAdminNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`,[clusterAdminNic]);
     return  rows ;
}


async function getMedicalStaff(centerNumber, date,campNumber){
   
    const rows = await db.query(`SELECT *,medical_staff.staffId ,medical_staff.bloodCenterNo FROM medical_staff INNER JOIN user ON medical_staff.userNic = user.userNic LEFT JOIN work_assign ON work_assign.staffId = medical_staff.staffId LEFT JOIN blood_camp ON blood_camp.bloodCampNumber = work_assign.bloodCampNumber WHERE  medical_staff.bloodCenterNo=? && user.workStatus='1' && (blood_camp.bloodCampNumber IS NULL || blood_camp.bloodCampNumber!= ?)
    `,[centerNumber,campNumber]);
    return  rows ;
    
}
module.exports = {getMedicalStaff,getBloodCenterNumber} 
const db = require('../../../db');

async function getPendingCamp(campNumber){
   
    const rows = await db.query( `SELECT *, blood_camp.name FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic LEFT JOIN work_assign ON work_assign.bloodCampnumber = blood_camp.bloodCampNumber LEFT JOIN medical_staff ON medical_staff.staffId = work_assign.staffId LEFT JOIN user ON user.userNic = medical_staff.userNic WHERE blood_camp.bloodcampNumber=? `,[campNumber]);
    return  rows ;
    
}
module.exports = {getPendingCamp} 
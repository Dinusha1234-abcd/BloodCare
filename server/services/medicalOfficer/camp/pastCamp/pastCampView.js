const db = require('../../../db');

async function getPastCamp(campNumber){
   
    const rows = await db.query( `SELECT *, blood_camp.name FROM blood_camp INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic INNER JOIN work_assign ON work_assign.bloodCampnumber = blood_camp.bloodCampNumber INNER JOIN medical_staff ON medical_staff.staffId = work_assign.staffId INNER JOIN user ON user.userNic = medical_staff.userNic WHERE blood_camp.bloodcampNumber=? `,[campNumber]);
    return  rows ;
    
}
module.exports = {getPastCamp} 
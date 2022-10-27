const db = require('../../db');

async function getCamp(medicalNic){
   
    const rows = await db.query( `SELECT * FROM blood_camp WHERE status='accept' && bloodCenterNo=(SELECT bloodCenterNo FROM medical_officer WHERE userNic=?) `,[medicalNic]);
    return  rows ;
    
}
module.exports = {getCamp} 
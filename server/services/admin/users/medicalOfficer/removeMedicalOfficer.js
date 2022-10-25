const db = require('../../../db');

async function removeMedicalOfficer(medicalOfficerNic){
   
     await db.query( `UPDATE  user  SET  user.workStatus = '0' WHERE user.userNic=?`,[medicalOfficerNic]);
  
}
module.exports = { removeMedicalOfficer}

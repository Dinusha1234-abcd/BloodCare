const db = require('../../../db');

async function removeDoctorAdmin(doctorNic){
   
     await db.query( `UPDATE  user  SET  user.workStatus = '0' WHERE user.userNic=?`,[doctorNic]);
  
}
module.exports = { removeDoctorAdmin}

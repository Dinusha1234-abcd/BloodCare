const db = require('../../../db');

async function removeNurseAdmin(nurseNic){
   
     await db.query( `UPDATE  user  SET  user.workStatus = '0' WHERE user.userNic=?`,[nurseNic]);
  
}
module.exports = { removeNurseAdmin}

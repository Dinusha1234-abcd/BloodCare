const db = require('../../../db');

async function removeNurse(nurseNic){
   
     await db.query( `UPDATE  user  SET  user.workStatus = '0' WHERE user.userNic=?`,[nurseNic]);
  
}
module.exports = { removeNurse}

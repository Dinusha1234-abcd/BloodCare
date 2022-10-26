const db = require('../../../db');

async function removeHeadNurse(headNurseNic){
   
     await db.query( `UPDATE  user  SET  user.workStatus = '0' WHERE user.userNic=?`,[headNurseNic]);
  
}
module.exports = { removeHeadNurse}

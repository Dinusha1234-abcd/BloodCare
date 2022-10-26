const db = require('../../../db');

async function removeHeadNurseAdmin(headNurseNic){
   
     await db.query( `
        UPDATE  user  
        SET  user.workStatus = '0' 
        WHERE user.userNic=?`,[headNurseNic]);
  
}
module.exports = { removeHeadNurseAdmin}

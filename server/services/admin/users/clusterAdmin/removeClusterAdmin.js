const db = require('../../../db');

async function removeClusterAdmin(clusterAdminNic){
   
     await db.query( `UPDATE  user  SET  user.workStatus = '0' WHERE user.userNic=?`,[clusterAdminNic]);
  
}
module.exports = { removeClusterAdmin}

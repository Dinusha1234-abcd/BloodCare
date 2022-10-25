const db = require('../../../db');

async function removeDriver(driverNic){
   
     await db.query( `UPDATE  user  SET  user.workStatus = '0' WHERE user.userNic=?`,[driverNic]);
  
}
module.exports = { removeDriver}

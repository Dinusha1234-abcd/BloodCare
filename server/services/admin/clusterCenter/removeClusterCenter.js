const db = require('../../db');

async function removeClusterCenter(clusterCenterNic){
   
     await db.query( `
     DELETE FROM blood_center WHERE bloodCenterNo=?`,[clusterCenterNic]);
  
}
module.exports = { removeClusterCenter}

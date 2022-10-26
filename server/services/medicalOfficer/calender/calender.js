const db = require('../../db');

async function getCamp(clusterNic){
   
    const rows = await db.query( `SELECT * FROM blood_camp WHERE status='accept' && bloodCenterNo=(SELECT bloodCenterNo FROM cluster_center_administator WHERE userNic=?) `,[clusterNic]);
    return  rows ;
    
}
module.exports = {getCamp} 
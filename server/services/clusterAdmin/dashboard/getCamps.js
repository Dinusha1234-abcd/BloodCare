const db = require('../../db');

async function getCamps(clusterNic){
   
    const rows = await db.query( `SELECT bloodCampNumber,
    sum(date < CURDATE() && status='accept')  as pastCamp,
    sum(date = CURDATE() && status='accept')  as ongoingCamp,
    sum(date > CURDATE() && status='accept')  as upcomingCamp,
    sum(date <  CURDATE() && status='pending')  as pendingCamp 
    FROM blood_camp   WHERE bloodCenterNo=(SELECT bloodCenterNo FROM cluster_center_administator WHERE userNic=? GROUP BY bloodCampNumber ) `,[clusterNic]);
    return  rows ;
    
}
module.exports = {getCamps} 
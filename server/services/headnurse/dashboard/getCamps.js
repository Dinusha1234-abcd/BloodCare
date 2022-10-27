const db = require('../../db');

async function getCamps(clusterNic){
    var todayDate = new Date().toISOString().slice(0, 10);
    const rows = await db.query( `SELECT 
    sum( date <    ? &&	status ='accept')  as pastCamp,
    sum(date = ? &&	status ='accept')  as ongoingCamp,
    sum(date > ? &&	status ='accept')  as upcomingCamp,
    sum(date  <  ? &&	status ='pending')  as pendingCamp 
    FROM blood_camp    WHERE  bloodCenterNo=(SELECT bloodCenterNo FROM cluster_center_administator WHERE userNic=?) `,[ todayDate,todayDate,todayDate,todayDate,clusterNic]);
    return  rows ;
    
}

async function getCampsDetails(clusterNic) {
    const rows = await db.query( `SELECT * FROM blood_camp    WHERE  bloodCenterNo=(SELECT bloodCenterNo FROM cluster_center_administator WHERE userNic=?) `,[ clusterNic]);
    return  rows ;
}

async function getCampsCount(clusterNic){
  
    const rows = await db.query( `SELECT 
    sum( status ='accept')  as allCamp,
    sum(status ='accept' && bloodCenterNo=(SELECT bloodCenterNo FROM cluster_center_administator WHERE userNic=?))  as clusterCenterCamp 
    
    FROM blood_camp`,[ clusterNic]);
    return  rows ;
    
}


module.exports = {getCamps,getCampsDetails,getCampsCount} 
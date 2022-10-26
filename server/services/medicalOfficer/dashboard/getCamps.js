const db = require('../../db');

async function getCamps(medicalNic){
    var todayDate = new Date().toISOString().slice(0, 10);
    const rows = await db.query( `SELECT 
    sum( date <    ? &&	status ='accept')  as pastCamp,
    sum(date = ? &&	status ='accept')  as ongoingCamp,
    sum(date > ? &&	status ='accept')  as upcomingCamp,
    sum(date  <  ? &&	status ='pending')  as pendingCamp 
    FROM blood_camp    WHERE  bloodCenterNo=(SELECT bloodCenterNo FROM medical_officer WHERE userNic=?) `,[ todayDate,todayDate,todayDate,todayDate,medicalNic]);
    return  rows ;
    
}

async function getCampsDetails(medicalNic) {
    const rows = await db.query( `SELECT * FROM blood_camp    WHERE  bloodCenterNo=(SELECT bloodCenterNo FROM medical_officer WHERE userNic=?) `,[ medicalNic]);
    return  rows ;
}

async function getCampsCount(medicalNic){
  
    const rows = await db.query( `SELECT 
    sum( status ='accept')  as allCamp,
    sum(status ='accept' && bloodCenterNo=(SELECT bloodCenterNo FROM medical_officer WHERE userNic=?))  as clusterCenterCamp 
    
    FROM blood_camp`,[ medicalNic]);
    return  rows ;
    
}


module.exports = {getCamps,getCampsDetails,getCampsCount} 
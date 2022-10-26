const db = require('../../../db');

async function getApositive(center){
   
    const rows = await db.query( `SELECT 
    sum(blood_counter.bloodRHtype ='A+' && blood_camp.bloodCenterNo=(SELECT bloodCenterNo  FROM cluster_center_administator WHERE userNic=?) ) as Apositive,
    sum(blood_counter.bloodRHtype ='A+') as ApositiveAll FROM blood_counter 
    INNER JOIN blood_donation ON blood_counter.bloodCounterNo = blood_donation.bloodCounterNumber 
    INNER JOIN   blood_camp ON  blood_camp.bloodCampNumber= blood_donation.campNumber `,[center]);
    return  rows ;
    
}
module.exports = {getApositive} 
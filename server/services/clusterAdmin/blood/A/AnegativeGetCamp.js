const db = require('../../../db');

async function getCamp(campNumber) {

    const rows = await db.query(` SELECT  
    blood_camp.bloodCampNumber ,
    blood_camp.name,
     COUNT(blood_donation.bloodCounterNumber) AS Total
        FROM
     blood_camp
   INNER JOIN blood_donation ON blood_camp.bloodCampNumber = blood_donation.campNumber 
   INNER JOIN blood_counter ON blood_counter.bloodCounterNo= blood_donation.bloodCounterNumber 
   WHERE blood_counter.bloodRHtype='A-' && blood_camp.bloodCenterNo=?
   GROUP BY blood_camp.bloodCampNumber ,
    blood_camp.name;`, [campNumber]);
    return rows;

}
module.exports = { getCamp } 
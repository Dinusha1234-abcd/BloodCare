const db = require('../../db');

async function getBloodDetails(){
   
    const rows = await db.query( `SELECT
    
     sum(blood_counter.bloodRHtype ='O+')  AS Opositive, 
      sum(blood_counter.bloodRHtype ='O-')  AS Onegative ,
       sum(blood_counter.bloodRHtype ='A+')  AS Apositive ,
        sum(blood_counter.bloodRHtype ='A-')  AS Anegative ,
         sum(blood_counter.bloodRHtype ='B+')  AS Bpositive ,
          sum(blood_counter.bloodRHtype ='B-')  AS Bnegative, 
           sum(blood_counter.bloodRHtype ='AB+')  AS ABpositive, 
            sum(blood_counter.bloodRHtype ='AB-')  AS ABnegative 
        FROM
     blood_camp
   INNER JOIN blood_donation ON blood_camp.bloodCampNumber = blood_donation.campNumber 
   INNER JOIN blood_counter ON blood_counter.bloodCounterNo= blood_donation.bloodCounterNumber  
    
 `);
    return  rows ;
    
}
module.exports = {getBloodDetails} 
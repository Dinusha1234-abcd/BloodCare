const db = require('../db');


async function getSummary(){
    const rows =await db.query( `

     SELECT blood_camp.bloodCampNumber, blood_camp.date, blood_camp.place, blood_camp.name, 
     blood_camp_organizer.organizerName, blood_camp_organizer.nic, blood_camp_organizer.phoneNumber,
     blood_center.bloodCenterNo, blood_center.province , COUNT(blood_camp.bloodCampNumber) AS count,
     


     sum(blood_counter.bloodRHtype ='O+') AS Opositive,
     sum(blood_counter.bloodRHtype ='O-') AS Onegative ,
     sum(blood_counter.bloodRHtype ='A+') AS Apositive ,
     sum(blood_counter.bloodRHtype ='A-') AS Anegative ,
     sum(blood_counter.bloodRHtype ='B+') AS Bpositive ,
     sum(blood_counter.bloodRHtype ='B-') AS Bnegative,
     sum(blood_counter.bloodRHtype ='AB+') AS ABpositive,
     sum(blood_counter.bloodRHtype ='AB-') AS ABnegative
     FROM  blood_center
     
    
     INNER JOIN blood_camp ON blood_center.bloodCenterNo = blood_camp.bloodCenterNo 
     INNER JOIN blood_camp_organizer ON blood_camp.organizerNic = blood_camp_organizer.nic 
     INNER JOIN blood_donation ON blood_camp.bloodCampNumber = blood_donation.campNumber
     INNER JOIN blood_counter ON blood_counter.bloodCounterNo= blood_donation.bloodCounterNumber
     
    
     WHERE  blood_camp.date < NOW()
     GROUP BY blood_camp.bloodCampNumber ,
     blood_camp.name  
     `);

    const data =rows;
    return rows;

   // WHERE blood_counter.bloodRHtype='O+' && blood_camp.bloodCenterNo=1 && 

   // LEFT JOIN medical_staff ON medical_staff.staffId = work_assign.staffId
   //LEFT JOIN work_assign ON work_assign.bloodCampNumber = blood_camp.bloodCampNumber

   /* 
   COUNT(medical_staff.medicalType='doctor') AS doctor,
     COUNT(medical_staff.medicalType='driver') AS driver,
     COUNT(medical_staff.medicalType='nurse') AS nurse,
   */
}

module.exports = {getSummary}
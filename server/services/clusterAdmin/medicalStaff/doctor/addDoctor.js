const db = require('../../../db');
 

async function getBloodCenterNumber(clusterAdminNic){
    const rows =  await db.query(`SELECT * FROM  cluster_center_administator INNER JOIN blood_center ON cluster_center_administator.bloodCenterNo = blood_center.bloodCenterNo   WHERE userNic=?`,[clusterAdminNic]);
     return  rows ;
}


async function insertDoctor(centerNumber,firstName,lastName,NIC,gender,dateOfBirth,address, email, mobileNumber, occupation){
    
    await db.query( `INSERT INTO  user (userNic,firstName ,lastName,gender,dateOfBirth,type,email, phoneNumber,address) VALUES (?,?,?,?,?,?,?,?,?)`,
    [NIC,firstName,lastName,gender,dateOfBirth,'6',email,mobileNumber,address]);
   
 
    await db.query( `INSERT INTO medical_staff(staffId, bloodCenterNo, medicalType, userNic) VALUES (?,?,?,?)`,
    [ '',centerNumber,'doctor',NIC]);
    
}
 
module.exports = { insertDoctor ,getBloodCenterNumber } 
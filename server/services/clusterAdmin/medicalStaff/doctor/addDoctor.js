const db = require('../../../db');
// const config = require('../config');

async function getBloodCenterNumber(clusterAdminNic){
    const rows =  await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`,[clusterAdminNic]);
    const data = rows;
    return  rows ;
}


async function insertDoctor(centerNumber,firstName,lastName,NIC,gender,dateOfBirth,address, email, mobileNumber, occupation){
    
    await db.query( `INSERT INTO  user (userNic,firstName ,lastName,gender,dateOfBirth,type,email, phoneNumber,address) VALUES (?,?,?,?,?,?,?,?,?)`,
    [NIC,firstName,lastName,gender,dateOfBirth,'6',email,mobileNumber,address]);
   
 
    await db.query( `INSERT INTO medical_staff(staffId, bloodCenterNo, type, userNic) VALUES (?,?,?,?)`,
    [ '',centerNumber,'doctor',NIC]);
    
}
 

module.exports = { insertDoctor ,getBloodCenterNumber } 
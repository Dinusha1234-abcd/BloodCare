const db = require('../../../db');


async function updateMedicalOfficer(id,firstName,lastName,NIC,gender,dateOfBirth,address, email, mobileNumber){
    const rows = await db.query(`
        UPDATE  user 
        INNER JOIN  medical_staff  
        ON user.userNic = medical_staff.userNic 
        SET user.userNic =?, 
            user.firstName =? , 
            user.lastName =? , 
            user.gender =? , 
            user.dateOfBirth =?  , 
            user.email  =?, 
            user.address =?,
            user.phoneNumber =?   
        WHERE medical_staff.staffId=?`,
        [NIC,firstName,lastName, gender,dateOfBirth , email, address,mobileNumber,id]);
  
}

module.exports = {updateMedicalOfficer} 
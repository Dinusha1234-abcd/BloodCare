const db = require('../db');



async function insertfoodType(firstName,lastName,nic,phoneNumber,email, address,groupNumber,blood,gender,dateOfBirth ,hashPassword,bloodCounterNumber){
    await db.query( `INSERT INTO user (userNic,firstName, lastName,gender,dateOfBirth,type,email,phoneNumber,address,workStatus) VALUES(?,?,?,?,?,?,?,?,?,?)`,
    [nic,firstName,lastName, '', '','5',email,phoneNumber,address,'1']);
    await db.query( `INSERT INTO login (userName,password) VALUES(?,?)`,
    [nic,hashPassword]);
    await db.query( `INSERT INTO register_donor (registerDonorId,province,district,userNic) VALUES(?,?,?,>)`,
    [nic,'western', 'Colombo',nic ]);
    donorId =  await db.query( `SELECT registerDonorId FROM register_donor WHERE userNic=?`,
    [nic]);
    await db.query( `INSERT INTO blood_donation (campNumber,bloodCounterNumber,registedDonorId) VALUES(?,?,?)`,
    [ '2',bloodCounterNumber, donorId]);
    await db.query( `INSERT INTO blood_counter (bloodCounterNo,BloodType,bloodRHtype) VALUES(?,?,?)`,
    [ bloodCounterNumber,blood, groupNumber]);
    await db.query( `INSERT INTO registerdonorbloodgroup (id,bloodType,bloodRHtype) VALUES(?,?,?)`,
    [ donorId,blood, groupNumber]);
    

}
module.exports ={insertfoodType}

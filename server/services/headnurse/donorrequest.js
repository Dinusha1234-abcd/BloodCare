const db = require('../db');


async function getDonorRequest(){
    const rows =await db.query( `SELECT  firstName,email,phoneNumber,address FROM user`);
    const data =rows;
    return rows;
}

module.exports = {getDonorRequest}
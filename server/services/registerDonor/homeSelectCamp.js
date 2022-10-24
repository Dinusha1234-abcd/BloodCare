const db = require('../db');


async function getdonorProvince(regDonorNic){
    const rows = await db.query( `SELECT province FROM register_donor WHERE userNic=?`,[regDonorNic]);
    return rows;
}

async function getCamp(province,date){
    const rows =await db.query( `SELECT blood_camp.date, blood_camp.name, blood_camp.place FROM blood_camp INNER JOIN blood_center ON blood_camp.bloodCenterNo=blood_center.bloodCenterNo WHERE status='accept' && blood_center.province=? && blood_camp.date >= ?`,[province, date]);
    const data =rows;
    return rows;
}

module.exports = {getdonorProvince,getCamp}

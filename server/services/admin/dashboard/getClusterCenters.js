const db = require('../../db');

async function getClusterCenters() {

    const rows = await db.query(`
    SELECT COUNT(bloodCenterNo ) AS clusters FROM blood_center
    `);
    return  rows ;
}
module.exports = {getClusterCenters}
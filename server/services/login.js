const db = require('./db');
// const config = require('../config');

async function userLogin(){
    const rows = await db.query( `SELECT * FROM user` );
    const data = rows;
    return  rows ;
}

module.exports = { userLogin } 
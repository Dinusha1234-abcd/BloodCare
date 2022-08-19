const db = require('./db');
// const config = require('../config');

async function userForgetPasword(userName){
    const rows = await db.query( `SELECT * FROM login INNER JOIN user ON login.userName = user.userNic INNER JOIN roles ON roles.id=user.type WHERE login.userName=?`,[userName]);
    const data = rows;
    return  rows ;
}

async function userPasswordChange(userName){
    const rows = await db.query( `SELECT * FROM login INNER JOIN user ON login.userName = user.userNic INNER JOIN roles ON roles.id=user.type WHERE login.userName=?`,[userName]);
    const data = rows;
    return  rows ;
}


module.exports = { userForgetPasword , userPasswordChange} 
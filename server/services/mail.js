const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const CLIENT_ID = '889967778654-6mqekk4ab71v14qs4oce44nrpb70pctc.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04aTdSubg3SWwCgYIARAAGAQSNwF-L9IrBs0Wo6AYy9zNGrru027raobNde3ADLnGoNMPzk561rucjis-uVIsyxsWKAwe9nbkbCM'


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token : REFRESH_TOKEN});

async function sendMail(email) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service : 'gmail',
            auth:{
                type : 'OAuth2',
                user : 'bloodcare100@gmail.com',
                clientId : CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken : REFRESH_TOKEN,
                accessToken : accessToken
            }
        })
        const mailOption = {
            from : 'BloodCare' , 
            to : email,
            subject : 'Your Reset Password PIN Number',
            text : 'hello',
            html : '<h>Your Pin Number is 4000</h>'
        }
        const result = await transport.sendMail(mailOption)
        return result
    } catch (error) {
        
    }
}
 

module.exports = { sendMail } 
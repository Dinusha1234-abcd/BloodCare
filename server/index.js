const express = require("express");  
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8070; // asign the port number
const login = require('./routes/login');
const forgetPassword = require('./routes/forgetPassword');
const passwordChange = require('./routes/passwordChange');
const campRegister  = require('./routes/campRegister'); 
 
app.max_user_connections = 100;

//clusterAdmin
 
const addDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/addDoctor');
const selectDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/selectDoctor'); 
const updateDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/updateDoctor');
const removeDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/removeDoctor');

const addHeadNurse = require('./routes/clusterAdmin/medicalStaff/headNurse/addHeadNurse');
const selectHeadNurse = require('./routes/clusterAdmin/medicalStaff/headNurse/selectHeadNurse'); 
const updateHeadNurse = require('./routes/clusterAdmin/medicalStaff/headNurse/updateHeadNurse');
const removeHeadNurse = require('./routes/clusterAdmin/medicalStaff/headNurse/removeHeadNurse');

const addNurse = require('./routes/clusterAdmin/medicalStaff/nurse/addNurse');
const selectNurse = require('./routes/clusterAdmin/medicalStaff/nurse/selectNurse');
const updateNurse = require('./routes/clusterAdmin/medicalStaff/nurse/updateNurse');
 

const addDriver = require('./routes/clusterAdmin/medicalStaff/driver/addDriver');
const selectDriver = require('./routes/clusterAdmin/medicalStaff/driver/selectDriver'); 
const updateDriver = require('./routes/clusterAdmin/medicalStaff/driver/updateDriver'); 

 
const selectDonor = require('./routes/clusterAdmin/registerDonor/selectDonor'); 



//registerDonor
const homeSelectCamp = require('./routes/registerDonor/homeSelectCamp');
const historyRecordsSelect =require('./routes/registerDonor/historyRecordsSelect');
 

//admin
const addClusterAdmin = require('./routes/admin/users/clusterAdmin/addClusterAdmin');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));
require("dotenv").config();
app.use(
    express.urlencoded({
        extended:true,
    }) 
) 

app.get("/",(req,res) => {
    res.json({message : "ok"})
});
app.use("/login",login);
app.use("/forgetpassword",forgetPassword);
app.use("/passwordchange",passwordChange);
app.use("/camp/register",campRegister);

//cluster Admin

//medicalStaff
app.use("/medicalstaff/doctor",addDoctor);
app.use("/medicalstaff/selectdoctor",selectDoctor);
app.use("/medicalstaff/updatedoctor",updateDoctor);
app.use("/medicalstaff/removedoctor",removeDoctor);
app.use("/Medicalstaff/headNurse",addHeadNurse);
app.use("/medicalstaff/selectHeadNurse", selectHeadNurse);
app.use("/medicalstaff/updateHeadNurse", updateHeadNurse);
app.use("/medicalstaff/removeHeadNurse",removeHeadNurse);
app.use("/medicalstaff/nurse"   ,addNurse);
app.use("/medicalstaff/selectNurse",selectNurse);
app.use("/medicalstaff/updateNurse",updateNurse);
app.use("/medicalstaff/driver",addDriver);
app.use("/medicalstaff/selectdriver",selectDriver);
app.use("/medicalstaff/updatedriver",updateDriver);

//Donor
app.use("/registerdonor/selectdonor",selectDonor);




//register Donor
app.use("/registerDonor/homeSelectCamp",homeSelectCamp);
app.use("/registerDonor/historyRecordsSelect",historyRecordsSelect);


//admin
app.use("/users/addClusterAdmin",addClusterAdmin);



app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})
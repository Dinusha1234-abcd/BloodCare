const express = require("express");  
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8070; // asign the port number
const login = require('./routes/login');
const forgetPassword = require('./routes/forgetPassword');
const passwordChange = require('./routes/passwordChange');
const campRegister  = require('./routes/campRegister')
app.maxConnections = 100;

//clusterAdmin
const addDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/addDoctor');
const selectDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/selectDoctor'); 
const updateDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/updateDoctor');
const addNurse = require('./routes/clusterAdmin/medicalStaff/nurse/addNurse');
const selectNurse = require('./routes/clusterAdmin/medicalStaff/nurse/selectNurse');
const updateNurse = require('./routes/clusterAdmin/medicalStaff/nurse/updateNurse');
const addDriver = require('./routes/clusterAdmin/medicalStaff/driver/addDriver');
const selectDriver = require('./routes/clusterAdmin/medicalStaff/driver/selectDriver'); 
const updateDriver = require('./routes/clusterAdmin/medicalStaff/driver/updateDriver'); 






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
app.use("/medicalstaff/doctor",addDoctor);
app.use("/medicalstaff/selectdoctor",selectDoctor);
app.use("/medicalstaff/updatedoctor",updateDoctor);
app.use("/medicalstaff/nurse"   ,addNurse);
app.use("/medicalstaff/selectNurse",selectNurse);
app.use("/medicalstaff/updateNurse",updateNurse);
app.use("/medicalstaff/driver",addDriver);
app.use("/medicalstaff/selectdriver",selectDriver);
app.use("/medicalstaff/updatedriver",updateDriver);
 
 

app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})
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
app.max_user_connections = 200;

//clusterAdmin

const pendingCamp = require('./routes/clusterAdmin/camp/pendingCamp/selectPendingCamp');
const pendingCampView = require('./routes/clusterAdmin/camp/pendingCamp/pendingCampView');
const getMedicalStaff = require('./routes/clusterAdmin/camp/pendingCamp/getStaffMembers')
const campStatus = require('./routes/clusterAdmin/camp/pendingCamp/statusPendingCamp');
const assignStaff = require('./routes/clusterAdmin/camp/pendingCamp/assignStaff');
const upcomingCamp = require('./routes/clusterAdmin/camp/upcomingCamp/selectUpcomingCamp');
const upcomingCampView = require('./routes/clusterAdmin/camp/upcomingCamp/upcomingCampView');
const getRegisters = require('./routes/clusterAdmin/camp/upcomingCamp/getRegisters');
const ongoingCampView = require('./routes/clusterAdmin/camp/ongoingCamp/ongoingCampView');
const getRegistersOngoing = require('./routes/clusterAdmin/camp/ongoingCamp/getRegisters');
const pastCamp = require('./routes/clusterAdmin/camp/pastCamp/selectpastCamp');
const ongoingCamp = require('./routes/clusterAdmin/camp/ongoingCamp/selectOngoingCamp')
const pastCampView = require('./routes/clusterAdmin/camp/pastCamp/pastCampView'); 
const pastCampDonors = require('./routes/clusterAdmin/camp/pastCamp/getDonotion');

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
const removeNurse = require('./routes/clusterAdmin/medicalStaff/nurse/removeNurse'); 

const addDriver = require('./routes/clusterAdmin/medicalStaff/driver/addDriver');
const selectDriver = require('./routes/clusterAdmin/medicalStaff/driver/selectDriver'); 
const updateDriver = require('./routes/clusterAdmin/medicalStaff/driver/updateDriver'); 
const removeDriver = require('./routes/clusterAdmin/medicalStaff/driver/removeDriver'); 
 
const selectDonor = require('./routes/clusterAdmin/registerDonor/selectDonor'); 



//registerDonor
const homeSelectCamp = require('./routes/registerDonor/homeSelectCamp');
const historyRecordsSelect =require('./routes/registerDonor/historyRecordsSelect');
const campAllDetail =require('./routes/registerDonor/campAllDetail');

const profileDetail =require('./routes/registerDonor/profileDetail');


//admin

const addClusterAdmin = require('./routes/admin/users/clusterAdmin/addClusterAdmin');
const selectClusterAdmin = require('./routes/admin/users/clusterAdmin/selectClusterAdmin');

const selectMedicalOfficer = require('./routes/admin/users/medicalOfficer/selectMedicalOfficer');
const addMedicalOfficer = require('./routes/admin/users/medicalOfficer/addMedicalOfficer');
const removeMedicalOfficer = require('./routes/admin/users/medicalOfficer/removeMedicalOfficer');

const selectDoctorAdmin = require('./routes/admin/users/doctor/selectDoctor');
const selectHeadNurseAdmin = require('./routes/admin/users/headNurse/selectHeadNurse');
const selectNurseAdmin = require('./routes/admin/users/nurse/selectNurse');
const selectOrganizerAdmin = require('./routes/admin/users/organizer/selectOrganizer');
const selectDriverAdmin = require('./routes/admin/users/driver/selectDriver');
const selectDonorAdmin = require('./routes/admin/users/donor/selectDonor');

const selectClusterCenter = require('./routes/admin/clusterCenter/selectClusterCenter');
const addClusterCenter = require('./routes/admin/clusterCenter/addClusterCenter');


//headnurse
const upcommingcamp = require('./routes/headnurse/upcommingcamp');
const donors = require('./routes/headnurse/donors');
 




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
app.use("/camp/selectpendingcamp",pendingCamp); 
app.use("/camp/selectupcomingcamp",upcomingCamp); 
app.use("/camp/selectupcomingcampview",upcomingCampView); 

app.use("/camp/selectongoingcamp",ongoingCamp); 
app.use("/camp/selectpastcamp",pastCamp); 
app.use("/camp/pendingcampview",pendingCampView); 
app.use("/camp/staffmembers",getMedicalStaff); 
app.use("/camp/confirmationcamp",campStatus); 
app.use("/camp/assigncamp",assignStaff); 
app.use("/camp/registercampusers",getRegisters); 
app.use("/camp/assigncamp",ongoingCampView); 
app.use("/camp/registercampusers",getRegistersOngoing); 
app.use("/camp/pastcampview",pastCampView); 
app.use("/camp/getpastcampdonors",pastCampDonors); 

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
app.use("/medicalstaff/removenurse",removeNurse);
app.use("/medicalstaff/driver",addDriver);
app.use("/medicalstaff/selectdriver",selectDriver);
app.use("/medicalstaff/updatedriver",updateDriver);
app.use("/medicalstaff/removeDriver",removeDriver);
 
app.use("/registerdonor/selectdonor",selectDonor);




//register Donor
app.use("/registerDonor/homeSelectCamp",homeSelectCamp);
app.use("/registerDonor/historyRecordsSelect",historyRecordsSelect);
app.use("/registerDonor/campAllDetail",campAllDetail);

app.use("/registerDonor/profileDetail",profileDetail);


//admin

app.use("/users/addClusterAdmin",addClusterAdmin);
app.use("/users/selectClusterAdmin",selectClusterAdmin);

app.use("/users/selectMedicalOfficer", selectMedicalOfficer);
app.use("/users/addMedicalOfficer", addMedicalOfficer);
app.use("/users/removeMedicalOfficer", removeMedicalOfficer);

app.use("/users/selectDoctor", selectDoctorAdmin);
app.use("/users/selectHeadNurse", selectHeadNurseAdmin);
app.use("/users/selectNurse", selectNurseAdmin);
app.use("/users/selectOrganizer", selectOrganizerAdmin);
app.use("/users/selectDriver", selectDriverAdmin);
app.use("/users/selectDonor", selectDonorAdmin);

app.use("/clusterCenter/selectClusterCenter", selectClusterCenter);
app.use("/clusterCenter/addClusterCenter", addClusterCenter);



//headnurse
// app.use("/headnurse/upcommingamp.js",upcommingamp);
app.use("/headnurse/donors",donors);


app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})
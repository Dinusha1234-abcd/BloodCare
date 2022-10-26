const express = require("express");  
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8070; // asign the port number
const login = require('./routes/login');
const forgetPassword = require('./routes/forgetPassword');
const passwordChange = require('./routes/passwordChange');
const campRegister  = require('./routes/campRegister'); 
const clusterCenter = require('./routes/getClusterCenter'); 
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

const opositiveCount = require('./routes/clusterAdmin/blood/O/Opositive');
const opositiveCamp = require('./routes/clusterAdmin/blood/O/OpositiveGetCamp');
const onegativeCount = require('./routes/clusterAdmin/blood/O/Onegative');
const onegativeCamp = require('./routes/clusterAdmin/blood/O/OnegativeGetCamp');

const apositiveCount = require('./routes/clusterAdmin/blood/A/Apositive');
const apositiveCamp = require('./routes/clusterAdmin/blood/A/ApositiveGetCamp');
const anegativeCount = require('./routes/clusterAdmin/blood/A/Anegative');
const anegativeCamp = require('./routes/clusterAdmin/blood/A/AnegativeGetCamp');

const abpositiveCount = require('./routes/clusterAdmin/blood/AB/ABpositive');
const abpositiveCamp = require('./routes/clusterAdmin/blood/AB/ABpositiveGetCamp');
const abnegativeCount = require('./routes/clusterAdmin/blood/AB/ABnegative');
const abnegativeCamp = require('./routes/clusterAdmin/blood/AB/ABnegativeGetCamp');

const bpositiveCount = require('./routes/clusterAdmin/blood/B/Bpositive');
const bpositiveCamp = require('./routes/clusterAdmin/blood/B/BpositiveGetCamp');
const bnegativeCount = require('./routes/clusterAdmin/blood/B/Bnegative');
const bnegativeCamp = require('./routes/clusterAdmin/blood/B/BnegativeGetCamp');

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

const getCamp = require('./routes/clusterAdmin/calender/calender');

const selectDonor = require('./routes/clusterAdmin/registerDonor/selectDonor'); 

const medicalstaff = require('./routes/clusterAdmin/dashboard/getMedicalStaff')
const camp = require('./routes/clusterAdmin/dashboard/getCamps');
const blood = require('./routes/clusterAdmin/dashboard/getBlood');

//registerDonor
const homeSelectCamp = require('./routes/registerDonor/homeSelectCamp');
const historyRecordsSelect =require('./routes/registerDonor/historyRecordsSelect');
const campAllDetail =require('./routes/registerDonor/campAllDetail');
const registerform =require('./routes/registerDonor/registerform');

const profileDetail =require('./routes/registerDonor/profileDetail');
const profileUpdate =require('./routes/registerDonor/profileUpdate');

//admin

const addClusterAdmin = require('./routes/admin/users/clusterAdmin/addClusterAdmin');
const selectClusterAdmin = require('./routes/admin/users/clusterAdmin/selectClusterAdmin');
const removeClusterAdmin = require('./routes/admin/users/clusterAdmin/removeClusterAdmin');

const selectMedicalOfficer = require('./routes/admin/users/medicalOfficer/selectMedicalOfficer');
const addMedicalOfficer = require('./routes/admin/users/medicalOfficer/addMedicalOfficer');
const removeMedicalOfficer = require('./routes/admin/users/medicalOfficer/removeMedicalOfficer');
const updateMedicalOfficer = require('./routes/admin/users/medicalOfficer/updateMedicalOfficer');

const selectDoctorAdmin = require('./routes/admin/users/doctor/selectDoctor');
const removeDoctorAdmin = require('./routes/admin/users/doctor/removeDoctor');

const selectHeadNurseAdmin = require('./routes/admin/users/headNurse/selectHeadNurse');
const removeHeadNurseAdmin = require('./routes/admin/users/headNurse/removeHeadNurse');
const selectNurseAdmin = require('./routes/admin/users/nurse/selectNurse');
const removeNurseAdmin = require('./routes/admin/users/nurse/removeNurse');
const selectOrganizerAdmin = require('./routes/admin/users/organizer/selectOrganizer');
const removeOrganizerAdmin = require('./routes/admin/users/organizer/removeOrganizer');
const selectDriverAdmin = require('./routes/admin/users/driver/selectDriver');
const selectDonorAdmin = require('./routes/admin/users/donor/selectDonor');

const selectClusterCenter = require('./routes/admin/clusterCenter/selectClusterCenter');
const addClusterCenter = require('./routes/admin/clusterCenter/addClusterCenter');
const removeClusterCenter = require('./routes/admin/clusterCenter/removeClusterCenter');


//headnurse
const upcommingcamp = require('./routes/headnurse/upcommingcamp');
const donors = require('./routes/headnurse/donors');
//const register = require('./routes/headnurse/registerdonor');
const pastcamp = require('./routes/headnurse/pastcamp');
const donorrequest = require('./routes/headnurse/donorrequest');
const donordetails = require('./routes/headnurse/donordetails');

//medical officer

const pendingCampMO = require('./routes/medicalOfficer/camp/pendingCamp/selectPendingCamp');
const pendingCampViewMO = require('./routes/medicalOfficer/camp/pendingCamp/pendingCampView');
const getMedicalStaffMO = require('./routes/medicalOfficer/camp/pendingCamp/getStaffMembers')
const campStatusMO = require('./routes/medicalOfficer/camp/pendingCamp/statusPendingCamp');
const assignStaffMO = require('./routes/medicalOfficer/camp/pendingCamp/assignStaff');
const upcomingCampMO = require('./routes/medicalOfficer/camp/upcomingCamp/selectUpcomingCamp');
const upcomingCampViewMO = require('./routes/medicalOfficer/camp/upcomingCamp/upcomingCampView');
const getRegistersMO = require('./routes/medicalOfficer/camp/upcomingCamp/getRegisters');
const ongoingCampViewMO = require('./routes/medicalOfficer/camp/ongoingCamp/ongoingCampView');
const getRegistersOngoingMO = require('./routes/medicalOfficer/camp/ongoingCamp/getRegisters');
const pastCampMO = require('./routes/medicalOfficer/camp/pastCamp/selectpastCamp');
const ongoingCampMO = require('./routes/medicalOfficer/camp/ongoingCamp/selectOngoingCamp')
const pastCampViewMO = require('./routes/medicalOfficer/camp/pastCamp/pastCampView'); 
const pastCampDonorsMO = require('./routes/medicalOfficer/camp/pastCamp/getDonotion');

const opositiveCountMO = require('./routes/medicalOfficer/blood/O/Opositive');
const opositiveCampMO = require('./routes/medicalOfficer/blood/O/OpositiveGetCamp');
const onegativeCountMO = require('./routes/medicalOfficer/blood/O/Onegative');
const onegativeCampMO = require('./routes/medicalOfficer/blood/O/OnegativeGetCamp');

const apositiveCountMO = require('./routes/medicalOfficer/blood/A/Apositive');
const apositiveCampMO = require('./routes/medicalOfficer/blood/A/ApositiveGetCamp');
const anegativeCountMO = require('./routes/medicalOfficer/blood/A/Anegative');
const anegativeCampMO = require('./routes/medicalOfficer/blood/A/AnegativeGetCamp');

const abpositiveCountMO = require('./routes/medicalOfficer/blood/AB/ABpositive');
const abpositiveCampMO = require('./routes/medicalOfficer/blood/AB/ABpositiveGetCamp');
const abnegativeCountMO = require('./routes/medicalOfficer/blood/AB/ABnegative');
const abnegativeCampMO = require('./routes/medicalOfficer/blood/AB/ABnegativeGetCamp');

const bpositiveCountMO = require('./routes/medicalOfficer/blood/B/Bpositive');
const bpositiveCampMO = require('./routes/medicalOfficer/blood/B/BpositiveGetCamp');
const bnegativeCountMO = require('./routes/medicalOfficer/blood/B/Bnegative');
const bnegativeCampMO = require('./routes/medicalOfficer/blood/B/BnegativeGetCamp');

const addDoctorMO = require('./routes/medicalOfficer/medicalStaff/doctor/addDoctor');
const selectDoctorMO = require('./routes/medicalOfficer/medicalStaff/doctor/selectDoctor'); 
const updateDoctorMO = require('./routes/medicalOfficer/medicalStaff/doctor/updateDoctor');
const removeDoctorMO = require('./routes/medicalOfficer/medicalStaff/doctor/removeDoctor');

const addHeadNurseMO = require('./routes/medicalOfficer/medicalStaff/headNurse/addHeadNurse');
const selectHeadNurseMO = require('./routes/medicalOfficer/medicalStaff/headNurse/selectHeadNurse'); 
const updateHeadNurseMO = require('./routes/medicalOfficer/medicalStaff/headNurse/updateHeadNurse');
const removeHeadNurseMO = require('./routes/medicalOfficer/medicalStaff/headNurse/removeHeadNurse');

const addNurseMO = require('./routes/medicalOfficer/medicalStaff/nurse/addNurse');
const selectNurseMO = require('./routes/medicalOfficer/medicalStaff/nurse/selectNurse');
const updateNurseMO = require('./routes/medicalOfficer/medicalStaff/nurse/updateNurse');
const removeNurseMO = require('./routes/medicalOfficer/medicalStaff/nurse/removeNurse'); 

const addDriverMO = require('./routes/medicalOfficer/medicalStaff/driver/addDriver');
const selectDriverMO = require('./routes/medicalOfficer/medicalStaff/driver/selectDriver'); 
const updateDriverMO = require('./routes/medicalOfficer/medicalStaff/driver/updateDriver'); 
const removeDriverMO = require('./routes/medicalOfficer/medicalStaff/driver/removeDriver'); 

const getCampMO = require('./routes/medicalOfficer/calender/calender');

const selectDonorMO = require('./routes/medicalOfficer/registerDonor/selectDonor'); 

const medicalstaffMO = require('./routes/medicalOfficer/dashboard/getMedicalStaff')
const campMO = require('./routes/medicalOfficer/dashboard/getCamps');
const bloodMO = require('./routes/medicalOfficer/dashboard/getBlood');


//home
const addCamp = require('./routes/campRegister');



//const getCampsData = require('./routes/showCamps');
 


const getCampsData = require('./routes/showCamps');
const joinCamp = require('./routes/donorRegister');








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

app.use("/blood/opostivecount",opositiveCount);
app.use("/blood/opositivecamp",opositiveCamp)

app.use("/blood/onegativecount",onegativeCount);
app.use("/blood/onegativecamp",onegativeCamp)

app.use("/blood/apositivecount",apositiveCount);
app.use("/blood/apositivecamp",apositiveCamp)

app.use("/blood/anegativecount",anegativeCount);
app.use("/blood/anegativecamp",anegativeCamp)

app.use("/blood/bpositivecount",bpositiveCount);
app.use("/blood/bpositivecamp",bpositiveCamp)

app.use("/blood/bnegativecount",bnegativeCount);
app.use("/blood/bnegativecamp",bnegativeCamp)

app.use("/blood/abpositivecount",abpositiveCount);
app.use("/blood/abpositivecamp",abpositiveCamp);

app.use("/blood/abnegativecount",abnegativeCount);
app.use("/blood/abnegativecamp",abnegativeCamp)

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
app.use("/calender/getdates",getCamp);

app.use("/dashboard/medicalstaff",medicalstaff);
app.use("/dashboard/camp",camp);
app.use("/dashboard/blood",blood);


//register Donor
app.use("/registerDonor/homeSelectCamp",homeSelectCamp);
app.use("/registerDonor/historyRecordsSelect",historyRecordsSelect);
app.use("/registerDonor/campAllDetail",campAllDetail);
app.use("/registerDonor/registerform",registerform);

app.use("/registerDonor/profileDetail",profileDetail);
app.use("/registerDonor/profileUpdate",profileUpdate);



//admin

app.use("/users/addClusterAdmin",addClusterAdmin);
app.use("/users/selectClusterAdmin",selectClusterAdmin);
app.use("/users/removeClusterAdmin",removeClusterAdmin);

app.use("/users/selectMedicalOfficer", selectMedicalOfficer);
app.use("/users/addMedicalOfficer", addMedicalOfficer);
app.use("/users/removeMedicalOfficer", removeMedicalOfficer);
app.use("/users/updateMedicalOfficer", updateMedicalOfficer);

app.use("/users/selectDoctor", selectDoctorAdmin);
app.use("/users/removeDoctor", removeDoctorAdmin);

app.use("/users/selectHeadNurse", selectHeadNurseAdmin);
app.use("/users/removeHeadNurse", removeHeadNurseAdmin);
app.use("/users/selectNurse", selectNurseAdmin);
app.use("/users/removeNurse", removeNurseAdmin);
app.use("/users/selectOrganizer", selectOrganizerAdmin);
app.use("/users/removeOrganizer", removeOrganizerAdmin);
app.use("/users/selectDriver", selectDriverAdmin);
app.use("/users/selectDonor", selectDonorAdmin);

app.use("/clusterCenter/selectClusterCenter", selectClusterCenter);
app.use("/clusterCenter/addClusterCenter", addClusterCenter);
app.use("/clusterCenter/removeClusterCenter", removeClusterCenter);



//headnurse

app.use("/headnurse/upcommingcamp",upcommingcamp);
//app.use("/headnurse/registerdonor",register);
app.use("/headnurse/donors",donors);
app.use("/headnurse/pastcamp",pastcamp);
app.use("/headnurse/donorrequest",donorrequest);
app.use("/headnurse/donordetails",donordetails);

//medical officer
app.use("/camp/selectpendingcamp",pendingCampMO); 
app.use("/camp/selectupcomingcamp",upcomingCampMO); 
app.use("/camp/selectupcomingcampview",upcomingCampViewMO); 

app.use("/camp/selectongoingcamp",ongoingCampMO); 
app.use("/camp/selectpastcamp",pastCampMO); 
app.use("/camp/pendingcampview",pendingCampViewMO); 
app.use("/camp/staffmembers",getMedicalStaffMO); 
app.use("/camp/confirmationcamp",campStatusMO); 
app.use("/camp/assigncamp",assignStaffMO); 
app.use("/camp/registercampusers",getRegistersMO); 
app.use("/camp/assigncamp",ongoingCampViewMO); 
app.use("/camp/registercampusers",getRegistersOngoingMO); 
app.use("/camp/pastcampview",pastCampViewMO); 
app.use("/camp/getpastcampdonors",pastCampDonorsMO); 

app.use("/blood/opostivecount",opositiveCountMO);
app.use("/blood/opositivecamp",opositiveCampMO)

app.use("/blood/onegativecount",onegativeCountMO);
app.use("/blood/onegativecamp",onegativeCampMO)

app.use("/blood/apositivecount",apositiveCountMO);
app.use("/blood/apositivecamp",apositiveCampMO)

app.use("/blood/anegativecount",anegativeCountMO);
app.use("/blood/anegativecamp",anegativeCampMO)

app.use("/blood/bpositivecount",bpositiveCountMO);
app.use("/blood/bpositivecamp",bpositiveCampMO)

app.use("/blood/bnegativecount",bnegativeCountMO);
app.use("/blood/bnegativecamp",bnegativeCampMO)

app.use("/blood/abpositivecount",abpositiveCountMO);
app.use("/blood/abpositivecamp",abpositiveCampMO);

app.use("/blood/abnegativecount",abnegativeCountMO);
app.use("/blood/abnegativecamp",abnegativeCampMO)

app.use("/medicalstaff/doctor",addDoctorMO);
app.use("/medicalstaff/selectdoctor",selectDoctorMO);
app.use("/medicalstaff/updatedoctor",updateDoctorMO);
app.use("/medicalstaff/removedoctor",removeDoctorMO);
app.use("/Medicalstaff/headNurse",addHeadNurseMO);
app.use("/medicalstaff/selectHeadNurse", selectHeadNurseMO);
app.use("/medicalstaff/updateHeadNurse", updateHeadNurseMO);
app.use("/medicalstaff/removeHeadNurse",removeHeadNurseMO);
app.use("/medicalstaff/nurse"   ,addNurseMO);
app.use("/medicalstaff/selectNurse",selectNurseMO);
app.use("/medicalstaff/updateNurse",updateNurseMO);
app.use("/medicalstaff/removenurse",removeNurseMO);
app.use("/medicalstaff/driver",addDriverMO);
app.use("/medicalstaff/selectdriver",selectDriverMO);
app.use("/medicalstaff/updatedriver",updateDriverMO);
app.use("/medicalstaff/removeDriver",removeDriverMO);
 
app.use("/registerdonor/selectdonor",selectDonorMO);
app.use("/calender/getdates",getCampMO);

app.use("/dashboard/medicalstaff",medicalstaffMO);
app.use("/dashboard/camp",campMO);
app.use("/dashboard/blood",bloodMO);


//home
//app.use("/showCamps", getCampsData);
app.use("/campRegister", addCamp);
app.use("/donorRegister", joinCamp);
app.use("/clusterCenter", clusterCenter);




app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})
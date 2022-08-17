import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/page.login";

//import Pages
//Admin
import AdminDashboard from "./pages/page.admin.dashboard";
import AdminUsers from "./pages/page.admin.users";

//Cluster Admin
import ClusterAdminDashboard from "./pages/page.clusterAdmin.dashboard";
import ClusterAdminCalendar from "./pages/page.clusterAdmin.calendar"
import ClusterAdminBloodCamp from './pages/page.clusterAdmin.bloodCamp';
import ClusterAdminMedicalStaff from './pages/page.clusterAdmin.medicalStaff';
import ClusterAdminDonors from './pages/page.clusterAdmin.donors';
import ClusterAdminBlood from './pages/page.clusterAdmin.blood';

 
//Medical Officer
import MedicalOfficerDashboard from "./pages/page.medicalofficer.dashboard";

//Head Nurse
import HeadNurseDashboard from "./pages/page.headnurse.dashboard";
import HeadNurseAssignCamps from "./pages/page.headnurse.assigncamps";



//Register Donor
import RegDonorDashboard from "./pages/page.regdonor.dashboard";
import RegDonorCalender from "./pages/page.regdonor.calendar";
import RegDonorHistory from './pages/page.regdonor.history';
import RegDonorCamp from './pages/page.regdonor.camp';
import RegisterForm from './pages/page.regdonor.registerform';
import RegDonorProfile from './pages/page.regdonor.profile';

function App() {
   //admin routes
   if (localStorage.getItem("type") === "1") {
      return (
         <BrowserRouter>
            <Routes>
               <Route path='/dashboard' exact element={<AdminDashboard />} />
               <Route path='/login' exact element={<AdminDashboard />} />
               <Route path='/users' exact element={<AdminUsers />} />
               <Route path='/users/medicalofficer' exact element={<AdminUsers />} />
               <Route path='/users/clusteradmin' exact element={<AdminUsers />} />
               <Route path='/users/doctor' exact element={<AdminUsers />} />
               <Route path='/users/headnurse' exact element={<AdminUsers />} />
               <Route path='/users/nurse' exact element={<AdminUsers />} />
               <Route path='/users/driver' exact element={<AdminUsers />} />
               <Route path='/users/organizer' exact element={<AdminUsers />} />
               <Route path='/users/donor' exact element={<AdminUsers />} />
            </Routes>
         </BrowserRouter>
      )
   }
   //cluster admin routes
   else if (localStorage.getItem("type") === "2") {
      return (
      <BrowserRouter>
         <Routes>

            <Route path='/dashboard' exact element={<ClusterAdminDashboard />} />
            <Route path='/login' exact element={<ClusterAdminDashboard />} />
            <Route path='/calendar' exact element={<ClusterAdminCalendar />} />
            <Route path='/bloodcamp' exact element={<ClusterAdminBloodCamp />} />
            <Route path='/bloodcamp/pastcamp' exact element={<ClusterAdminBloodCamp />} />
            <Route path='/bloodcamp/ongoingcamp' exact element={<ClusterAdminBloodCamp />} />
            <Route path='/bloodcamp/futurecamp' exact element={<ClusterAdminBloodCamp />} />
            <Route path='/bloodcamp/pendingcamp' exact element={<ClusterAdminBloodCamp />} />
            <Route path='/medicalstaff' exact element={<ClusterAdminMedicalStaff />} />
            <Route path='/medicalstaff/doctor' exact element={<ClusterAdminMedicalStaff />} />
            <Route path='/medicalstaff/headNurse' exact element={<ClusterAdminMedicalStaff />} />
            <Route path='/medicalstaff/nurse' exact element={<ClusterAdminMedicalStaff />} />
            <Route path='/medicalstaff/driver' exact element={<ClusterAdminMedicalStaff />} />
            <Route path='/donors' exact element={<ClusterAdminDonors />} />
            <Route path='/blood' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/Opositive' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/Onegative' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/Apositive' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/Anegative' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/Bpositive' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/Bnegative' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/ABpositive' exact element={<ClusterAdminBlood />} />
            <Route path='/blood/ABNegative' exact element={<ClusterAdminBlood />} />
         </Routes>
   </BrowserRouter>)
   }
   //medical Officers routes
   else if (localStorage.getItem("type") === "3") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element={<MedicalOfficerDashboard />} />
            <Route path='/login' exact element={<MedicalOfficerDashboard />} />
         </Routes>
      </BrowserRouter>)

   }
   //head Nurse routes
   else if (localStorage.getItem("type") === "4") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element={<HeadNurseDashboard />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/headnurseassigncamps' exact element={<HeadNurseAssignCamps />} />


         </Routes>
      </BrowserRouter>)
   }
   //register donor routes
   else if (localStorage.getItem("type") === "5") {
      return (<BrowserRouter>
         <Routes>

            <Route path='/dashboard' exact element={ <RegDonorDashboard /> }/> 
            <Route path='/login' exact element={ <RegDonorDashboard /> }/> 
            <Route path='/calender' exact element={ <RegDonorCalender /> }/> 
            <Route path='/history_records' exact element={ <RegDonorHistory />}/>
            <Route path='/blood_camps' exact element={ <RegDonorCamp />}/>
            <Route path='/blood_camps/register' exact element={ <RegisterForm />}/>
            <Route path='/profile' exact element={ <RegDonorProfile />}/>
         </Routes>
      </BrowserRouter>)
   }
   else {
      return (<BrowserRouter>
         <Routes>
            <Route path='/login' exact element={<Login />} />

         </Routes>
      </BrowserRouter>)
   }


}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/page.login";
import ForgetPassword from './pages/page.forgetPassword';
//import Pages
//Admin
import AdminDashboard from "./pages/page.admin.dashboard";
import AdminUsers from "./pages/page.admin.users";
import AdminBloodCamp from './pages/page.admin.bloodCamp';
import AdminClusterCenter from './pages/page.admin.clustercenter';
import AdminCalendar from "./pages/page.admin.calendar";
/*import AdminAnnoucement from "./pages/page.admin.announcement";*/

//Cluster Admin
import ClusterAdminDashboard from "./pages/page.clusterAdmin.dashboard";
import ClusterAdminCalendar from "./pages/page.clusterAdmin.calendar"
import ClusterAdminBloodCamp from './pages/page.clusterAdmin.bloodCamp';
import ClusterAdminMedicalStaff from './pages/page.clusterAdmin.medicalStaff';
import ClusterAdminDonors from './pages/page.clusterAdmin.donors';
import ClusterAdminBlood from './pages/page.clusterAdmin.blood'; 
import {ClusterAdminPendingCampView , ClusterAdminPastCampView } from './pages/page.clusterAdmin.campView';
  
//Medical Officer
import MedicalOfficerDashboard from "./pages/page.medicalofficer.dashboard";
import MedicalOfficerCalendar from "./pages/page.medicalofficer.calendar";
import MedicalOfficerBloodCamp from './pages/page.medicalofficer.bloodCamp';
import MedicalOfficerMedicalStaff from './pages/page.medicalofficer.medicalStaff';
import MedicalOfficerDonors from './pages/page.medicalofficer.donors';
import MedicalOfficerBlood from './pages/page.medicalofficer.blood'; 
import {MedicalOfficerPendingCampView , MedicalOfficerPastCampView } from './pages/page.medicalofficer.campView';

//Head Nurse
import HeadNurseDashboard from "./pages/page.headnurse.dashboard";
import HeadNurseAssignCamps from "./pages/page.headnurse.assigncamps";
import HeadNursePastCamps from "./pages/page.headnurse.pastcamps";
import HeadNurseDonorRequests from "./pages/page.headnurse.donorrequests";
import HeadNurseProfile from "./pages/page.headnurse.profile";
import HeadNurseDonorDetails from "./pages/page.headnurse.donordetails";
import HeadNurseDonors from "./pages/page.headnurse.donors";
import HeadNurseAddNewDonors from "./pages/page.headnurse.registerform";
import HeadNurseSummaryWork from "./pages/page.headnurse.summary";


//Register Donor
import RegDonorDashboard from "./pages/page.regdonor.dashboard";
import RegDonorCalender from "./pages/page.regdonor.calendar";
import RegDonorHistory from './pages/page.regdonor.history';
import RegDonorCamp from './pages/page.regdonor.camp';
import RegisterForm from './pages/page.regdonor.registerform';
import RegDonorProfile from './pages/page.regdonor.profile';

//home
import LandingPage from "./pages/page.home.landingPage";
import Camps from "./pages/page.home.camps";
import RegisterCamp from "./pages/page.home.registerCamp";

import HeadNurseSummary from './pages/page.headnurse.summary';

import navbar from './components/component.home.navbar';



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
               
               <Route path='/calendar' exact element={<AdminCalendar />} />

               <Route path='/clustercenter' exact element={<AdminClusterCenter />} />

               <Route path='/bloodcamps' exact element={<AdminBloodCamp />} />
               <Route path='/bloodcamps/ongoingcamp' exact element={<AdminBloodCamp />} />
               <Route path='/bloodcamps/upcomingcamp' exact element={<AdminBloodCamp />} />
               <Route path='/bloodcamps/completedcamp' exact element={<AdminBloodCamp />} />
               <Route path='/' exact element={<LandingPage />} />
               <Route path='/camps' exact element={<Camps />} />
               <Route path='/registercamp' exact element={<RegisterCamp />} />

              {/*<Route path='/announcement' exact element={<AdminAnnoucement />} />*/}

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
            <Route path='/bloodcamp/pendingcampView/:name/:id/:place/:mobile/:email' exact element={<ClusterAdminPendingCampView />} />
            <Route path='/bloodcamp/pastcampView/:name/:id/:place/:mobile/:email' exact element={<ClusterAdminPastCampView />} />
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
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/camps' exact element={<Camps />} />
            <Route path='/registercamp' exact element={<RegisterCamp />} />
            </Routes>
         </BrowserRouter>)
 
   }
   //medical Officers routes
   else if (localStorage.getItem("type") === "3") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element={<MedicalOfficerDashboard />} />
            <Route path='/login' exact element={<MedicalOfficerDashboard />} />
            <Route path='/calendar' exact element={<MedicalOfficerCalendar />} />
            <Route path='/bloodcamp' exact element={<MedicalOfficerBloodCamp />} />
            <Route path='/bloodcamp/pastcamp' exact element={<MedicalOfficerBloodCamp />} />
            <Route path='/bloodcamp/ongoingcamp' exact element={<MedicalOfficerBloodCamp />} />
            <Route path='/bloodcamp/futurecamp' exact element={<MedicalOfficerBloodCamp />} />
            <Route path='/bloodcamp/pendingcamp' exact element={<MedicalOfficerBloodCamp />} />
            <Route path='/bloodcamp/pendingcampView/:name/:id/:place/:mobile/:email' exact element={<MedicalOfficerPendingCampView />} />
            <Route path='/bloodcamp/pastcampView/:name/:id/:place/:mobile/:email' exact element={<MedicalOfficerPastCampView />} />
            <Route path='/medicalstaff' exact element={<MedicalOfficerMedicalStaff />} />
            <Route path='/medicalstaff/doctor' exact element={<MedicalOfficerMedicalStaff />} />
            <Route path='/medicalstaff/headNurse' exact element={<MedicalOfficerMedicalStaff />} />
            <Route path='/medicalstaff/nurse' exact element={<MedicalOfficerMedicalStaff />} />
            <Route path='/medicalstaff/driver' exact element={<MedicalOfficerMedicalStaff />} />
            <Route path='/donors' exact element={<MedicalOfficerDonors />} />
            <Route path='/blood' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/Opositive' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/Onegative' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/Apositive' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/Anegative' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/Bpositive' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/Bnegative' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/ABpositive' exact element={<MedicalOfficerBlood />} />
            <Route path='/blood/ABNegative' exact element={<MedicalOfficerBlood />} />
            <Route path='/' exact element={ <LandingPage /> } />
            <Route path='/camps' exact element={<Camps />} />
            <Route path='/registercamp' exact element={<RegisterCamp />} />
         </Routes>
      </BrowserRouter>)

   }
   //head Nurse routes
   else if (localStorage.getItem("type") === "4") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element={<HeadNurseDashboard />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/headnurse/assigncamps' exact element={<HeadNurseAssignCamps />} />
            <Route path='/headnurse/pastcamps' exact element={<HeadNursePastCamps />} />
            <Route path='/headnurse/donorrequests' exact element={<HeadNurseDonorRequests />} />
            <Route path='/headnurse/profile' exact element={<HeadNurseProfile />} />
            <Route path='/' exact element={ <LandingPage /> } />
            <Route path='/camps' exact element={<Camps />} />
            <Route path='/registercamp' exact element={<RegisterCamp />} />
            <Route path='/headnurse/donordetails' exact element={<HeadNurseDonorDetails />} />
            <Route path='/headnurse/donors' exact element={<HeadNurseDonors />} />
            <Route path='/headnurse/addnewdonor' exact element={<HeadNurseAddNewDonors />} />
            <Route path='/headnurse/summarywork' exact element={<HeadNurseSummaryWork />} />

         </Routes>
      </BrowserRouter>)
   }

   //register donor routes
   else if (localStorage.getItem("type") === "5") {
      return (<BrowserRouter>
         <Routes>

            <Route path='/dashboard' exact element={<RegDonorDashboard />} />
            <Route path='/login' exact element={<RegDonorDashboard />} />
            <Route path='/calender' exact element={<RegDonorCalender />} />
            <Route path='/history_records' exact element={<RegDonorHistory />} />
            <Route path='/blood_camps' exact element={<RegDonorCamp />} />
            <Route path='/blood_camps/register' exact element={<RegisterForm />} />
            <Route path='/profile' exact element={<RegDonorProfile />} />
            <Route path='/' exact element={ <LandingPage /> } />
            <Route path='/camps' exact element={<Camps />} />
            <Route path='/registercamp' exact element={<RegisterCamp />} />
         </Routes>
      </BrowserRouter>)
   }
   else {
      return (<BrowserRouter>
         <Routes>
            <Route path='/login' exact element={<Login />} />
            <Route path='/forgetpassword' exact element={<ForgetPassword />} />
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/camps' exact element={<Camps />} />
            <Route path='/registercamp' exact element={<RegisterCamp />} />
         </Routes>
      </BrowserRouter>)
   }


}

export default App;

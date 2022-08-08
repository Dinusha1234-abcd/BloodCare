import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/page.login";

//import Pages
//Admin
import AdminDashboard from "./pages/page.admin.dashboard";

//Cluster Admin
import ClusterAdminDashboard from "./pages/page.clusterAdmin.dashboard";
import ClusterAdminBloodCamp from './pages/page.clusterAdmin.bloodCamp';
//Medical Officer
import MedicalOfficerDashboard from "./pages/page.medicalofficer.dashboard";

//Head Nurse
import HeadNurseDashboard from "./pages/page.headnurse.dashboard";



//Register Donor
import RegDonorDashboard from "./pages/page.regdonor.dashboard"; 
import RegDonorCalender from "./pages/page.regdonor.calendar"; 

 
function App() {
    //admin routes
   if (localStorage.getItem("type") === "1") {
      return (
         <BrowserRouter>
            <Routes>
               <Route path='/dashboard' exact element={ <AdminDashboard /> } /> 
               <Route path='/login' exact element={ <AdminDashboard /> } /> 
            </Routes>
         </BrowserRouter>
      )
   }
   //cluster admin routes
   else if (localStorage.getItem("type") === "2") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element= {<ClusterAdminDashboard/>}/> 
            <Route path='/login' exact element={<ClusterAdminDashboard/>} />
            <Route path='/bloodcamp'  exact element={<ClusterAdminBloodCamp/>}/>
             <Route path='/bloodcamp/pastcamp'  exact element={<ClusterAdminBloodCamp/>}/>
             <Route path='/bloodcamp/ongoingcamp'  exact element={<ClusterAdminBloodCamp/>}/>
         
         </Routes>
      </BrowserRouter>)
   }
   //medical Officers routes
   else if (localStorage.getItem("type") === "3") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element={ <MedicalOfficerDashboard/>} />  
            <Route path='/login' exact element={ <MedicalOfficerDashboard/>} />  
         </Routes>
      </BrowserRouter>)

   }
   //head Nurse routes
   else if (localStorage.getItem("type") === "4") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element={  <HeadNurseDashboard />}/>  
            <Route path='/login' exact element={  <HeadNurseDashboard />}/>  
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

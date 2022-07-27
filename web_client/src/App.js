import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/page.login";
import AdminDashboard from "./pages/page.admin.dashboard";
import ClusterAdminDashboard from "./pages/page.clusterAdmin.dashboard";
import MedicalOfficerDashboard from "./pages/page.medicalofficer.dashboard";
import HeadNurseDashboard from "./pages/page.headnurse.dashboard";
import RegDonorDashboard from "./pages/page.regdonor.dashboard"; 
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
   //register Nurse routes
   else if (localStorage.getItem("type") === "5") {
      return (<BrowserRouter>
         <Routes>
            <Route path='/dashboard' exact element={ <RegDonorDashboard /> }/> 
            <Route path='/login' exact element={ <RegDonorDashboard /> }/> 
         </Routes>
      </BrowserRouter>)
   }
   else {
      return (<BrowserRouter>
         <Routes>
            <Route path='/login' exact element={<Login />} />
            <Route path='/dashboard' exact element={<Login />} />
         </Routes>
      </BrowserRouter>)
   }


}

export default App;

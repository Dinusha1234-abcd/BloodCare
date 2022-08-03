import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/page.login";
import AdminDashboard from "./pages/page.admin.dashboard";
import ClusterAdminDashboard from "./pages/page.clusterAdmin.dashboard";
import MedicalOfficerDashboard from "./pages/page.medicalofficer.dashboard";
import HeadNurseDashboard from "./pages/page.headnurse.dashboard";
import RegDonorDashboard from "./pages/page.regdonor.dashboard";
import RegDonorCalender from "./pages/page.regdonor.calendar"; 
import User from "./components/component.users.display";
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
            <Route path='/user'  exact element={<User/>}/> 
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
             <Route path='/user'  exact element={<User/>}/> 
        
         </Routes>
      </BrowserRouter>)
   }


}

export default App;

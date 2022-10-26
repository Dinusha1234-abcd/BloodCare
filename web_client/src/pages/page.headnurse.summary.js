import React, { useState, useEffect } from "react";
import axios from 'axios';
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.summary.css';
import blood_dot_sum from '../assests/images/report.png';
import sum_doctor from '../assests/images/doctor.png';
import sum_driver from '../assests/images/driver.png';
import sum_headnurse from '../assests/images/headnurseprofile.png';
import sum_donor from '../assests/images/donor.png';
import sum_officer from '../assests/images/mo.png';
import sum_nurse from '../assests/images/nurse.png';
import Blood from "../components/headnurse/component.blood.display.headnurse";





export default function HeadNurseSummaryWork() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false);
    const [date, setDate] = useState(new Date())

    const passData = (data) => {
      setSlideMenu(data);
    };


    useEffect((() => { getSummary() }), [])
  

    function getSummary() {
      axios.get("http://localhost:8070/headnurse/summary").then(
          (res) => {
              setData(res.data.summary);
              console.log(res.data);
  
              setLoading(!loading);
          }).catch((err) => {
              //sever error
              setLoading(!loading);
              setUnsuccessMessage("Network Connection Issue Please Try Again");
              setUnSuccess(true)
          })
    }
  
 
  

    function unsucessbutton(){
      window.location = "/summarywork";
    }
  
    const list = [];
   
    
    const val = [];
    for(let j=0;j<data.length-1; j++){
    val.push(<> <h2 id ="h2-head-past">{data[j]['count']}</h2></>) }

    for(let i=0; i<data.length; i++){
      list.push (
          <> <div id="summary-box">
            <img id="blood_dot_sum" src={blood_dot_sum}  /> 
            <div id="details-summary">
              <p id="details-names-summary">Camp No : {data[i]['bloodCampNumber']}</p> <br/>
              <p id="details-names-summary">Blood Center No : {data[i]['bloodCenterNo']}</p> <br/>
              <p id="details-names-summary">Camp Name : {data[i]['name']}</p> <br/>
              <p id="details-names-summary">Date : {data[i]['date']}</p> <br/>
              <p id="details-names-summary">Location : {data[i]['place']}</p> <br/>
            </div>  

          <div id="organizer-summary">
                 <h3 id="details-organizer-summary-head">Blood Camp Organizer</h3> <br/>
                 <p id="details-organizer-summary">Name: {data[i]['organizerName']}</p> <br/>
                 <p id="details-organizer-summary">NIC : {data[i]['nic']}</p> <br/>
                 <p id="details-organizer-summary">Phone : {data[i]['phoneNumber']}</p> <br/>
                 
           </div>
            
          
            <div id="sub-row2-headnurse-summary">
              <h3 id ="blood-sum">Blood Counter Details</h3>
             <div id="blood-headnurse"> 
              <div id = "c-blood-summary" > 
              <div id="blood-count-camp1-1-summary"> <h3 id="blood-name-summary">O+</h3> <h4 id = "blood-cont-summary">{data[i]['Opositive']}</h4></div>
              <div id="blood-count-camp1-2-summary"> <h3 id="blood-name-summary">O-</h3> <h4 id = "blood-cont-summary">{data[i]['Onegative']}</h4></div>
              <div id="blood-count-camp1-3-summary"> <h3 id="blood-name-summary">A+</h3> <h4 id = "blood-cont-summary">{data[i]['Apositive']}</h4></div>
              <div id="blood-count-camp1-4-summary"> <h3 id="blood-name-summary">A-</h3> <h4 id = "blood-cont-summary">{data[i]['Anegative']}</h4></div>
              <div id="blood-count-camp1-5-summary"> <h3 id="blood-name-summary">B+</h3> <h4 id = "blood-cont-summary">{data[i]['Bpositive']}</h4></div>
              <div id="blood-count-camp1-6-summary"> <h3 id="blood-name-summary">B-</h3> <h4 id = "blood-cont-summary">{data[i]['Bnegative']}</h4></div>
              <div id="blood-count-camp1-7-summary"> <h3 id="blood-name-summary">AB+</h3> <h4 id = "blood-cont-summary">{data[i]['ABpositive']}</h4></div>
              <div id="blood-count-camp1-8-summary"> <h3 id="blood-name-summary">AB-</h3> <h4 id = "blood-cont-summary">{data[i]['ABnegative']}</h4></div>
              </div>
              </div>
            </div>



            

            </div> 
          
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
          </>
      )
  }

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Summary Work"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} > 
          <input type="text" id='search-headnurse-summary' placeholder="Search.."/>
          <button type="button" id="button-headnurse-summary"> <i class="fas fa-search"></i></button> <br/>

         <div>{list}</div> 
          {/*<div id="summary-box">
          <img id="blood_dot_sum" src={blood_dot_sum}  /> 
          <div id="details-summary">
              <p id="details-names-summary">Camp No : 02</p> <br/>
              <p id="details-names-summary">Blood Center No : 11</p> <br/>
              <p id="details-names-summary">Camp Name : Camp2</p> <br/>
              <p id="details-names-summary">Date : 2022/05/22</p> <br/>
              <p id="details-names-summary">Location : Colombo</p> <br/>
              <p id="details-names-summary">Time : 8.00 am</p> 
          </div>
              
              <div id="organizer-summary">
                 <h3 id="details-organizer-summary-head">Blood Camp Organizer</h3> <br/>
                 <p id="details-organizer-summary">Organizer ID : 01</p> <br/>
                 <p id="details-organizer-summary">Name: Mr. Perera</p> <br/>
                 <p id="details-organizer-summary">NIC : 654218745V</p> <br/>
                 <p id="details-organizer-summary">Phone : 071-4587124</p> <br/>
                 
              </div>
           
              <button type="button" id="headnurse-summary-print"> Print Report</button>
    */}
           {/*
            <div id="staff-summary-details">
              <h3 id="header-staff-headnurse" > Assigned Staff Member Details </h3> 
               <div id="box1-staff-headnurse">
                  <img id="sum_officer" src={sum_officer}  /> 
                  <h3 id ="staff-names-headnurse">Medical Officer</h3>
                  <h3 id ="staff-names-headnurse">Dr. Nimal Perera</h3>

               </div>

               <div id="box2-staff-headnurse">
                   <img id="sum_headnurse" src={sum_headnurse}  /> 
                   <h3 id ="staff-names-headnurse">Head Nurse</h3>
                   <h3 id ="staff-names-headnurse">Mrs. Pavani <br/>Rathnayake</h3>

               </div>

               <div id="box3-staff-headnurse">
                  <img id="sum_doctor" src={sum_doctor}  /> 
                  <h3 id ="staff-names-headnurse">Doctors</h3>
                  <h3 id ="staff-names-headnurse">10</h3>
               </div>

               <div id="box4-staff-headnurse">
                   <img id="sum_nurse" src={sum_nurse}  /> 
                   <h3 id ="staff-names-headnurse">Nurse</h3>
                   <h3 id ="staff-names-headnurse">20</h3>
               </div>

               <div id="box5-staff-headnurse">
                  <img id="sum_driver" src={sum_driver}  /> 
                  <h3 id ="staff-names-headnurse">Drivers</h3>
                  <h3 id ="staff-names-headnurse">12</h3>
               </div> 
             
               <div id="box6-staff-headnurse">
                  <img id="sum_donor" src={sum_donor}  /> 
                  <h3 id ="staff-names-headnurse">Donors</h3>
                  <h3 id ="staff-names-headnurse">200</h3>
               </div> 
              
            </div>
           <br/>
           {/*
            <div id="sub-row2-headnurse-summary">
              <h3 id ="blood-sum">Blood Counter Details</h3>
              <div id="blood-headnurse"><Blood name='O+' count='20' /><Blood name='A+' count='25'/><Blood name='B+' count='12'/><Blood name='AB+' count='34' />
              <Blood name='O-' count='21' /><Blood name='A-' count='08'/><Blood name='B-' count='07'/><Blood name='AB-' count='10'/></div>
  </div> */} 

  {/*

            <div id="summary-table-box"> <br/>  <h3 id="do-head">Donors' Details </h3>
            <table id="donor-table-headnurse">
  <tr>
    <th>Donor ID</th>
    <th>Name</th>
    <th>Blood group</th>
    <th>Phone</th>
    <th>Address</th>
    <th>NIC</th>
    <th>Action</th>

  </tr>
  <tr>
    <td>01</td>
    <td>Nimal</td>
    <td>O+</td>
    <td>071-4468712</td>
    <td>Colombo</td>
    <td>9647845412V</td>
    <td> <a href="/headnurse/donordetails"><button id ="view-donor-button-headnurse" > View</button></a></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Kamal</td>
    <td>A-</td>
    <td>071-5478413</td>
    <td>Kandy</td>
    <td>9647845412V</td>
    <td><a href="/headnurse/donordetails"><button id ="view-donor-button-headnurse" > View</button></a></td>
    
  </tr>
  <tr>
    <td>03</td>
    <td>Pasindu</td>
    <td>AB+</td>
    <td>011-1254875</td>
    <td>Matara</td>
    <td>9678845412V</td>
    <td><a href="/headnurse/donordetails"><button id ="view-donor-button-headnurse" > View</button></a></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Namal</td>
    <td>B+</td>
    <td>076-1694784</td>
    <td>Galle</td>
    <td>9647845412V</td>
    <td><a href="/headnurse/donordetails"><button id ="view-donor-button-headnurse" > View</button></a></td>
  </tr>
  <tr>
    <td>05</td>
    <td>Kasun</td>
    <td>A-</td>
    <td>077-3745896</td>
    <td>Monaragala</td>
    <td>9647845412V</td>
    <td><a href="/headnurse/donordetails"><button id ="view-donor-button-headnurse" > View</button></a></td>
  </tr>
  
  
</table>  
            </div>
*/}


 
              </div>
         
        </div> 
         
        
      );
    }  
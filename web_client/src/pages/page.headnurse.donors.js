import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.donors.css';
import boy_details from '../assests/images/boy.png';
import dot from '../assests/images/white-blood-cell.png';

export default function HeadNurseDonors() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const passData = (data) => {
      setSlideMenu(data);
    };

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Registered Donors"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} > 
          <div id= "search-donor-head">
             <input type="text" id='search-headnurse-donors' placeholder="Search.."/>
          </div>
<div id="headnurse-donor-box"> 
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
    <td> <button id ="view-donor-button-headnurse" > View</button></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Kamal</td>
    <td>A-</td>
    <td>071-5478413</td>
    <td>Kandy</td>
    <td>9647845412V</td>
    <td><button id ="view-donor-button-headnurse" > View</button></td>
    
  </tr>
  <tr>
    <td>03</td>
    <td>Pasindu</td>
    <td>AB+</td>
    <td>011-1254875</td>
    <td>Matara</td>
    <td>9678845412V</td>
    <td><button id ="view-donor-button-headnurse" > View</button></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Namal</td>
    <td>B+</td>
    <td>076-1694784</td>
    <td>Galle</td>
    <td>9647845412V</td>
    <td><button id ="view-donor-button-headnurse" > View</button></td>
  </tr>
  <tr>
    <td>05</td>
    <td>Kasun</td>
    <td>A-</td>
    <td>077-3745896</td>
    <td>Monaragala</td>
    <td>9647845412V</td>
    <td><button id ="view-donor-button-headnurse" > View</button></td>
  </tr>
  
  
</table>
          </div>
          
          

          
        </div> 
        </div>
        
      );
    }    
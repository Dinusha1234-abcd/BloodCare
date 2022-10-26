import React, { useState, useEffect } from "react";
import axios from 'axios';
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.donors.css';
import boy_details from '../assests/images/boy.png';
import dot from '../assests/images/white-blood-cell.png';

export default function HeadNurseDonors() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false); 

    const passData = (data) => {
      setSlideMenu(data);
    };

    useEffect((() => { getDonors() }), [])

    function getDonors() {
      axios.get("http://localhost:8070/headnurse/donors").then(
          (res) => {
              setData(res.data.donors);
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
      window.location = "/assigncamps";
    }
  
    const list = [];
  
    //display data in table
      //check the NIC number
      //if (searchData == "") {
          for(let i=0; i<data.length; i++){
              list.push(
                  <> <tr>
                      <td>{data[i]['registerDonorId']}</td>
                      <td>{data[i]['firstName']}</td>
                      <td>{data[i]['phoneNumber']}</td>
                      <td>{data[i]['address']}</td> 
                      <td>{data[i]['userNic']}</td> 
                      <td><button id='view-donor-button-headnurse'>View</button></td>
                      
                  </tr>
                  </>
              )
          }
      //}

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Registered Donors"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} > 
          <div id= "search-donor-head">
             <input type="text" id='search-headnurse-donors' placeholder="Search.."/>
             <button type="button" id="button-headnurse-donor-filter"> <i class="fas fa-search"></i></button>
          </div>
<div id="headnurse-donor-box"> <br/>
<table id="donor-table-headnurse">
  <tr>
    <th>Donor ID</th>
    <th>Name</th>
   {/* <th>Blood group</th> */}
    <th>Phone</th>
    <th>Address</th>
    <th>NIC</th> 
    <th>Action</th>

  </tr>

  {list}
  {/*
  <tr>
    <td>01</td>
    <td>Nimal</td>
    <td>O+</td>
    <td>071-4468712</td>
    <td>Colombo</td>
    <td>9647845412V</td>
    <td><a href="/headnurse/donordetails"> <button id ="view-donor-button-headnurse" > View</button> </a></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Kamal</td>
    <td>A-</td>
    <td>071-5478413</td>
    <td>Kandy</td>
    <td>9647845412V</td>
    <td><a href="/headnurse/donordetails"><button id ="view-donor-button-headnurse" > View</button> </a></td>
    
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
    <td> <a href="/headnurse/donordetails"><button id ="view-donor-button-headnurse" > View</button> </a></td>
  </tr>
    */}
  
</table>
          </div>
          
          

          
        </div> 
        </div>
        
      );
    }    
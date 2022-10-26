import React, { useState, useEffect } from "react";
import axios from 'axios';
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.donordetails.css';
import boy_details from '../assests/images/boy.png';
import dot from '../assests/images/white-blood-cell.png';

export default function HeadNurseDonorDetails() {
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
   
    useEffect((() => { getDonorDetails() }), [])

    function getDonorDetails() {
      axios.get("http://localhost:8070/headnurse/donordetails").then(
          (res) => {
              setData(res.data.donordetails);
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
                  <> <div id ="headnurse-donor-details">

                 <div id="donor-photo-headnurse">
                    <div id="donor-pic">
                       <img id="donor-img-details" src={boy_details}/>
                 </div>
                <div id="name-tag-user">
                    <h2 id = "don-name" >{data[i]['firstName']} {data[i]['lastName']}</h2>
                 </div>
            </div>
            <img id="dot" src={dot}/>
            <p id = "donor-details-p">First Name : {data[i]['firstName']}</p>
            <p id = "donor-details-p">Last Name : {data[i]['lastName']}</p>
            <p id = "donor-details-p">NIC : {data[i]['userNic']}</p>
            <p id = "donor-details-p">Phone :  {data[i]['phoneNumber']}</p>
            <p id = "donor-details-p">Address :  {data[i]['address']}</p>
            <p id = "donor-details-p">Email :  {data[i]['email']}</p>
            <p id = "donor-details-p">Gender :  {data[i]['gender']}</p>
            <p id = "donor-details-p">Date of Birth :  {data[i]['dateOfBirth']}</p>
            <p id = "donor-details-p">Blood Type : {data[i]['BloodType']}</p>
            <p id = "donor-details-p">Blood RH Type : {data[i]['BloodRHtype']}</p>
            <p id = "donor-details-p">Province : {data[i]['province']}</p>
            <p id = "donor-details-p">District : {data[i]['district']}</p>
            <p id = "donor-details-p">Donor ID : {data[i]['registerDonorId']}</p>
            <p id = "donor-details-p">Blood Counter No : {data[i]['bloodCounterNumber']}</p>
                     
                      
                  </div>
                  </>
              )
          }

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Registered Donors"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} > 

          <div>
            {list}
          </div>  
            {/*<div id="donor-photo-headnurse">
               <div id="donor-pic">
                   <img id="donor-img-details" src={boy_details}/>
               </div>
               <div id="name-tag-user">
                    <h2 id = "don-name" > Mr. Nimal Perera</h2>
               </div>
            </div>
            <img id="dot" src={dot}/>
            <p id = "donor-details-p">First Name : Nimal</p>
            <p id = "donor-details-p">Last Name : Perera</p>
            <p id = "donor-details-p">NIC : 985214795V</p>
            <p id = "donor-details-p">Phone :  077- 14578412</p>
            <p id = "donor-details-p">Address :  Colombo</p>
            <p id = "donor-details-p">Email :  nimal@gmail.com</p>
            <p id = "donor-details-p">Blood Group : A+</p>
    */}
          


          
        </div> 
        </div>
        
      );
    }    
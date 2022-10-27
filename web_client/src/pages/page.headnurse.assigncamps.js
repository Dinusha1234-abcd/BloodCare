import React, { useState,useCallback, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.assigncamps.css';
import Upcomming from '../assests/images/upcomming.png';
import Past from '../assests/images/past.png';


export default function HeadNurseAssignCamps() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false); 

    const passData = (data) => {
      setSlideMenu(data);
    };
   
    useEffect((() => { getUpcommingCamp() }), [])

    function getUpcommingCamp() {
      axios.get("http://localhost:8070/headnurse/upcommingcamp").then(
          (res) => {
              setData(res.data.upcommingcamp);
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
                  <> <div id="camp1">
                      <p id="p-head">{data[i]['name']}</p>
                      <p id="p-head">{data[i]['date']}</p>
                      <p id="p-head">{data[i]['place']}</p>
                     
                        <Link id='button1' to={`${'/headnurse/donorrequests/'+data[i]['bloodCampNumber']+'/'}`}><p id="bu-name">View Requested Donors</p> </Link>
                    
                      
                  </div>
                  <br></br> 
                  </>
              )
          }
 


    return (
        <div>
          <SlideMenuHeadNurse headerName={"Blood Camps"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
         

            <div id="view-count">
            <a href="/headnurse/assigncamps">
              <div id="upcomming-camp" > 
              <img id="camp-img" src={Upcomming}/>
                <h3 id ="h3-head">Upcomming Blood Camps</h3>
                <h2 id ="h2-head">{data.length}</h2>  
              </div> </a>
            
              <a href="/headnurse/pastcamps">
              <div id="past-camp"  >
              <img id="camp-img" src={Past}/>
                <h3 id ="h3-head">Past Blood Camps</h3> 
                <h2 id ="h2-head" ></h2> 
              </div> </a>
            </div>
               
              <h1 id ="h1-head">Your Upcomming Blood Camps</h1>
              <input type="text" id='search-headnurse-assigncamps' placeholder="Search.."/>
              <button type="button" id="button-headnurse"> <i class="fas fa-search"></i></button> 
               <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br>
          </div>
          
          <div >   
             {list}
             </div>
         
 
          
          
          {/*
          <div id="camp1">
                <h4 id ="h4-head">Wednsday, August 12, 2022</h4>
                <a href="/headnurse/donorrequests">
                <button type="button" id="button1" > view requested donors </button> </a>
                 <p id ="p-head"> <i class="fa-solid fa-location-dot"></i> University of colombo</p>
                 <p id ="p-head">  <i class="fa-solid fa-clock"></i> at 2.00 pm</p>
                 <p id ="p-head">Western Province</p> 
          </div>
          <div id="camp2">
                <h4 id ="h4-head">Tuesday, July 30, 2022</h4>
                <a href="/headnurse/donorrequests">
                <button type="button" id="button2" > view requested donors </button> </a>
                 <p id ="p-head"> <i class="fa-solid fa-location-dot"></i> Town hall, colombo </p>
                 <p id ="p-head">  <i class="fa-solid fa-clock"></i> at 8.00 am</p>
                 <p id ="p-head">Western Province</p> 
          </div>
          <div id="camp3">
                <h4 id ="h4-head">Monday, July 29, 2022</h4>
                <a href="/headnurse/donorrequests">
                <button type="button" id="button3" > view requested donors </button></a>
                 <p id ="p-head"> <i class="fa-solid fa-location-dot"></i> Gampaha </p>
                 <p id ="p-head">  <i class="fa-solid fa-clock"></i> at 9.45 am</p>
                 <p id ="p-head">Western Province</p> 
          </div>
          <div id="camp4">
                <h4 id ="h4-head">Tuesday, October 30, 2022</h4>
                <a href="/headnurse/donorrequests">
                <button type="button" id="button4" > view requested donors </button></a>
                 <p id ="p-head"> <i class="fa-solid fa-location-dot"></i> Colombo </p>
                 <p id ="p-head">  <i class="fa-solid fa-clock"></i> at 11.00 am</p>
                 <p id ="p-head">Western Province</p> 
          </div>
    */}
         
        </div>
     
      );
    }   

    
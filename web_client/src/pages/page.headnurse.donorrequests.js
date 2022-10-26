import React, { useState, useEffect } from "react";
import axios from 'axios';
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.donorrequests.css';
import Upcomming from '../assests/images/upcomming.png';
import Past from '../assests/images/past.png';
import donorheadnurse from '../assests/images/donor.png';
import man from '../assests/images/man.png';
import boy from '../assests/images/boy.png';
import woman from '../assests/images/woman.png';
import { useParams } from "react-router-dom"; 



export default function HeadNurseDonorRequests() {

    const {id} = useParams();
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

    useEffect((() => { getDonorRequest() }), [])

    function getDonorRequest() {
     const campNumber = id ;      
      const camp = {
         campNumber,
      }

      axios.post("http://localhost:8070/headnurse/donorrequest" , camp).then(
          (res) => {
              setData(res.data.donorrequest);
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
                  <> <div id="user1">
                      <img id="man" src={man}/>
                      <h4 id="h4-user">{data[i]['firstName']}</h4>
                      <a href="/headnurse/addnewdonor">
                  
                      <button type="button" id="button1-user" > Register </button>
                      </a>
                      <p id="p-user"> {data[i]['email']}</p>
                      <p id="p-user"> {data[i]['phoneNumber']}</p>
                      <p id="p-user">{data[i]['address']}</p>
                      
                      
                  </div>
                  <br></br> 
                  </>
              )
          }

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Donor Requests"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
              <div id="donor-count-headnurse" > 
              <img id="donor-img" src={donorheadnurse}/>
                <h3 id ="h3-user">Total Requested Dornors</h3>
                <h2 id ="h2-user">{data.length}</h2>  
              </div>
            
              <input type="text" id='search' placeholder="Search.."/>
              <button type="button" id="button-headnurse-user"> <i class="fas fa-search"></i></button>  
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div >   
             {list}
          </div>
{/*
          <div id="user1">
                <img id="man" src={man}/>
                <h4 id ="h4-user">User1</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button1-user"> Register </button> </a>
                 <p id ="p-user">  user1@gmail.com</p>
                 <p id ="p-user">   Colombo</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user2">
                <img id="boy" src={boy}/>
                <h4 id ="h4-user">User2</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button2-user" > Register </button></a>
                 <p id ="p-user">  user2@gmail.com </p>
                 <p id ="p-user">  Gampaha</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user3">
          <img id="woman" src={woman}/>
                <h4 id ="h4-user">User3</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button3-user" >Register </button></a>
                 <p id ="p-user"> user3@gmail.com </p>
                 <p id ="p-user">  Matara</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user4">
          <img id="man" src={man}/>
                <h4 id ="h4-user">User4</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button4-user" > Register </button></a>
                 <p id ="p-user"> user4@gmail.com</p>
                 <p id ="p-user"> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user5">
          <img id="boy" src={boy}/>
                <h4 id ="h4-user">User5</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button5-user" > Register </button></a>
                 <p id ="p-user"> user5@gmail.com</p>
                 <p id ="p-user"> Colombo</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user6">
          <img id="woman" src={woman}/>
                <h4 id ="h4-user">User6</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button6-user" > Register </button></a>
                 <p id ="p-user"> user6@gmail.com </p>
                 <p id ="p-user"> Gampaha</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user7">
          <img id="man" src={man}/>
                <h4 id ="h4-user">User7</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button7-user" >Register </button></a>
                 <p id ="p-user"> user7@gmail.com </p>
                 <p id ="p-user"> Matara</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user8">
          <img id="boy" src={boy}/>
                <h4 id ="h4-user">User8</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button8-user" > Register </button></a>
                 <p id ="p-user"> user8@gmail.com</p>
                 <p id ="p-user"> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user9">
          <img id="woman" src={woman}/>
                <h4 id ="h4-user">User9</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button9-user" > Register </button></a>
                 <p id ="p-user"> user9@gmail.com</p>
                 <p id ="p-user"> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>

    */}
              
        </div>
        
      );
    }   

    
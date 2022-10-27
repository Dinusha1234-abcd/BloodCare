import React , { useState ,  useEffect}from "react";
import axios from 'axios';
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DatePicker from "react-datepicker";
import '../assests/css/component.bigCalendar.css';
import '../assests/css/page.regdonor.calendar.css';
export default function RegDonorCalender() {
  const [slidemenu, setSlideMenu] = useState(true);
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [camps, setCamps] = useState([]);

    const passData = (data) => {
        setSlideMenu(data);
    };
    const locales = {
      "en-US": require("date-fns/locale/en-US")
  }


  const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales
  })
  useEffect((() => { getDate() }), [])
  function getDate() {

    const registerDonorNic = localStorage.getItem('userNic');
     const registerDonor = {
        registerDonorNic
     } 
     axios.post("http://localhost:8070/registerDonor/donorCalendar/getregDonorCamp",registerDonor).then(
        (res) => {
            console.log(registerDonorNic);
            setData(res.data.camps);
            setLoading(!loading);
        }).catch((err) => {
            //sever error
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true)
        })

}
function getCamp() {

    const clusterAdminNic = localStorage.getItem('userNic');
     const clusterAdmin = {
         clusterAdminNic
     } 
     axios.post("http://localhost:8070/dashboard/getcamps",clusterAdmin).then(
          (res) => {

              setData(res.data.camps);
              setLoading(!loading);
          }).catch((err) => {
              //sever error
              setLoading(!loading);
              setUnsuccessMessage("Network Connection Issue Please Try Again");
              setUnSuccess(true)
          })

  }
  const list = [{
      title: "Camp 12",
      allDay: true,
      start: new Date(2022, 7, 14),
      end: new Date(2022, 7, 14)

  },
  {
      title: 'Camp 14',
      start: new Date(2022, 7, 14),
      end: new Date(2022, 7, 14)
  }
  ];

  const events = [];
    for (let i = 0; i < data.length; i++) {
      
        events.push(
            {
                
              title: 'Camp ' +data[i]['bloodCampNumber'],
                allDay : true,
              start: data[i]['date'].substr(0,10),  
              end:  data[i]['date'].substr(0,10) 
            }
        )
    }
    const camp = []
    for (let i = 0; i < data.length; i++) {
       if(data[i]['date'].substr(0,10)>=new Date().toISOString().slice(0, 10)){ 
        camp.push(
           
                
                <div id='clusterAdmin-calender-camp-details-events'><h> {data[i]['date'].substr(0,10)} <br/> <b>Blood camp Number {data[i]['bloodCampNumber']}</b><br/>{data[i]['name']}</h></div>
            
        )
       }
    }
  return(
    <div>
      <SlideMenuRegDonor headerName={"Calender"} passData={passData}/>
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
                <div id='regDonor-calender-box'>
                    <div id='regDonor-calender-box-display'>
                        <div id='regDonor-calendar' >
                            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 550, }} />
                        </div>
                        <div id='regDonor-calender-camp-details' >
                            <h2 id='regDonor-calender-camp-details-name'>Events</h2>
                            <div id='regDonor-calender-camp-details-events'><h> 2022/08/14 <br /> <b>Blood camp Number 12</b></h>
                            <button id="regDonor-register-button">Register</button></div>
                            <div id='regDonor-calender-camp-details-events'><h> 2022/08/14 <br /> <b>Blood camp Number 14</b></h>
                            <button id="regDonor-register-button">Register</button></div>

                        </div>
                    </div>
                </div>
            </div>
      
    </div>
    
  );
}
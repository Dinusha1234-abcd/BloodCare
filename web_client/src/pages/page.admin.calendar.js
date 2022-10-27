import React, { useState } from "react";
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import { Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DataPicker from 'react-datepicker';
import '../assests/css/component.bigCalendar.css';
import '../assests/css/admin/page.admin.calendar.css';

export default function AdminCalendar(){

    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
    setSlideMenu(data);
  };

    const locales ={
    "en-US" : require("date-fns/locale/en-US")
    } 


    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay, 
        locales
    })

    const events = [{
        title: "Camp 12",
        allDay : true,
        start : new Date(2022,7,14),
        end : new Date(2022,7,14) 

    },
    {
        title: 'Camp 14',
        start: new Date(2022,7,14),
        end: new Date(2022,7,14) 
    }
    ];

  return(
    <div>
        <SlideMenuAdmin headerName={"Calendar"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >

        <div id='admin-calender-box'> 
                <div id='admin-calender-box-display'> 
                <div id='admin-calendar' > 
                  <Calendar localizer={localizer}   events={events} startAccessor="start" endAccessor="end" style={{height:550,}}/>
                 </div> 
                  <div id='admin-calender-camp-details' >
                      <h2 id='admin-calender-camp-details-name'>Events</h2>
                      <div id='admin-calender-camp-details-events'><h> 2022-11-23 <br/> <b>ලේ දන්දීමේ මහා පිංකම</b></h></div>
                      <div id='admin-calender-camp-details-events'><h> 2022-11-04<br/> <b>Give Blood and Save a Life</b></h></div>
                      <div id='admin-calender-camp-details-events'><h> 2022-10-29<br/> <b>Blood Donation</b></h></div>
                      <div id='admin-calender-camp-details-events'><h> 2022-10-29<br/> <b>Blood Donation</b></h></div>

                      <div id="admin-edit-calendar-button">
                        <button>Edit</button>
                      </div>
                      {/* <div id="admin-add-calendar-button">
                        <button>+</button>
                      </div> */}

                  </div>
                  </div>
                 </div>
                 </div>
        
    </div>
  )
}
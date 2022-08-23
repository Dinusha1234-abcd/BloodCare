import React , { useState }from "react";
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

  const events = [{
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
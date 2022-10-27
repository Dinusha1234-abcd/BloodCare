import React , { useState }from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DatePicker from "react-datepicker";
import '../assests/css/component.bigCalendar.css';
import '../assests/css/headnurse/headnurse.calendar.css';
export default function HeadNurseCalender() {
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
      <SlideMenuHeadNurse headerName={"Calender"} passData={passData}/>
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
                <div id='headnurse-calender-box'>
                    <div id='headnurse-calender-box-display'>
                        <div id='headnurse-calendar' >
                            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 550, }} />
                        </div>
                        <div id='headnurse-calender-camp-details' >
                            <h2 id='headnurse-calender-camp-details-name'>Events</h2>
                            <div id='headnurse-calender-camp-details-events'><h> 2022/10/30 <br /> <b>Blood camp Number 1</b></h>
                           </div>
                            <div id='headnurse-calender-camp-details-events'><h> 2022/11/24 <br /> <b>Blood camp Number 2</b></h>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
      
    </div>
    
  );
}
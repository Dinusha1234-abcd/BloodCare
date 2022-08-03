import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";


export default function RegDonorCalender() {
    return(
        <div>
          <SlideMenuRegDonor headerName={"Calendar"}/>
          <diV class="calendar-rectangle">
            <div id="calendar-content" class="calendar-content"></div>

          </diV>
        </div>
        
    );  
        
   
}

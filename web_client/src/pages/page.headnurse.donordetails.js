import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.donordetails.css';
import boy_details from '../assests/images/boy.png';
import dot from '../assests/images/white-blood-cell.png';

export default function HeadNurseDonorDetails() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const passData = (data) => {
      setSlideMenu(data);
    };

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Registered Donors"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} > 

          <div id="headnurse-donor-details">
            <div id="donor-photo-headnurse">
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
            <p id = "donor-details-p">Weight :  55 kg</p>
            <p id = "donor-details-p">Hb level : 12.5g/dl</p>
            <p id = "donor-details-p">Occupation :  Teacher</p>
            <p id = "donor-details-p">Number of times blood has been donated :  2</p>
            <p id = "donor-details-p">Diseases :  No</p>
            <p id = "donor-details-p">Allergies :  No</p>
          </div>




        </div> 
        </div>
        
      );
    }    
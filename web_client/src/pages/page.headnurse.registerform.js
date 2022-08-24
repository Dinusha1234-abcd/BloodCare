import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.registerform.css';
import boy_details from '../assests/images/boy.png';
import formimage from '../assests/images/donate.png';

export default function HeadNurseAddNewDonors() {
  const [slidemenu, setSlideMenu] = useState(true);
  const [date, setDate] = useState(new Date())
  const passData = (data) => {
    setSlideMenu(data);
  };

  return (
    <div>
      <SlideMenuHeadNurse headerName={"Add New Donor"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <div id="form-headnurse-donor-reg">
          <img id="form-img-headnurse" src={formimage} />
          <form id="add-donor-headnurse">
            <br /><h2 id="donor-form-header">Donor Registration </h2>
            <button id="donor-reg-button-headnurse"> Register </button>
            <br /><label id="form-label-headnurse">Donor's Name</label> <br />
            <input type="text" id="form-input" placeholder="    First Name" />
            <input type="text" id="form-input" placeholder="    Last Name" />
            <br /><label id="form-label-headnurse">NIC</label> <br />
            <input type="text" id="form-input" />
            <br /><label id="form-label-headnurse">Phone</label> <br />
            <input type="text" id="form-input" />
            <br /><label id="form-label-headnurse">Address</label> <br />
            <input type="text" id="form-input-address" />
            <br /><label id="form-label-headnurse">Occupation</label> <br />
            <input type="text" id="form-input" />
            <br />  <label id="form-label-headnurse">Weight</label> <br />
            <input type="text" id="form-input" />
            <br /> <label id="form-label-headnurse">Blood Group</label> <br />
            <select name="blood-group-headnurse" id="blood-group-headnurse"> <br />
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </select>
            <br /><label id="form-label-headnurse">Did you donate blood before?</label> <br /> <br />
            <div id="form-label-box-headnurse">
              <label id="blood-before1-headnurse">Yes</label>
              <input type="radio" id="radio-headnurse"  value="Yes"></input>
              <label id="blood-before2-headnurse">No</label>
              <input type="radio" id="radio-headnurse"   value="No"></input>
            </div>
            <br /> <br /> <label id="form-label-headnurse">Did you have any diseases?</label> <br /> <br />
            <div id="form-label-box-headnurse">
              <label id="diseases1-headnurse">Yes</label>
              <input type="radio" id="radio-headnurse" value="Yes"></input>
              <label id="diseases2-headnurse">No</label>
              <input type="radio" id="radio-headnurse" value="No"></input>

            </div>
          </form>
        </div>



      </div>
    </div>

  );
}    
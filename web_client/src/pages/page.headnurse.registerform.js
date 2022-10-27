import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.registerform.css';
import boy_details from '../assests/images/boy.png';
import formimage from '../assests/images/donate.png';
import successImage from '../assests/images/sucess.png';
import waitImage from '../assests/images/wait.gif';

export default function HeadNurseAddNewDonors() {
  const [slidemenu, setSlideMenu] = useState(true);
  const { id } = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wait, setWait] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [unsuccessMessage, setUnsuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [unsuccess, setUnSuccess] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [medicalStaff, setMedicalStaff] = useState([]);
  const [status, setStatus] = useState("");
  const [staffAdd, setStaffAdd] = useState(false);
  const [staffNic, setStaffNic] = useState("");
  const [staffId, setStaffId] = useState("");
  const [bloodCenterNumber, setBloodCenterNumber] = useState("");
  const [staffTyoe, setStaffType] = useState("");
  const [lastRow, setLastRow] = useState(0);
  const [updateFormShow, setUpdateFormShow] = useState(false);
  const regDonorNic = localStorage.getItem('userNic');
  const [getFirstName, setFirstName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getcampName, setcampName] = useState("");
  const [value, setValue] = useState(false);
  const [message, setMessage] = useState(" ")
  const [province, setProvince] = useState("")
  const [district, setDistrict] = useState("")
  const [formReg, setFormReg] = useState("")
  const [nic, setNic] = useState("")

  const [date, setDate] = useState(new Date())

  const passData = (data) => {
    setSlideMenu(data);
  };


  // useEffect((() => { registerdonor() }), []);

  function sucessbutton() {
    window.location = "/registerCamp";
  }

  // function registerdonor(e){
  //   const Id =id;
  //   const userNic = regDonorNic;
  //  e.preventDefault()
  //   const register= {
  //       // province,
  //       // district,
  //       // userNic,
  //   }
  //   if(province.length == 0){
  //       setMessage("Please enter province");
  //   }else if(district.length == 0){
  //       setMessage("Please enter district");

  //   }else if(userNic.length == 0){
  //       setMessage("Please enter Nic");
  //   }else{
  //       setFormReg(false);
  //       setWait(true);
  //       setSuccess(true);
  //       setNic('');
  //       setProvince('');
  //       setDistrict('');
  //       e.target.reset();

  //       axios.post("http://localhost:8070/headnurse/registerdonor", register).then(
  //           (res) => {
  //               if (res['data']['message'] == "success") {
  //                   setWait(false);
  //                   setSuccessMessage("Donor Added Sucessfully")
  //                   setSuccess(true);
  //               } 
  //           }
  //       ).catch((err) =>{
  //           //sever error

  //           setWait(false);
  //           setUnsuccessMessage("Network Connection Issue Please Try Again");
  //           setUnSuccess(true)
  //       })
  //   }
  // }

   function registerdonor(){
    setSuccess(true);
   }

  function sucessbutton() {
    window.location = "/headnurse/registerdonor";
  }
  function unsucessbutton() {
    window.location = "/headnurse/registerdonor";
  }


  return (
    <div>
      <SlideMenuHeadNurse headerName={"Add New Donor"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <div id="form-headnurse-donor-reg">
          <img id="form-img-headnurse" src={formimage} />
        {/* Success message/ */}
        {/* <div id={`${success ? 'sucess-camp-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>Camp Registration Sucessfully</p> <br></br>
                    <button id="okay-camp" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div> */}
                <div id={`${success || wait ? 'fade-camp' : null}`}  ></div>
                <div id={`${wait ? 'wait-camp-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>
            
          <form id="add-donor-headnurse" onSubmit={registerdonor} >

            <br /><h2 id="donor-form-header">Donor Registration </h2>
            <button id="donor-reg-button-headnurse"> Register </button> {" "}
            <br /><label id="form-label-headnurse">Donor's Name</label> <br />
            <input type="text" id="form-input" placeholder="    First Name" onChange={(e) => { setProvince(e.target.value) }} />
           {/*<input type="text" id="form-input" placeholder="    Last Name" /> */}

             <br /><label id="form-label-headnurse">NIC</label> <br />

            <input type="text" id="form-input" onChange={(e) => { setDistrict(e.target.value) }} />
            <br /><label id="form-label-headnurse">Phone</label> <br />
            <input type="text" id="form-input" onChange={(e) => { setNic(e.target.value) }} />
            {/* <button type="sumbit" id="sumbit-button"  > Register </button> {" "} */}
            <br /><label id="form-label-headnurse">Address</label> <br />

           
            <input type="text" id="form-input-address" />

             <br />  <label id="form-label-headnurse">Email</label> <br />
            <input type="text" id="form-input" />
            <br />  <label id="form-label-headnurse">Default Password</label> <br />
            <input type="password" id="form-input" />
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
            <br />
            <br /><label id="form-label-headnurse">Blood Counter Number</label> <br />

           
            <input type="text" id="form-input" />

            <button id="donor-reg-button-headnurse"> Register </button> {" "}
            <div id={`${success ? 'sucess-camp-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>Camp Registration Sucessfully</p> <br></br>
                    <button id="okay-camp" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div>
          </form>
        </div>
      </div>








    </div>
  )

}


import {React, useState, useEffect} from "react";
import  axios  from "axios";
import styled from "styled-components";
import '../assests/css/component.doctors.css';
import '../assests/css/page.home.registerCamp.css';
import successImage from '../assests/images/sucess.png';
import waitImage from '../assests/images/wait.gif';


import NavBar from "../components/component.home.navbar";

export default function RegisterCamp() {
  const [formReg, setFormReg] = useState(false);
  const [FullName, setFullName] = useState("");
  const [NIC , setNIC]  = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [donors,setDonors] = useState("");
  const [campName , setcampName] = useState("")
  const [campDate , setcampDate] = useState("")
  const [location, setlocation] = useState("");
  const [district , setdistrict] = useState("")
  const [clusterCenter,setclusterCenter] = useState("");
  const [message,setMessage] = useState("");
  const [success, setSuccess] = useState(false)
  const [center, setCenter] =useState([]);
  const [wait, setWait] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");


  useEffect((() => {getClusterCenter() }), []);

  function getClusterCenter() { 
  axios.get("http://localhost:8070/clusterCenter" ).then(
    (res) => {
       setCenter(res.data.centers)
    }
  )
  }
  const list = []
  for (let i = 0; i < center.length; i++) {
    list.push(
      <option value={center[i]['bloodCenterNo']} >{center[i]['name']}</option>)
}
function sucessbutton() {
  window.location = "/registerCamp";
}
  function addCamp(e) {
    e.preventDefault()
    const camp = {
      FullName,
      NIC,
      email,
      mobileNumber,
      campName,
      campDate,
      location,
      district,
      clusterCenter,
      donors
    }

    if (FullName.length == 0) {
      setMessage("Please Enter Full Name ");
  } else if (!(NIC.length == 10 || NIC.length == 12)) {
      console.log(NIC.length);
      setMessage("Please Enter  Valid NIC Number ");
  } else if (email.length == 0) {
      setMessage("Please Enter Email ");

  }else if (!(mobileNumber.length == 10)) {
    setMessage("Please Enter  Valid Mobile Number");

}else if (campName.length == 0) {
    setMessage("Please Enter Camp Name ");

  } else if (!campDate) {
    setMessage("Please Enter Camp Date");

  }else if (location.length == 0) {
      setMessage("Please Enter Location ");

  } else if (!district) {
      setMessage("Please Enter District");

  }  else if (!clusterCenter) {
    setMessage("Please Enter Cluster Center");

}else {
      setFormReg(false);
      setSuccess(true);
      setFullName('');
      setNIC('');
      setmobileNumber('');
      setcampName('');
      setcampDate('');
      setlocation('');
      setdistrict('');
      setclusterCenter('');
      e.target.reset();
    

    axios.post("http://localhost:8070/camp/register", camp).then(
      (res) => {
          //check password and username  
          if (res['data']['message'] == "success") {
            setWait(false);
            setSuccessMessage("Doctor Added Sucessfully")
            setSuccess(true);
          } else {
             alert("error")
              
          }

      }
  ).catch((err) => {
      //sever error
      console.log(err.message);
  })

  }}
  return (
    <RegisteredDonorUpcomingBloodCampRoot>
      <FlexRow>
        <Ellipse src={`https://file.rendit.io/n/Z4RujQn8zYBaViRP9icN.svg`} />
      </FlexRow>
      <HeroImage>
        <FlexColumn>
          <FlexRow1>
            <Logo src={`https://file.rendit.io/n/rIXKIhzUONoiz8h8QLmu.png`} />
            <Text2>BLOODCARE</Text2>
            <NavBar />
            <Element1>
              <Text3>Blood Camp Registration</Text3>
              <Text1 />
            </Element1>
          </FlexRow1>
          <FlexRow2>
                {/* Success message/ */}
                <div id={`${success ? 'sucess-camp-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>Camp Registration Sucessfully</p> <br></br>
                    <button id="okay-camp" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div>
                <div id={`${success || wait ? 'fade-camp' : null}`}  ></div>
                <div id={`${wait ? 'wait-camp-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>
            
          <form id='register-form-camp' onSubmit={addCamp}>

                        <table id='camp-form-table'>
                            <tr>
                                <td id="camp-form-table-font-size">Full Name</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Full name" onChange={(e)=>{setFullName(e.target.value)} }  /> <br />
                                </td>
                                <td></td>
                            
                                <td id="coloum-register-camp">{"   "}NIC</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter NIC"  onChange={(e)=>{setNIC(e.target.value)}} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td id="camp-form-table-font-size">Contact</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Telephone Number" onChange={(e)=>{setmobileNumber(e.target.value)}}  /> <br />
                                </td>
                                <td></td>
                                <td id="coloum-register-camp">Email</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}  /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td id="camp-form-table-font-size">Blood Camp Name</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Camp Name"  onChange={(e)=>{setcampName(e.target.value)}} /> <br />
                                </td>
                                <td></td>
                                <td id="coloum-register-camp" >Blood Camp Date</td>
                                <td>   <input type="date" id="register-form-new-camp" placeholder="Enter Camp Date"  onChange={(e)=>{setcampDate(e.target.value)}} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td id="camp-form-table-font-size">Location</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Location"  onChange={(e)=>{setlocation(e.target.value)}}  /> <br />
                                </td>
                                <td></td>
                                <td id="coloum-register-camp">District</td>
                                <td><select id="register-form-new-camp" placeholder="Enter District"  onChange={(e)=>{setdistrict(e.target.value)}}>
                                <option value="" disabled selected>Select District</option>
                                <option value="colombo">Colombo</option>
                                <option value="galle">Galle</option>
                                <option value="kandy">Kandy</option>
                                <option value="jaffna">Jaffna</option>
                                </select> <br />
                                </td>
                            </tr>
                            <tr>
                                <td id="camp-form-table-font-size">Cluster Center</td>
                                <td>   <select id="register-form-new-camp" placeholder="Enter Cluster Center"  onChange={(e)=>{setclusterCenter(e.target.value)}}>
                                <option value="" disabled selected>Select Cluster Center</option>
                              {list}  </select><br />
                                </td>
                                <td></td>{" "}
                                <td id="coloum-register-camp">Accept Of Donors</td>

                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Number of Donors"  onChange={(e)=>{setDonors(e.target.value)}} /> <br />
                                </td>
                             
                             
                            </tr>
            
                             
                            
                        </table> <br/>
                    <button type="sumbit" id="sumbit-save-form"  > Register </button> {" "} 
                    <button   id="sumbit-cancle-form" onClick={ () =>{ setFormReg(!formReg) }}  > Cancel </button> <br/><br/>

                    </form>
                    </FlexRow2>
            </FlexColumn>
      </HeroImage>
    </RegisteredDonorUpcomingBloodCampRoot>
  );
};

//styled components

const FlexRow2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left:300px;
  align-items: center;
  text-align: center;
`;

const RegisteredDonorUpcomingBloodCampRoot = styled.div`
  width: 100%;
  height: 1162px;
  zoom: 90%;
  text-align: center;
  background-color: #f6e2e6;
  overflow: hidden;
  position: relative;
`;
const FlexRow = styled.div`
  width: 1217.86px;
  background-image: url("https://file.rendit.io/n/R4ftapaitKe0gnQMEqXK.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 472.76px 0px;
`;
const Ellipse = styled.img`
  width: 653px;
  height: 592px;
`;
const HeroImage = styled.div`
  border-color: #dd2c4f;
  border-style: solid;
  box-shadow: 0px 4px 60px 0px rgba(122, 19, 39, 0.12);
  width: 1546px;
  height: 1100px;
  background-color: #ffffff;
  overflow: hidden;
  position: absolute;
  top: 36px;
  left: 4%;
  align-items: center;
  border-radius: 50px;
  border-width: 3px;
`;
const FlexColumn = styled.div`
  height: 919.87px;
  background-image: url("https://file.rendit.io/n/SSRRB5UczcjZpq4bASzg.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 53px 3.3px 53px 47px;
`;
const FlexRow1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 64px 0px;
`;
const Logo = styled.img`
  width: 46px;
  height: 45px;
  margin: 0px 9px 0px 0px;
`;
const Text2 = styled.div`
  width: 273px;
  height: 55px;
  font-size: 24px;
  font-family: Inter;
  font-weight: bold;
  color: #e71e43;
  margin: 14px 168px 0px 0px;
`;
const Element1 = styled.div`
  align-self: stretch;
  width: 495px;
  height: 154px;
  position: relative;
  flex-grow: 1;
`;
const Text3 = styled.div`
  width: 474px;
  height: 55px;
  font-size: 36px;
  font-family: Inter;
  font-weight: 700;
  color: #161e29;
  position: absolute;
  top: 99px;
  left: 21px;
`;
const Text1 = styled.div`
  width: 368px;
  height: 42px;
  position: absolute;
  top: 67px;
`;


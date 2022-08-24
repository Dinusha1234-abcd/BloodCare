import {React, useState} from "react";
import styled from "styled-components";
import '../assests/css/component.doctors.css';
import '../assests/css/page.home.registerCamp.css';
import NavBar from "../components/component.home.navbar";
import axios from 'axios';

export default function RegisterCamp() {
  const [data, setData] = useState([]);
  const [formReg, setFormReg] = useState(false);
  const [name, setFullName] = useState("");
  const [nic , setNIC]  = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setContact] = useState("");
  const [campName , setCampName] = useState("")
  const [place , setCampPlace] = useState("")
  const [campDate , setCampDate] = useState("")
  const [location, setLocation] = useState("");
  const [district , setDistrict] = useState("")
  const [clusterCenter,setClusterCenter] = useState("");
  const [content , setContent] = useState("")
  const [file , setFile] = useState("")
  const [message,setMessage] = useState("");
  const [success, setSuccess] = useState(false)

  console.log(data[1]);
    function addDoctor(e) {
        e.preventDefault()
        const addCamp = {
            name,
            nic,
            email,
            phoneNumber,
            place,
        }
        if (name.length == 0) {
            setMessage("Please Enter First Name ");
        } else if (!(nic.length == 10 || nic.length == 12)) {
            console.log(nic.length);
            setMessage("Please Enter  Valid NIC Number ");
        } else if (place.length == 0) {
            setMessage("Please Enter  Address ");

        } else if (email.length == 0) {
            setMessage("Please Enter  Email ");

        } else if (!(phoneNumber.length == 10)) {
            setMessage("Please Enter  Valid Mobile Number");


        } else {
            setFormReg(false);
            setSuccess(true);
            setFullName('');
            setNIC('');
            setContact('');
            setEmail('');
            setCampPlace('');

            e.target.reset();
            // pass check the data with server 
            axios.post("http://localhost:8070/registerCamp", addCamp).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        window.location = "/registerCamp";

                    } else {
                        setMessage("Network Connection issue");
                        
                    }

                }
            ).catch((err) => {
                //sever error
                console.log(err.message);
            })
        }
    }

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
          <form id='register-form-camp'>

                        <table id='camp-form-table'>
                            <tr>
                                <td>Full Name</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Full name" onChange={(e)=>{setFullName(e.target.value)} }  /> <br />
                                </td>
                                <td></td>
                            
                                <td id="coloum-register-camp">{"   "}NIC</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter NIC"  onChange={(e)=>{setNIC(e.target.value)}} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Telephone Number" onChange={(e)=>{setContact(e.target.value)}}  /> <br />
                                </td>
                                <td></td>
                                <td id="coloum-register-camp">Email</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}  /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Blood Camp Name</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Camp Name"  onChange={(e)=>{setCampName(e.target.value)}} /> <br />
                                </td>
                                <td></td>
                                <td id="coloum-register-camp" >Blood Camp Date</td>
                                <td>   <input type="date" id="register-form-new-camp" placeholder="Enter Camp Date"  onChange={(e)=>{setCampDate(e.target.value)}} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter Location"  onChange={(e)=>{setLocation(e.target.value)}}  /> <br />
                                </td>
                                <td></td>
                                <td id="coloum-register-camp">District</td>
                                <td><select id="register-form-new-camp" placeholder="Enter District"  onChange={(e)=>{setDistrict(e.target.value)}}>
                                <option value="" disabled selected>Select District</option>
                                <option value="colombo">Colombo</option>
                                <option value="galle">Galle</option>
                                <option value="kandy">Kandy</option>
                                <option value="jaffna">Jaffna</option>
                                </select> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Cluster Center</td>
                                <td>   <select id="register-form-new-camp" placeholder="Enter Cluster Center"  onChange={(e)=>{setClusterCenter(e.target.value)}}>
                                <option value="" disabled selected>Select Cluster Center</option>
                                <option value="nbc">NBC</option>
                                <option value="nhsl">NHSL</option>
                                <option value="cshw">CSHW</option>
                                <option value="csth">CSTH</option>
                                </select><br />
                                </td>
                                <td></td>
                                <td id="coloum-register-camp" >Attach File</td>
                                <td>   <input type="file" id="register-form-new-camp" placeholder="Upload a flyer"  onChange={(e)=>{setFile(e.target.value)}}  /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>   <input type="text" id="register-form-new-camp" placeholder="Enter your content"  onChange={(e)=>{setContent(e.target.value)}}  /> <br />
                                </td>
                            </tr>
                             
                            
                        </table> <br/>
                    <button type="sumbit" id="sumbit-save-form" > Register </button> {" "} 
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


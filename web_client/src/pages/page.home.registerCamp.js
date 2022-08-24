import {React, useState} from "react";
import styled from "styled-components";
import '../assests/css/component.doctors.css';
import '../assests/css/page.home.registerCamp.css';
import NavBar from "../components/component.home.navbar";

export default function RegisterCamp() {
  const [formReg, setFormReg] = useState(false);
  const [FullName, setFullName] = useState("");
  const [NIC , setNIC]  = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setContact] = useState("");
  const [campName , setCampName] = useState("")
  const [campDate , setCampDate] = useState("")
  const [location, setLocation] = useState("");
  const [district , setDistrict] = useState("")
  const [clusterCenter,setClusterCenter] = useState("");
  const [content , setContent] = useState("")
  const [file , setFile] = useState("")
  const [message,setMessage] = useState("");
  const [success, setSuccess] = useState(false)

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
                                <td   >Content</td>
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
const Text4 = styled.div`
  width: 266px;
  height: 46px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  margin: ${(props) => props.margin};
`;
const WhiteRectangle = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 494px;
  height: 43px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: ${(props) => props.margin};
`;
const Akariconslocation = styled.img`
  width: 35px;
  height: 35px;
`;
const Text6 = styled.div`
  width: 266px;
  height: 46px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  position: absolute;
  left: 43px;
`;
const Text14 = styled.div`
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 500;
  line-height: 27px;
  color: #161e29;
  margin: ${(props) => props.margin};
`;
const WhiteRectangle4 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 494px;
  height: 43px;
  background-color: #ffffff;
  position: absolute;
  left: 864px;
  border-radius: 10px;
  top: ${(props) => props.top};
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
const FlexRow4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 235px;
  align-items: flex-start;
  padding: 0px 8px;
  margin: 0px 0px 29px 0px;
`;
const Element2 = styled.div`
  align-self: stretch;
  width: 494px;
  height: 85px;
  position: relative;
  flex-grow: 1;
`;
const WhiteFlexRow = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 424px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 42px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  padding: 8px 35px 0px 35px;
`;
const FlexRow5 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 181px;
  padding: 0px 8px;
  margin: 0px 0px 3px 0px;
`;
const Element3 = styled.div`
  width: 494px;
  height: 86px;
  position: relative;
  flex-grow: 1;
`;
const WhiteFlexRow1 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 408px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 34px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 7px 43px 3px 43px;
`;
const Text8 = styled.div`
  width: 166px;
  height: 33px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: rgba(0, 0, 0, 0.8);
`;
const Icroundarrowdropdown = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 41px;
  left: 439px;
`;
const Element4 = styled.div`
  width: 320px;
  height: 86px;
  position: relative;
  flex-grow: 1;
`;
const Text10 = styled.div`
  width: 266px;
  height: 46px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  position: absolute;
  top: 7px;
  left: 54px;
`;
const SilverRectangle = styled.div`
  border-color: #000000;
  border-style: solid;
  width: 202px;
  height: 38px;
  background-color: #b6b6b6;
  position: absolute;
  top: 46px;
  border-width: 1px;
`;
const Text11 = styled.div`
  width: 183px;
  height: 26px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  position: absolute;
  top: 51px;
  left: 21px;
`;
const Header = styled.div`
  width: 570px;
  display: flex;
  position: absolute;
  top: 52px;
  left: 913px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Element5 = styled.div`
  width: 59px;
  height: 45px;
  position: relative;
  flex-grow: 1;
  margin: 0px 51px 0px 0px;
`;
const Text13 = styled.div`
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 27px;
  color: #161e29;
  position: absolute;
  top: 10px;
  left: 3px;
`;
const Selector = styled.div`
  width: 59px;
  height: 4px;
  background-color: #dd2d50;
  position: absolute;
  top: 36px;
  border-radius: 20px;
`;
const Text16 = styled.button`
  text-align: center;
  font-size: 16px;
  font-family: Quicksand;
  font-weight: 500;
  line-height: 24px;
  color: #020202;
  margin: 0px 37px 0px 0px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
const RedText = styled.input`
  display: inline-block;
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 27px;
  color: #ffffff;
  width: 119px;
  height: 27px;
  background-color: #dd2d50;
  flex-direction: row;
  justify-content: center;
  border-radius: 30.5px;
  padding: 8px 0px 10px 0px;
  border-width: 0px;
  :: placeholder {
    color: #ffffff;
  }
  outline-width: 0px;
`;
const WhiteFlexRow2 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 677px;
  left: 846px;
  flex-direction: row;
  gap: 239px;
  align-items: center;
  border-radius: 10px;
  padding: 1px 20px 2px 29px;
`;
const Text17 = styled.div`
  width: 166px;
  height: 33px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: rgba(0, 0, 0, 0.8);
  align-self: flex-start;
  margin: 2px 0px 0px 0px;
`;
const Image1 = styled.img`
  width: 40px;
  height: 40px;
`;
const WhiteRectangle3 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 1169px;
  height: 59px;
  background-color: #ffffff;
  position: absolute;
  top: 880px;
  left: 189px;
  border-radius: 10px;
`;
const WhiteFlexRow3 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 463px;
  height: 36px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 551px;
  left: 864px;
  flex-direction: row;
  justify-content: flex-end;
  gap: 177px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 4px 19px 3px 19px;
`;
const Text18 = styled.div`
  width: 234px;
  height: 33px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: rgba(0, 0, 0, 0.65);
  align-self: flex-end;
`;
const Text19 = styled.div`
  width: 502px;
  height: 46px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  position: absolute;
  top: 512px;
  left: 911px;
  white-space: pre-wrap;
`;
const Text20 = styled.div`
  width: 230px;
  height: 39px;
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 796px;
  left: 1098px;
`;
const RedText1 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 36px;
  color: #ffffff;
  width: 98px;
  height: 36px;
  background-color: #dd2d50;
  position: absolute;
  top: 984px;
  left: 961px;
  flex-direction: row;
  border-radius: 30.5px;
  padding: 13px 44px 16px 34px;
`;
const TimberwolfText = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 36px;
  width: 78px;
  height: 36px;
  background-color: #d9d9d9;
  position: absolute;
  top: 984px;
  left: 1170px;
  flex-direction: row;
  border-radius: 30.5px;
  padding: 13px 55px 16px 43px;
`;

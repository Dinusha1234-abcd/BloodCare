import React, {useState,useCallback, useEffect}from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import axios from 'axios';
import '../assests/css/page.regdonor.profile.css';
import bloodo from '../assests/images/bloodOp.png';
import profileP from '../assests/images/Ellipse 11.png';
import lottie from "lottie-web";
import unsuccessImage from '../assests//images/wrong.png';
import loadingImage from '../assests/images/loading.gif';

export default function RegDonorProfile() {
    const [formReg, setFormReg] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [NIC, setNIC] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [province, setProvince] =useState("");
    const [district, setDistrict] = useState("");
    const [id, setId] = useState("");
    const [updateFirstName, setUpdateFirstName] = useState("");
    const [updateLastName, setUpdateLastName] = useState("");
    const [updateNIC, setUpdateNIC] = useState("");
    const [updateAddress, setUpdateAddress] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateMobileNumber, setUpdateMobileNumber] = useState("");
    const [updateProvince, setUpdateProvince]= useState("");
    const [updateDistrict, setUpdateDistrict]= useState("");
    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false);
    const regDonorNic = localStorage.getItem('userNic');
    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [updateFormShow, setUpdateFormShow] = useState(false);
    const [message, setMessage] = useState("");


    const passData = (data) => {
        setSlideMenu(data);
    };

    useEffect((() => {getDonorData() }), [])
    function getDonorData() {
        const regDonorNic =localStorage.getItem('userNic');
        const regDonor = {
            regDonorNic
    }
    // console.log("call");
    axios.post("http://localhost:8070/registerdonor/profileDetail",regDonor).then(
        (res) => {
            setData(res.data.profile);
            if (data.length < 11) {
                setLastRow(data.length);
            } else {
                setLastRow(10);
            }
            console.log(lastRow);
            setLoading(!loading);
        }).catch((err) => {
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Pleace Try Again");
            setUnSuccess(true)
        })
    }
    function unsucessbutton() {
        window.location = "/profile";
    }
    function showUpdateDonor(id,firstName,lastName,NIC,address,mobileNumber,email,province,district){
        setUpdateFormShow(!updateFormShow);
        setId(id)
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
        setUpdateNIC(NIC);
        setUpdateAddress(address);
        setUpdateMobileNumber(mobileNumber);
        setUpdateEmail(email); 
        setUpdateProvince(province);
        setUpdateDistrict(district);
    }

    function updateDonor(e){
        e.preventDefault()
        const donor = {
            id,
            updateFirstName, 
            updateLastName,
            updateNIC,
            updateAddress,
            updateEmail,
            updateMobileNumber,
            updateProvince,
            updateDistrict,
        }
        if (updateFirstName.length == 0) {
            setMessage("Please Enter First Name ");
        } else if (updateLastName.length == 0) {
            setMessage("Please Enter Last Name ");
        } else if (!(updateNIC.length == 10 || NIC.length == 12)) {
            console.log(updateNIC.length);
            setMessage("Please Enter  Valid NIC Number ");
        } else if (updateAddress.length == 0) {
            setMessage("Please Enter  Address ");

        } else if ( updateEmail.length == 0) {
            setMessage("Please Enter  Email ");

        } else if (!(updateMobileNumber.length == 10)) {
            setMessage("Please Enter  Valid Mobile Number");

        } else if (updateProvince.length == 0) {
            setMessage("Please Enter  Province ");
        } else if (updateDistrict == 0 ) {
            setMessage("Please Enter  District ");
        } else {
            setUpdateFormShow(false);
            // setSuccess(true);
            setUpdateFirstName('');
            setUpdateLastName('');
            setUpdateNIC('');
            setUpdateAddress('');
            setUpdateMobileNumber('');
            setUpdateEmail('');
            setUpdateProvince(province);
            setUpdateDistrict(district);
            e.target.reset();
            axios.post("http://localhost:8070/registerdonor/profileUpdate",donor).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        window.location = "/registerdonor/profileUpdate";

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
        <div>
            <SlideMenuRegDonor headerName={"Profile"} passData={passData}/>
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} ></div>
            <div>
                <img id="reg-profile-bloodOpimg" src={bloodo} />
                
            </div>
            <div id="reg-donor-profile">
                <img id="reg-donor-profile" src={profileP} />
            </div>

            <div id="profile-form">
                <h3 id="profile-page-donor-name">Viraj Kariyawasam</h3>
                <h4 id="profile-page-actor">Donor</h4>
                <form id="regDonor-profile-form">
                    <label for="reg-donor-name">Name</label>
                    <label for="register-donor-NIC">NIC</label><br></br>
                    <input type="text" id="reg-Donor-Name" name="reg-Donor-Name" value="Mr. Viraj Kariyawasam"></input>
                    <input type="text" id="reg-Donor-NIC" name="reg-Donor-NIC" value={updateNIC}></input><br></br>
                    <label for="reg-donor-contact">Contact</label>
                    <label for="reg-donor-email">E-mail</label><br></br>
                    <input type="text" id="reg-Donor-Contact" name="reg-Donor-Contact" value="0383394565/0716992521"></input>
                    <input type="text" id="reg-Donor-Email" name="reg-Donor-Email" value="virajk2000@gmail.com"></input><br></br>
                    <label for="reg-donor-address">Address</label>
                    <label for="reg-donor-district">Home District</label><br></br>
                    <input type="text" id="reg-Donor-Address" name="reg-Donor-Address" value="131/A, Waduramulla, Panadura"></input>
                    <input type="text" id="reg-Donor-District" name="reg-Donor-District" value="Kalutara"></input>
                    <button id="donor-save">Save</button>
                    <button id="Donor-cancel">Cancel </button>
                </form>
            </div>
        </div>
    );
}
import React, {useState,useCallback, useEffect}from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import axios from 'axios';
import '../assests/css/page.regdonor.profile.css';
import bloodo from '../assests/images/bloodOp.png';
import profileP from '../assests/images/Ellipse 11.png';
import lottie from "lottie-web";
import unsuccessImage from '../assests//images/wrong.png';
import loadingImage from '../assests/images/loading.gif';
// import successImage from '../../assests/images/sucess.png';
// import waitImage from '../../assests/images/wait.gif';
// import alert from '../../assests/images/alert.png';

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
    const [wait, setWait] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

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
            setUpdateFirstName(res.data.profile[0].firstName);
            setUpdateLastName(res.data.profile[0].lastName);
            setUpdateNIC(res.data.profile[0].userNic);
            setUpdateMobileNumber(res.data.profile[0].phoneNumber);
            setUpdateAddress(res.data.profile[0].address);
            setUpdateDistrict(res.data.profile[0].district);
            setUpdateEmail(res.data.profile[0].email);
            setUpdateProvince(res.data.profile[0].province);
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
            setUpdateProvince('');
            setUpdateDistrict('');
            
            axios.post("http://localhost:8070/registerdonor/profileUpdate",donor).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        // showUpdateDonor(data[0].firstName,data[0].userNic,data[0].lastName,data[0].phoneNumber,data[0].address, data[0].district,data[0].email, data[0].province);
                        setWait(false);
                        setSuccessMessage("Doctor Update Sucessfully")
                        setSuccess(true);

                    } else {
                        setWait(false);
                        setUnsuccessMessage("Doctor Update UnSucessfully");
                        setUnSuccess(true);

                    }

                }
            ).catch((err) => {
                //sever error
                console.log(err.message);
                setWait(false);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
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

            <div id="profile-form"  >
                <h3 id="profile-page-donor-name">{updateFirstName}  {updateLastName}</h3>
                <h4 id="profile-page-actor">Donor</h4>
                <form id="regDonor-profile-form" onSubmit={updateDonor}>
                    <label for="reg-donor-name">First Name</label>
                    <label for="register-donor-NIC">Last Name</label><br></br>
                    <input type="text" id="reg-Donor-Name" placeholder={updateFirstName} value={updateFirstName} onChange={(e) => { setUpdateFirstName(e.target.value)}}></input>
                    <input type="text" id="reg-Donor-NIC"  placeholder={updateLastName} value={updateLastName} onChange={(e) => {setUpdateLastName(e.target.value)}}></input><br></br>
                    <label for="reg-donor-contact">Contact</label>
                    <label for="reg-donor-email">NIC</label><br></br>
                    <input type="text" id="reg-Donor-Contact"  placeholder={updateMobileNumber} value={updateMobileNumber} onChange={(e) => {setMobileNumber(e.target.value)}}></input>
                    <input type="text" id="reg-Donor-Email"  placeholder={updateNIC} value={updateNIC} onChange={(e) => {setUpdateNIC(e.target.value)}}></input><br></br>
                    <label for="reg-donor-address">E-mail</label>
                    <label for="reg-donor-district">Address</label><br></br>
                    <input type="text" id="reg-Donor-Address"  placeholder={updateEmail} value={updateEmail} onChange={(e) => {setUpdateEmail(e.target.value)}}></input>
                    <input type="text" id="reg-Donor-District"  placeholder={updateAddress} value={updateAddress} onChange={(e) => {setUpdateAddress(e.target.value)}}></input>
                    <label for="reg-donor-address">District</label>
                    <label for="reg-donor-district">Province</label><br></br>
                    <input type="text" id="reg-Donor-Address" placeholder={updateDistrict} value={updateDistrict} onChange={(e) => {setUpdateDistrict(e.target.value)}}></input>
                    <input type="text" id="reg-Donor-District"  placeholder={updateProvince} value={updateProvince} onChange={(e) => {setUpdateProvince(e.target.value)}}></input>
                    <button type="submit" id="donor-save" >Update</button>
                    <button id="Donor-cancel" onClick={() => { setUpdateFormShow(!updateFormShow) }}>Cancel </button>
                </form>
            </div>
        </div>
    );
}
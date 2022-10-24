import React, { useState, useEffect } from "react";
import axios from 'axios';
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import '../assests/css/admin/page.admin.clustercenter.css';
import loadingImage from '../assests/images/loading.gif';
import successImage from '../assests/images/sucess.png';
import unsuccessImage from '../assests//images/wrong.png';

export default function AdminBloodCamp() {

    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false);
    const [ message,setMessage] = useState("");
    const [wait, setWait] = useState(false); 
    const [successMessage, setSuccessMessage] = useState("");

    const [formReg, setFormReg] = useState(false);
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [name, setName] = useState("");


    const passData = (data) => {
    setSlideMenu(data);
  };

  useEffect((() => { getClusterCenterData() }), [])

  function getClusterCenterData() {
    axios.get("http://localhost:8070/clusterCenter/selectClusterCenter").then(
        (res) => {
            setData(res.data.clusterCenters);
            console.log(res.data);

            setLoading(!loading);
        }).catch((err) => {
            //sever error
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true)
        })
  }

  function unsucessbutton(){
    window.location = "/clusterCenter";
  }

  function addClusterCenter(e){
    e.preventDefault()
    const clusterCenter = {
        province,
        district,
        name,
        address,
    }
    if(province.length == 0){
        setMessage("Please enter province");
    }else if(district.length == 0){
        setMessage("Please enter district");
    }else if(name.length == 0){
        setMessage("Please enter cluster center name");
    }else if(address.length == 0){
        setMessage("Please enter address");
    }else{
        setFormReg(false);
        setWait(true);
        setSuccess(true);
        setAddress('');
        setProvince('');
        setDistrict('');
        setName('');
        e.target.reset();

        axios.post("http://localhost:8070/clusterCenter/addClusterCenter", clusterCenter).then(
            (res) => {
                if (res['data']['message'] == "success") {
                    setWait(false);
                    setSuccessMessage("Cluster Center Added Sucessfully")
                    setSuccess(true);
                } 
            }
        ).catch((err) =>{
            //sever error

            setWait(false);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true)
        })
    }
  }
function sucessbutton() {
    window.location = "/admin/clusterCenter";
}
function unsucessbutton() {
    window.location = "/admin/clusterCenter";
}

  const list = [];

  //display data in table
    //check the NIC number
    if (searchData == "") {
        for(let i=0; i<data.length; i++){
            list.push(
                <> <tr>
                    <td>{data[i]['bloodCenterNo']}</td>
                    <td>{data[i]['name']}</td>
                    <td> {data[i]['province']}</td>
                    <td>{data[i]['district']}</td>
                    <td>{data[i]['address']}</td> 
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                </>
            )
        }
    }

    return(
        <div>
            <SlideMenuAdmin headerName={"Cluster Centers"} passData={passData} />
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >

            <div id='clustercenter-container-admin'>

                <div id={`${success ? 'sucess-message-active' :'sucess-message' }`}>
                    <img id='successImage' src={successImage}/>  <h3 id='sucess-message-name'> {name} Added Sucessfully <i class="fa-solid fa-xmark close-button-success" onClick={ () =>{ setSuccess(!success)}}></i></h3>
                </div>
                <div id={`${formReg ? 'fade-clusterAdmin' : null}`}onClick={ () =>{ setFormReg(!formReg)}}></div> 
            
                <input type="text" id='input-clustercenter-admin' placeholder=" &#xf002; Search"/>
                <button id='add-clustercenter-button-admin' onClick={ () =>{ setFormReg(!formReg)}}>Add</button> 
                <br/><br/>
                <table id="clustercenter-table-admin">
                <tr>
                    <th id='Camp-id'>Cluster Center No</th>
                    <th>Name</th>
                    <th>Province</th>
                    <th>District </th>
                    <th>Address</th>
                    <th id='camp-action-admin'>Action</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>

                {list}

                
                
                
            </table>
            <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>

            <div id={ `${ formReg ? 'register-form-clusterCenter-admin-active' : 'register-form-user-admin'}`}>
                <h3 id='register-form-user-name-admin'>Add New Cluster Center </h3>

                <form id='register-form-clusterCenter-form-admin' onSubmit={addClusterCenter}>
                    { message ? <p id="message-form-admin">{message}   <i class="fa-solid fa-xmark close-button-form" onClick={ () =>{ setMessage("")}}></i></p> : null}

                    <table id='user-view-table-admin'>
                        <tr>
                            <td>Cluster Center Name </td>
                            <td><input type="text" id="register-form-user-input-admin" placeholder="Enter Cluster Center Name" onChange={(e)=>{setName(e.target.value)}}  /> <br /></td>
                        </tr>
                        <tr>
                            <td>Province</td>
                            <td><input type="text" id="register-form-user-input-admin" placeholder="Enter the Province" onChange={(e)=>{setProvince(e.target.value)}}  /> <br /></td>
                        </tr>
                        <tr>
                            <td>District</td>
                            <td><input type="text" id="register-form-user-input-admin" placeholder="Enter District" onChange={(e)=>{setDistrict(e.target.value)}}  /> <br /></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td><input type="text" id="register-form-user-input-admin" placeholder="Enter Clueter Center Address" onChange={(e)=>{setAddress(e.target.value)}}  /> <br /></td>
                        </tr>
                    </table> <br/>

                    <button type="sumbit" id="sumbit-save-form" > Register </button> {" "} 
                    <button   id="sumbit-cancle-form" onClick={ () =>{ setFormReg(!formReg) }}  > Cancel </button> <br/><br/>
                </form>
            </div>
            
         </div>

            </div>    
        </div>
    )
}
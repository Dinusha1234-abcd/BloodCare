import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/component.bloodHeader.css';
export default function ClusterAdminBloodHeader() {
    return (
        <div id="container-blood-1">
            <Link to='/blood/Opositive' id={`${(window.location.pathname==='/blood/Opositive' ? 'box-blood-active' : 'box-blood' )}`} >  <h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>O <br/>Positive</b></h>   </Link>
            <Link to='/blood/Onegative' id={`${(window.location.pathname==='/blood/Onegative' ? 'box-blood-active' : 'box-blood' )}`} ><h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>O <br/>Negative</b></h>  </Link>
            <Link to='/blood/Apositive' id={`${(window.location.pathname==='/blood/Apositive' ? 'box-blood-active' : 'box-blood' )}`} ><h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>A <br/>Positive</b></h>  </Link>
            <Link to='/blood/Anegative' id={`${(window.location.pathname==='/blood/Anegative' ? 'box-blood-active' : 'box-blood' )}`} ><h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>A <br/>Negative</b></h> </Link>
            <Link to='/blood/Bpositive' id={`${(window.location.pathname==='/blood/Bpositive' ? 'box-blood-active' : 'box-blood' )}`} ><h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>B <br/>Positive</b></h> </Link>
            <Link to='/blood/Bnegative' id={`${(window.location.pathname==='/blood/Bnegative' ? 'box-blood-active' : 'box-blood' )}`} ><h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>B <br/>Negative</b></h> </Link>
            <Link to='/blood/ABpositive' id={`${(window.location.pathname==='/blood/ABpositive' ? 'box-blood-active' : 'box-blood' )}`} ><h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>AB <br/>Positive</b></h> </Link>
            <Link to='/blood/ABnegative' id={`${(window.location.pathname==='/blood/ABnegative' ? 'box-blood-active' : 'box-blood' )}`} ><h id='blood-name'>Blood <br/> Collection </h><h className='blood-name'><b>AB <br/>Positive</b></h> </Link>
        </div>
    )

}
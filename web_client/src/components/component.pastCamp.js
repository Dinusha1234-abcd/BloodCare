import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/component.pastCamp.css';
export default function PastCamp() {

    return (
        <div>
            <div id='past-camp-contanier'> 
            <h3 id='header-clusterAdmin'>Past Camps Details</h3>
            <input type="text" id='input-pastCamp' placeholder=" &#xf002; Enter Camp Number"/> 
            <br/><br/>
            <table id="past-camp-table">
                <tr>
                    <th id='pastCamp-number'>Camp Number</th>
                    <th>Date</th>
                    <th>Organizer Name</th>
                    <th>Number of Blood Donors</th>
                    <th>Blood Counters</th>
                    <th id='pastCamp-action'>Action</th>
                </tr>
                <tr>
                    <td>101</td>
                    <td>2022/08/05</td>
                    <td>Namal Silva</td>
                    <td>50</td>
                    <td>50</td>
                    <td><Link  to='/bloodcamp/pastcampView/Yasswin Bandara/982345678V/Boralasgamuwa/0777123456/yasswin@gmail.com' id='view-button-pastcamp'>View</Link></td>

                </tr>
                <tr>
                    <td>102</td>
                    <td>2022/08/05</td>
                    <td>Sahan Senanayake</td>
                    <td>100</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>103</td>
                    <td>2022/08/05</td>
                    <td>Vishwa Ruwantha</td>
                    <td>50</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>104</td>
                    <td>2022/08/05</td>
                    <td>Sathya Ranasingh</td>
                    <td>100</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>105</td>
                    <td>2022/08/05</td>
                    <td>Kamal Silva</td>
                    <td>50</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>106</td>
                    <td>2022/08/05</td>
                    <td>Gimhani Silva</td>
                    <td>50</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>107</td>
                    <td>2022/08/05</td>
                    <td>Sathya Suriya</td>
                    <td>50</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>108</td>
                    <td>2022/08/05</td>
                    <td>Kamal Silva</td>
                    <td>50</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>109</td>
                    <td>2022/08/05</td>
                    <td>Dumidu Shamal</td>
                    <td>50</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
            </table>
            <div id='pastCamp-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
        </div>
    )
}
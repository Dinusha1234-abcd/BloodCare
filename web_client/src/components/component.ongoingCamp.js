import React from 'react';
import '../assests/css/component.pastCamp.css';
export default function OngoingCamp() {

    return (
        <div>
            <div id='past-camp-contanier'> 
            <h3>Ongoing Camps Details</h3>
            <input type="text" id='input-pastCamp' placeholder=" &#xf002; Enter Camp Number"/> 
            <br/><br/>
            <table id="past-camp-table">
                <tr>
                    <th id='pastCamp-number'>Camp Number</th>
                    <th>Date</th>
                    <th>Organizer Name</th>
                    <th>Place</th>
                    <th>Head Nurse Name</th>
                    <th id='pastCamp-action'>Action</th>
                </tr>
                <tr>
                    <td>110</td>
                    <td>2022/08/05</td>
                    <td>Namal Udawatha</td>
                    <td>Kesbewa</td>
                    <td>Samanthika Silva</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>111</td>
                    <td>2022/08/05</td>
                    <td>Pasindu Senanayake</td>
                    <td>Piliyandala</td>
                    <td>Shamila Nissansala</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>112</td>
                    <td>2022/08/05</td>
                    <td>Vishwa Ruwantha</td>
                    <td>Mawithra</td>
                    <td>Sewandi Namali</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>113</td>
                    <td>2022/08/05</td>
                    <td>Sathya Ranasingh</td>
                    <td>Moratuwa</td>
                    <td>Vishma Rajapaksha</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>114</td>
                    <td>2022/08/05</td>
                    <td>Nishamal Silva</td>
                    <td>Boralasgamuwa</td>
                    <td>Vishma Lakshani</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>115</td>
                    <td>2022/08/05</td>
                    <td>Gimhani Silva</td>
                    <td>Bokundara</td>
                    <td>Namal Rajakaruna</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>116</td>
                    <td>2022/08/05</td>
                    <td>Sathya Suriya</td>
                    <td>Kesbewa</td>
                    <td>Sandya Samanthika</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>117</td>
                    <td>2022/08/05</td>
                    <td>Kamal Silva</td>
                    <td>Bokundara</td>
                    <td>Sewandi Namali</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>118</td>
                    <td>2022/08/05</td>
                    <td>Dumidu Shamal</td>
                    <td>Kesbewa</td>
                    <td>Samanthika Silva</td>
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
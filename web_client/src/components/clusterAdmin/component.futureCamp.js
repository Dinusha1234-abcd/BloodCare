import React from 'react';
import '../../assests/css/component.futureCamp.css';
export default function FutureCamp() {

    return (
        <div>
            <div id='past-camp-contanier'> 
            <h3 id='header-clusterAdmin'>Upcomming Camp Details</h3>
            <input type="text" id='input-pastCamp' placeholder=" &#xf002; Enter Camp Number"/> 
            <br/><br/>
            <table id="past-camp-table">
                <tr>
                    <th id='pastCamp-number'>Camp Number</th>
                    <th>Date</th>
                    <th>Organizer Name</th>
                    <th>Head Nurse Name</th>
                    <th>Number of Registers</th>
                    <th id='pastCamp-action'>Action</th>
                </tr>
                <tr>
                    <td>119</td>
                    <td>2022/08/05</td>
                    <td>Namal Silva</td>
                    <td>Samanthika Silva</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>120</td>
                    <td>2022/08/05</td>
                    <td>Sahan Senanayake</td>
                    <td>Shamila Nissansala</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>121</td>
                    <td>2022/08/05</td>
                    <td>Vishwa Ruwantha</td>
                    <td>Vishma Lakshani</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>122</td>
                    <td>2022/08/05</td>
                    <td>Sathya Ranasingh</td>
                    <td>Gimhani Silva</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>2022/08/05</td>
                    <td>Kamal Silva</td>
                    <td>Sewandi Namali</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>124</td>
                    <td>2022/08/05</td>
                    <td>Gimhani Silva</td>
                    <td>Sathya Ranasingh</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>125</td>
                    <td>2022/08/05</td>
                    <td>Sathya Suriya</td>
                    <td>Sewandi Namali</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>126</td>
                    <td>2022/08/05</td>
                    <td>Kamal Silva</td>
                    <td>Sathya Ranasingh</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>127</td>
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
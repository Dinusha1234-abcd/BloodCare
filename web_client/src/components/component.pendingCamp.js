import React from 'react';
import '../assests/css/component.pendingCamp.css';
export default function PendingCamp() {

    return (
        <div>
            <div id='past-camp-contanier'> 
            <h3>Pending Camps Details</h3>
            <input type="text" id='input-pastCamp' placeholder=" &#xf002; Enter Camp Number"/> 
            <br/><br/>
            <table id="past-camp-table">
                <tr>
                    <th id='pastCamp-number'>Date</th> 
                    <th>Organizer Name</th>
                    <th>Place</th>
                    <th>Number of target Registers</th>
                    <th id='pastCamp-action'>Action</th>
                </tr>
                <tr> 
                    <td>2022/08/05</td>
                    <td>Namal Silva</td>
                    <td>Kesbewa</td>
                    <td>50</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Vishma Damayanthi</td>
                    <td>Mawithra</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Anula Rajapaksha</td>
                    <td>Bokundara</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
               </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Gimhani Sandanayake</td>
                    <td>Moratuwa</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
               </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Amila Nadishani</td>
                    <td>Kesbewa</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
               </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Skaya Samanthika</td>
                    <td>Bokundara</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
               </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Sahan Senanayake</td>
                    <td>Piliyandala</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Yasswin Bandara</td>
                    <td>Boralasgamuwa</td>
                    <td>100</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
           </tr>
                <tr>
                    <td>2022/08/05</td>
                    <td>Amila Senanayake</td>
                    <td>Bokundara</td>
                    <td>100</td>
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
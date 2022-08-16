import React from 'react';
import '../assests/css/component.blood.css';

export default function BPositive(){

    return(
        <div id='blood-display-container'>
            <div id='blood-display-subcontainer'>
            <h1 id='header-clusterAdmin-blood'>B Positive Blood Counters</h1>
            <div id='blood-display-container-box-1'>
               
                 <div id='blood-display-container-subbox-1'>Cluster Center <br/> <h id='blood-display-container-subbox-1-count'>22</h> <br/>Counters</div>
                 <div id='blood-display-container-subbox-1'>All Cluster Center<br/><h id='blood-display-container-subbox-1-count'>22</h> <br/>Counters </div>
                 <div id='blood-display-container-subbox-1'>B Positive<br/><h id='blood-display-container-subbox-1-count'>100%</h><br/>Percentage</div>
                 <div id='blood-display-container-subbox-2-1'>
                    <div id='blood-display-container-subbox-2-1-1' >Last Update Date 2022/07/28</div>
                    <div id='blood-display-container-subbox-2-1-1' >Last Update Time 12:00 PM</div>
               </div>
          
             
                <div id='blood-display-container-subbox-2-1'></div>
           </div>
           <div id='blood-display-container-box-2'>
                 <h1>Last 3 Months Camp Saving B+ Blood Counters</h1>
                 <table id="driver-table">
                <tr>
                    <th id='driver-number'>Date</th>
                    <th>Camp Number</th>
                    <th id='driver-action'>Number Of Blood Counters</th>
                     
                </tr>
                <tr>
                    <td>2022/07/28</td>
                    <td>101</td>
                    <td>100</td>
                    
                   
                </tr>
                <tr>
                <td>2022/07/28</td>
                    <td>101</td>
                    <td>100</td>
                    </tr>
                <tr>
                <td>2022/07/28</td>
                    <td>101</td>
                    <td>100</td>
                    </tr>
                <tr>
                <td>2022/07/28</td>
                    <td>101</td>
                    <td>100</td>
                          </tr>
                <tr>
                <td>2022/07/28</td>
                    <td>101</td>
                    <td>100</td>
                       
                </tr>
             </table>
         
           </div>
           </div>
        </div>
    );
}
import React, { useState } from 'react';
import '../assests/css/component.pastCampView.css'
import Blood from "../components/component.blood.display";
import DoughnutChart from '../components/compoent.doughnutChart'
import donor from '../assests/images/donor.png';

import { useParams } from 'react-router-dom';
export default function PendingCampView() {
    const { id, name, mobile, place } = useParams()
    const [useData, setUseData] = useState({
        labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
        datasets: [{
            label: "Collect Blood Group",
            data: [90, 92, 22, 80, 21, 180, 90, 90],
            backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
        }]
    })
    return (
        <div id='past-camp-view'>
            <div id='past-camp-view-container-clusterAdmin'>
                <div id='past-camp-container-box1-clusterAdmin'>
                    <h3 id='past-camp-header-clusterAdmin'>Pending Blood Camp Details</h3>

                    <table id="past-camp-view-table">
                        <tr>
                            <td>Organizer Name</td>
                            <td>{name}</td>
                            <td>Date</td>
                            <td>2022/08/04</td>
                        </tr>
                        <tr>
                            <td>NIC Number</td>
                            <td>{id}</td>
                            <td>location</td>
                            <td>Colombo</td>
                        </tr>
                        <tr>
                            <td>Place</td>
                            <td>{place}</td>
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td>{mobile}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>namal@gmail.com</td>
                        </tr>
                    </table>


                </div>
                <div id='past-camp-container-box2-clusterAdmin'>
                    <div id='past-camp-container-box3-clusterAdmin'>
                        <h3>Blood Counter Details</h3>
                        <div id="blood"><Blood name='O+' /><Blood name='A+' /><Blood name='B+' /><Blood name='AB+' /></div>
                        <div id="blood"><Blood name='O-' /><Blood name='A-' /><Blood name='B-' /><Blood name='AB-' /></div>

                    </div>
                    <div id='past-camp-container-box12-clusterAdmin'>
                        <h3 id='blood-counters-view'>Blood Counters</h3>

                        <DoughnutChart chartData={useData} />
                    </div>
                </div>
            </div>
            <div id='camp-donors-medicalstaff-view'>
                <div id='camp-donors-medicalstaff-view-donors'>
                    <div id='camp-donors-medicalstaff-view-donors-donation'>
                        <div id='card-donor-donoation-clusteradmin'>
                            <img id='card-donor-donoation-image-clusteradmin' src={donor} /><br />
                            <h id='card-donor-donoation-view-name-clusteradmin' >Number of Present</h><br />
                            <h2 id=''>22</h2>
                        </div>
                        <div id='card-donor-donoation-clusteradmin'>
                            <img id='card-donor-donoation-image-clusteradmin' src={donor} /><br />
                            <h id='card-donor-donoation-name-view-clusteradmin' >Number of Absent</h><br />
                            <h2 id=''>22</h2>
                        </div>
                    
                    </div>
                </div>
                <div id='medicalstaff-display-table-display'>
                    <h3 id='past-camp-header-clusterAdmin'>Available Medical Staff Members</h3>
                    <table id="medical-staff-view-table">
                        <tr>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Action</td>

                        </tr>
                        <tr>
                            <td>Supuni Kalhari</td>
                            <td>Head Nurse</td>
                            <td><button id='add-button-staff'>Add</button></td>


                        </tr>
                        <tr>
                            <td>Savinda Gunarathna</td>
                            <td>Nurse</td>
                            <td><button id='add-button-staff'>Add</button></td>


                        </tr>
                        <tr>
                            <td>Sahan Ranasinha</td>
                            <td>Doctor</td>
                            <td><button id='add-button-staff'>Add</button></td>


                        </tr>
                        <tr>
                            <td>Damith Asanka</td>
                            <td>Nurse</td>
                            <td><button id='add-button-staff'>Add</button></td>


                        </tr>
                    </table>
                    <div id='medicalstaff-display-table-display-available'></div>
                </div>
            </div>
        </div>
    )
}
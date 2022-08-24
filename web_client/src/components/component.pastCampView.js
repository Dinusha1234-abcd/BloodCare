import React, { useState } from "react";
import "../assests/css/component.pendingCampView.css";
import { useParams } from "react-router-dom";
import DoughnutChart from "../components/compoent.doughnutChart";
import Blood from "../components/component.blood.display";


export default function PendingCampView() {
  const { id, name, mobile, place } = useParams();

  const [useData, setUseData] = useState({
    labels: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    datasets: [
      {
        label: "Collect Blood Group",
        data: [90, 92, 22, 80, 21, 180, 90, 90],
        backgroundColor: [
          "#ED0E02",
          "#6E2820",
          "#E61D12",
          "#E36D66",
          "#963732",
          "#F2B8B1",
          "#6E3B35",
          "#7A514C",
        ],
      },
    ],
  });

  return (
    <div id="pending-camp-view">
      <div id="pending-camp-view-container-clusterAdmin">
      
          <h3 id="past-camp-header-medicalOfficer">
            Camp Details
          </h3>

          <table id="medicalOfficer-past-camp-view-table">
            <tr>
              <td>Organizer Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>NIC Number</td>
              <td>{id}</td>
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
          <div id="pending-camp-container-box2-medicalOfficer">
            <form>
              <input type="text" id="input-send-message-clusterAdmin"></input>
              <br />
              <button type="sumbit" id="sumbit-send-Email-clusterAdmin">
                Send Email
              </button>
              <button type="sumbit" id="sumbit-send-SMS-clusterAdmin">
                Send SMS
              </button>
            </form>
          </div>
       
        <div id="pending-camp-container-box3-clusterAdmin">
          <div id="medicalOfficer-summary-bloodcounts">
            <h3>Blood Counter Details</h3>
            <div id="blood">
              <Blood name="O+" />
              <Blood name="A+" />
              <Blood name="B+" />
              <Blood name="AB+" />
            </div>
            <div id="blood">
              <Blood name="O-" />
              <Blood name="A-" />
              <Blood name="B-" />
              <Blood name="AB-" />
            </div>
            <div id="medicalOfficer-summary-bloodpercentage">
            <h3>Blood Percentage</h3>
            <br />
            <DoughnutChart chartData={useData} />
          </div>
          </div>
          
        </div>
      </div>
      <div id="medicalstaff-display-table-display-summary">
        <h3 id="pending-camp-header-clusterAdmin">
          Assigned Medical Staff Members
        </h3>
        <table id="medical-staff-view-table">
          <tr>
            <td id="medical-staff-view-table-header">Name</td>
            <td id="medical-staff-view-table-header">Type</td>
          </tr>
          <tr>
            <td>Supuni Kalhari</td>
            <td>Head Nurse</td>
          </tr>
          <tr>
            <td>Savinda Gunarathna</td>
            <td>Nurse</td>
          </tr>
          <tr>
            <td>Sahan Ranasinha</td>
            <td>Doctor</td>
          </tr>
          <tr>
            <td>Damith Asanka</td>
            <td>Nurse</td>
          </tr>
        </table>
        <div id="medicalstaff-display-table-display-available"></div>
      </div>
    </div>
  );
}

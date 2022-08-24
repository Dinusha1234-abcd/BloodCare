import React, { useState } from "react";
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import '../assests/css/admin/page.admin.clustercenter.css';

export default function AdminBloodCamp() {

    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
    setSlideMenu(data);
  };

    return(
        <div>
            <SlideMenuAdmin headerName={"Cluster Centers"} passData={passData} />
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >

            <div id='clustercenter-container-admin'> 
            
            {/* <img src={upcomingcamp} id='camp-image-icon-admin'  /> */}
                <input type="text" id='input-clustercenter-admin' placeholder=" &#xf002; Search"/>
                <button id='add-clustercenter-button-admin'>Add</button> 
                <br/><br/>
                <table id="clustercenter-table-admin">
                <tr>
                    <th id='Camp-id'>Cluster Center No</th>
                    <th>Name</th>
                    <th>Province</th>
                    <th>District </th>
                    <th > Cluster Admin Name</th>
                    <th id='camp-action-admin'>Action</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>
                <tr>
                    <td>01</td>
                    <td>Blood Alliance</td>
                    <td>Southern</td>
                    <td>Matara</td>
                    <td>Kasun Vithane</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>OneBlood</td>
                    <td>Western</td>
                    <td>Colombo</td>
                    <td>Chamika Weerasinghe</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>LifeSource</td>
                    <td>Southern</td>
                    <td>Galle</td>
                    <td>Thejan Gunathilake</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>LittleHelp</td>
                    <td>Eastern</td>
                    <td>Ampara</td>
                    <td>Adhi Wijethunge</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>05</td>
                    <td>Redonest</td>
                    <td>Central</td>
                    <td>Kandy</td>
                    <td>Sarasi Perera</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>06</td>
                    <td>Friends2</td>
                    <td>Central</td>
                    <td>Kandy</td>
                    <td>Mahesh Samarapala</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                
                
            </table>
            {/* <div id='pastCamp-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div> */}
         </div>

            </div>    
        </div>
    )
}
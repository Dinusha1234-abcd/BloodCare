import React, { useState } from "react";
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import '../assests/css/admin/page.announcement.admin.css'

export default function AdminAnnoucement(){

    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
    setSlideMenu(data);
  };

  return(
    <div>
        <SlideMenuAdmin headerName={"Announcements"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >

        <div id='clustercenter-container-admin'> 
            
            {/* <img src={upcomingcamp} id='camp-image-icon-admin'  /> */}
                <input type="text" id='input-clustercenter-admin' placeholder=" &#xf002; Search"/>
                <button id='add-clustercenter-button-admin'>Add</button> 
                <br/><br/>
                <table id="clustercenter-table-admin">
                <tr>
                    <th id='Camp-id'>Announcement No</th>
                    <th>Date </th>
                    <th>Title</th>
                    <th>Description</th>
                    <th id='camp-action-admin'>Action</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>
                <tr>
                    <td>01</td>
                    <td>07-10-2022</td>
                    <td>Donate blood..</td>
                    <td>O- blood type has decreased in Matara Hospital. Therefore, those who ...</td>
                    <td><button id='view-camp-button-admin'>Edit</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>07-28-2022</td>
                    <td>Save a life..</td>
                    <td>An emergency patient needs type B- blood...</td>
                    <td><button id='view-camp-button-admin'>Edit</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>08-11-20221</td>
                    <td>Kind request...</td>
                    <td>There is a shortage of blood in the blood bank...</td>
                    <td><button id='view-camp-button-admin'>Edit</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>08-18-2022</td>
                    <td>OneBlood</td>
                    <td>At our OneBlood blood collection center...</td>
                    <td><button id='view-camp-button-admin'>Edit</button></td>
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
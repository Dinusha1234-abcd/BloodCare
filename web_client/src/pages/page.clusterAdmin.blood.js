import React,{useState} from "react";
import SlideMenuClusterAdmin from "../components/component.slidemenu.clusterAdmin"
import ClusterAdminBloodHeader from "../components/component.bloodHeader";
export default function ClusterAdminBlood(){
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
      setSlideMenu(data);
    };
    if (window.location.pathname == '/blood/Opositive' || window.location.pathname == '/blood') {
      return (
        <div>
          <SlideMenuClusterAdmin headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader />
            {/* <PastCamp /> */}
          </div>
        </div>
      )
    }
   
}
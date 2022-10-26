import React,{useState} from 'react';
import SlideMenuMedicalOfficer from "../components/component.slidemenu.medicalOfficer";
import ClusterAdminBloodHeader from "../components/clusterAdmin/component.bloodHeader";
import OPositive from "../components/clusterAdmin/component.O.positive";
import ONegative from "../components/clusterAdmin/component.O.negative"
import APositive from '../components/clusterAdmin/component.A.positive';
import ANegative from '../components/clusterAdmin/component.A.negative';
import BPositive from '../components/clusterAdmin/component.B.positive';
import BNegative from '../components/clusterAdmin/component.B.negative';
import ABPositive from '../components/clusterAdmin/component.AB.positive';
import ABNegative from '../components/clusterAdmin/component.AB.negative';
// import BP?
// import PastCamp from "../components/component.pastCamp";
export default function ClusterAdminBlood(){ 
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
      setSlideMenu(data);
    };
    if (window.location.pathname === '/blood' || window.location.pathname === '/blood/Opositive') {
      return (
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <OPositive/>
          </div>
        </div>
      )
    }else if(window.location.pathname === '/blood/Onegative'){
      return(
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <ONegative/>
          </div>
        </div>
      )
    }else if(window.location.pathname === '/blood/Apositive'){
      return(
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <APositive/>
          </div>
        </div>
      )
    }else if(window.location.pathname === '/blood/Anegative'){
      return(
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <ANegative/>
          </div>
        </div>
      )
    }
    else if(window.location.pathname === '/blood/Bpositive'){
      return(
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <BPositive/>
          </div>
        </div>
      )
    }
    else if(window.location.pathname === '/blood/Bnegative'){
      return(
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <BNegative/>
          </div>
        </div>
      )
    }else if(window.location.pathname === '/blood/ABpositive'){
      return(
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <ABPositive/>
          </div>
        </div>
      )
    }else if(window.location.pathname === '/blood/ABnegative'){
      return(
        <div>
          <SlideMenuMedicalOfficer headerName={"Blood"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <ClusterAdminBloodHeader/>
            <ABNegative/>
          </div>
        </div>
      )
    }
   
}
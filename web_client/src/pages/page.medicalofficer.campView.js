import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import SlideMenuMedicalOfficer from '../components/component.slidemenu.medicalOfficer';
import ClusterAdminCampHeader from '../components/component.campHeader'
import PendingCampView from '../components/component.pendingCampView';
import PastCampView from '../components/component.pastCampView';

export function MedicalOfficerPastCampView(){
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
      setSlideMenu(data);
    };
    
    return(
    <div>
         <SlideMenuMedicalOfficer headerName={"Blood Camp"} passData={passData} />
         <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
           <ClusterAdminCampHeader />
          <PastCampView />
        </div>
    </div>)
}
export function MedicalOfficerPendingCampView(){
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
      setSlideMenu(data);
    };
    
    return(
    <div>
         <SlideMenuMedicalOfficer headerName={"Blood Camp"} passData={passData} />
         <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
           <ClusterAdminCampHeader />
          <PendingCampView />
        </div>
    </div>)
}
 
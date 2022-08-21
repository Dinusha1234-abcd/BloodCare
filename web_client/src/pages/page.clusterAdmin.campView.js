import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import SlideMenuClusterAdmin from '../components/component.slidemenu.clusterAdmin';
import ClusterAdminCampHeader from '../components/component.campHeader'
import PendingCampView from '../components/component.pendingCampView';
import PastCampView from '../components/component.pastCampView';

export function ClusterAdminPastCampView(){
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
      setSlideMenu(data);
    };
    
    return(
    <div>
         <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
         <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
           <ClusterAdminCampHeader />
          <PastCampView />
        </div>
    </div>)
}
export function ClusterAdminPendingCampView(){
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
      setSlideMenu(data);
    };
    
    return(
    <div>
         <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
         <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
           <ClusterAdminCampHeader />
          <PendingCampView />
        </div>
    </div>)
}
 
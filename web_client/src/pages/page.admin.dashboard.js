import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import '../assests/css/admin.dashboard.css';
export default function AdminDashboard() {
    return(
        
        <div><SlideMenuAdmin headerName={"Dashboard"}/>
        <div className="box">
            <div className="box1">

            </div>

        </div>
        </div>
        
    );
}
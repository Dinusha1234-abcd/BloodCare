import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../assests/css/admin.dashboard.css'
import {Chart as ChartJS} from "chart.js/auto"

export default function BarChart ({chartData}){
                 
    return(
        <div id='chart-bar-admin'>
            <Bar data={chartData} />
        </div>
    );
}
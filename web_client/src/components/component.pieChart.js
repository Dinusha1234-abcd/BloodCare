import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../assests/css/component.pieChart.css'
import {Chart as ChartJS} from "chart.js/auto"

export default function PieChart ({chartData}){
                 
    return(
        <div id='chart-pie'>
            <Pie data={chartData} />
        </div>
    );
}
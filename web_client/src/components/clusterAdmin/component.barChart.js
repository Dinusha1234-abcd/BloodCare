import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../../assests/css/component.barChart.css'
import {Chart as ChartJS} from "chart.js/auto"

export default function BarChart ({chartData}){
                 
    return(
        <div id='chart-bar'>
            <Bar data={chartData} />
        </div>
    );
}
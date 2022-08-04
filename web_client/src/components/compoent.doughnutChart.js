import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../assests/css/component.doughnutChart.css'
import {Chart as ChartJS} from "chart.js/auto"

export default function DoughnutChart ({chartData}){
                 
    return(
        <div id='chart-doughnut'>
            <Doughnut data={chartData} />
        </div>
    );
}

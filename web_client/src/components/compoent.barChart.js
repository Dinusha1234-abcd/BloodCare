import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function BarApp (){
    const data= [12, 19, 3, 5, 2, 3] 
                 
    return(
        <div style={{width:100}}>
            <Doughnut data={data} />
        </div>
    );
}

import React from "react";
import 'chart.js/auto'
import {Bar, bar, Doughnut} from 'react-chartjs-2'
import './ChartOne.css'






const ChartTwo = () => {
    return(
        <div className="number2">
            <Doughnut data= {{
               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
               datasets: [{
                   label: '# of Votes',
                   data: [12, 19, 3, 5, 2, 3],
                   backgroundColor: [
                        'rgba(31, 31, 31)',
                        'rgba(200, 16, 46)',
                        'rgba(31, 31, 31)',
                        'rgba(200, 16, 46)',
                        'rgba(31, 31, 31)',
                        'rgba(200, 16, 46)'
                   ],
                   borderColor: [
                       'rgba(31, 31, 31)',
                       'rgba(31, 31, 31)',
                       'rgba(31, 31, 31)',
                       'rgba(31, 31, 31)',
                       'rgba(31, 31, 31)',
                       'rgba(31, 31, 31)'
                   ],
                   borderWidth: 1
               }]}}
               heigh = {200}
               width = {600}
               options = {{maintainAspectRatio: false}}
          />
        </div>
    );
}
export default ChartTwo;
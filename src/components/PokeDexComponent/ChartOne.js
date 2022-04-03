import React from "react";
import 'chart.js/auto'
import {Bar, bar} from 'react-chartjs-2'
import './ChartOne.css'
import axios from "axios";





const ChartOne = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
    .then((res) => {
        console.log(res)

        let pokemons = res.data.results;

        console.log(pokemons)

    })

    return(
        <div className="number1">
            <Bar data= {{
               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
               datasets: [{
                   label: '# of Votes',
                   data: [12, 19, 3, 5, 2, 3],
                   backgroundColor: [
                       'rgb(200, 16, 46)',
                       'rgb(31, 31, 31)',
                       'rgb(200, 16, 46)',
                       'rgb(31, 31, 31)',
                       'rgb(200, 16, 46)',
                       'rgb(31, 31, 31)',
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
               heigh = {400}
               width = {600}
               options = {{maintainAspectRatio: false}}
          />
        </div>
    );
}
export default ChartOne;
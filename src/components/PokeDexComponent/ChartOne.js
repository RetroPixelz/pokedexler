import React, { useEffect, useState } from "react";
import "chart.js/auto";
import "./ChartOne.css";
import axios from "axios";

// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Scatter } from "react-chartjs-2";

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
  

const ChartOne = () => {


  const data = {
    labels: ['hp', 'dmg', 'atk', 'spes atk', 'spes def', 'speed'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  


    // const options = {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top' ,
    //       },
    //       title: {
    //         display: true,
    //         text: 'Chart.js Bar Chart',
    //       },
    //     },
    //   };
      
    //   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
    //   const data = {
    //     labels,
    //     datasets: [
    //       {
    //         label: 'Dataset 1',
    //         data: 12,
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       },
    //       {
    //         label: 'Dataset 2',
    //         data: 1,
    //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //       },
    //     ],
    //   };
      
     
//   const [scatterChartData, setScatterChartData] = useState([]);
//   const [scatterChartDataHp, setScatterChartDataHp] = useState([]);
//   const [scatterChartDataWeight, setScatterChartDataWeight] = useState([]);

//   const [OnePokemon, setOnePokeName] = useState({});

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   const data = {
//     datasets: [
//       {
//         label: "A dataset",
//         data: Array.from({ length: 100 }, () => ({
//           x: 12,
//           y: 12,
//         })),
//         backgroundColor: "rgba(255, 99, 132, 1)",
//       },
//     ],
//   };


// axios.get("https://pokeapi.co/api/v2/generation/1")


const [genTriggerCount, setGetTriggerCount] = useState([]);

useEffect(() => {
axios.get("https://pokeapi.co/api/v2/growth-rate/4")
    .then((res) => {
        console.log(res)



        
        
      
        
        // console.log(triggers)

        // let triggerAmount = triggercount.map((item) =>  < sdfg/>);
        // setGetTriggerCount(triggerAmount)



        // let startItem = pokeData.map((item) => <Card pname={item.name}  plink={item.url}/>);
        // setgenPokeListItem(startItem);
        // console.log(pokeData);
        // let gen = res.data.pokemon_species

        // console.log(gen)
    })
})


//   useEffect(() => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
//       .then((res) => {
//         let pokemons = res.data.results;

//         const pokeData = [];

//         for (let i = 0; i < pokemons.length; i++) {
//           pokeData.push({
//             name: pokemons[i].name,
//             url: pokemons[i].url,
//           });
//         }
//         console.log(pokeData);

//         pokeData.forEach((element) => {
//           axios.get(element.url).then((res) => {
//             setOnePokeName({
//               x: res.data.weight,
//               y: res.data.stats[0].base_stat,
//             });
//           });
//         });
//       }, []);
//   }, []);


  
  return (
    <div className="number1">
      {/* <Scatter options={options} data={data} /> */}
      
    </div>
  );
};
export default ChartOne;

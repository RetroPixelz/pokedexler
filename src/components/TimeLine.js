import react from "react";
import { Bar, bar, Line } from "react-chartjs-2";
import "./TimeLine.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const TimeLine = () => {
  
  const [genSlowRate, setGenSlowRate] = useState([]);

  const [selectedDataSet, setSelectedDataSet] = useState();

  const clickedButton = (event) =>{
     console.log(event.target.innerHTML.toLowerCase()) 
      setSelectedDataSet(event.target.innerHTML.toLowerCase())
  }

  
 

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/growth-rate/";
    axios.get(url).then((res) => {
      const PokemonGrowthRates = res.data.results;
      let allPokeGrowthRates = [];

      
      console.log(selectedDataSet)
      console.log(selectedDataSet === "slow")

      
      if (selectedDataSet === "slow") {

        axios.get(PokemonGrowthRates[0].url).then((res) => {
          allPokeGrowthRates.push(res.data);
          let genSlowRate = res.data.levels.map((item) => {
            return(
            item.experience
            )     
          })         
          setGenSlowRate(genSlowRate)
        });
        console.log("first")
      } else if(selectedDataSet === "medium") {
        axios.get(PokemonGrowthRates[1].url).then((res) => {
          allPokeGrowthRates.push(res.data);
          let genSlowRate = res.data.levels.map((item) => {
            return(
            item.experience
            )     
          })         
          setGenSlowRate(genSlowRate)
        });

      }else if(selectedDataSet === "fast") {
        axios.get(PokemonGrowthRates[2].url).then((res) => {
          allPokeGrowthRates.push(res.data);
          let genSlowRate = res.data.levels.map((item) => {
            return(
            item.experience
            )     
          })         
          setGenSlowRate(genSlowRate)
        });

      }else if(selectedDataSet === "medium-slow") {
        axios.get(PokemonGrowthRates[3].url).then((res) => {
          allPokeGrowthRates.push(res.data);
          let genSlowRate = res.data.levels.map((item) => {
            return(
            item.experience
            )     
          })         
          setGenSlowRate(genSlowRate)
        });

      }else if(selectedDataSet === "slow-then-very-fast") {
        axios.get(PokemonGrowthRates[4].url).then((res) => {
          allPokeGrowthRates.push(res.data);
          let genSlowRate = res.data.levels.map((item) => {
            return(
            item.experience
            )     
          })         
          setGenSlowRate(genSlowRate)
        });

      }else if(selectedDataSet === "fast-then-very-slow") {
        axios.get(PokemonGrowthRates[5].url).then((res) => {
          allPokeGrowthRates.push(res.data);
          let genSlowRate = res.data.levels.map((item) => {
            return(
            item.experience
            )     
          })         
          setGenSlowRate(genSlowRate)
        });

      }
     
    });
  }, [selectedDataSet]);

 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  let labels = [];

  for (let i = 0; i < 101; i++) {
    labels.push(i)
  }
 
  const data = {
    labels,
    datasets: [
      {
        label: selectedDataSet,
        data: genSlowRate,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="Back">
        <div className="Statement">
          <h3>have a look at the different speeds some pokemon </h3>
        </div>

        <div className="container">
          <button className="bit" onClick={clickedButton}>Slow</button>
          <button className="bit" onClick={clickedButton}>Medium</button>
          <button className="bit" onClick={clickedButton}>Fast</button>
          <button className="bit" onClick={clickedButton}>Medium-Slow</button>
          <button className="bit" onClick={clickedButton}>slow-then-very-fast</button>
          <button className="bit" onClick={clickedButton}>fast-then-very-slow</button>
        </div>
        <div className="TLine">
          <Line data={data} option={options} />
          {/* <Line data= {{
                
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [1, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]}}
                heigh = {400}
                width = {600}
                options = {{maintainAspectRatio: false}} */}
        </div>
      </div>
    </>
  );
};

export default TimeLine;

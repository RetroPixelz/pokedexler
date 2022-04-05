import react from 'react';
import {Bar, bar, Line} from 'react-chartjs-2'
import './TimeLine.css'
import axios from "axios";
import React, { useEffect, useState } from "react";




const TimeLine = () => {

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

    return(
<>
<div className="Back">
        <div className="Statement">
            <h3>Here is a timeline of the generations of pokemon game releases</h3>
        </div>
       
        <div className='container'>
            <button className='bit'> Line 1</button>
            <button className='bit'> Line 1</button>
            <button className='bit'> Line 1</button>
            <button className='bit'> Line 1</button>
            <button className='bit'> Line 1</button>
        </div>
        <div className="TLine">
        <Line data= {{
                
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
                options = {{maintainAspectRatio: false}}
 
           />
        </div>

</div>
</>
    );
}

export default TimeLine;
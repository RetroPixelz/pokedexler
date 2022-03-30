import React, { useEffect, useState } from "react";

import axios from "axios";
import { Outlet } from "react-router-dom";

export default function Battle(){

    const [genPokeCard, SetGenPokeCard] = useState([]);

    // useEffect(() => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon/' )

    //     .then((response) => {
    //         console.log(response.data)
    //         let pokemons = response.data.results;
    //         let PokeData = [];

    //         for (let i = 0; i < pokemons.length; i++) { 
    //             PokeData.push({
    //                 name: pokemons[i].name,
    //                 url: pokemons[i].url,

    //             })
   
    //         }
    //         for (let i = 0; i < pokemons.length; i++) {
   
    //         }

    //         let startItem = pokemons.map((item) => <Card pname={item.name} plink={item.url} />)
    //         SetGenPokeCard(startItem);

    //     })
    // })

 

    return (
        <>
        <div className="battleground">
            <div className="row-1">
                <div className="left">
                <div className="select1">
                        <select id="first">
                            <option>pokemojn</option>
                        </select>
                    </div>
                </div>

                <div className="right"> 
                    <div className="select2">
                        <select id="second">
                            <option>pokemojn</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="flex-container">
                <div className="flex-item" id="Card">
                    <div className="pokemon-1"></div>
                    <div className="stats-1">
                        <h3>HP:</h3>
                        <h3>DMG:</h3>
                        <h3>TYPE:</h3>
                        <h3>AND</h3>
                    </div>
                </div>
                <div className="flex-item" id="fight">
                    
                    <div className="vs"></div>
                    <h2> Fight! </h2>
                </div>
                <div className="flex-item">
                    <div className="pokemon-2"></div>
                    <div className="stats-2">
                    <h3>HP:</h3>
                        <h3>DMG:</h3>
                        <h3>TYPE:</h3>
                        <h3>AND</h3>
                    </div>
                </div>

            </div>
            <div className="row-3">
                
            </div>
        </div>
        </>
    )
}

import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ChartOne from "./ChartOne";




export default function Main() {
  return (
    <>
      <div className="battleground2">
        <div className="hero-text">
          <h1>Welcome To The PokeDexLer !</h1>
          <h3>
            {" "}
            Have a look through our extensive and impressive pokedex, or better
            yet go battle and brawl it our with you favourite pokemon !{" "}
          </h3>
        </div>

        <div className="box">
          <div className="block">
            <div className="pie"></div> 
          </div>
          <div className="block">
            <div className="doughnut"></div>
          </div>
          <div className="block">
            <div className="bar"></div>
          </div>
        </div>

        <div className="show">
           <ChartOne />
        </div>

      </div>
    </>
  );
}

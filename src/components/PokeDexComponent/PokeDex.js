import React from "react";
import { Outlet } from "react-router-dom";



const PokeDex = () => {
    console.log("hello");
    return(
        <>
             <div className="background">

<div className="hero-text2">
  <h1>HAVE A LOOK AT OUR POKEDEX</h1>
  
</div>
  
<div className="block-1">
  
  <div className="left-section">
    <button className="btn1"></button>
    <button className="btn2"></button>
    <button className="btn3"></button>

    <div className="screen">
        <div className="sprite">

        </div>
        <div className="information">
          <h4> Health: </h4>
          <h4> Damage:  </h4>
          <h4> Type: </h4>
          <h4> Type: </h4>


        </div>
    </div>
  </div>
  <div className="right-section">
    <div className="poke-list">
    
    </div>
  </div>
  
</div>

</div>
        <Outlet />
        </>
    )
}

export default PokeDex;
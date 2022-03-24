import React from "react";
import { Outlet } from "react-router-dom";



const PokeDex = () => {
    console.log("hello");
    return(
        <>
             <div className="background">

<div className="hero-text">
  <h1>Welcome To The PokeDexLer !</h1>
  <h3> Have a look through our extensive and impressive pokedex, or better yet go battle and brawl it our with you favourite pokemon ! </h3>
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
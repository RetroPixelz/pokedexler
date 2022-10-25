import React from "react";
import PokeDex from "../Main/PokeDex/PokeDex";
import './Main.css'
import { useOutletContext } from "react-router-dom";


export default function Main() {

  const data = useOutletContext();


  return (
    <>
      <div className="battleground2">
        <div className="hero-text">
    
        </div>

        <h1>Welcome to the poxedexler, Where you can search throught our very own pokendex or even do a battle of your own !</h1>

    
        <div className="main-block">
          <PokeDex pokemonDataBaseNamesList={data.pokemonDataBaseNamesList} pokemonDataBase={data.pokemonDataBase} />
        </div>

        <div className="show">
           
        </div>

      </div>
     
    </>
  );
}

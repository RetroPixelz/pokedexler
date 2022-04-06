import React, { useRef } from "react";
import axios from "axios";
import "./Pokedex.css";
import { useState, useEffect } from "react";
import { PokemonList } from "./pokemonList/PokemonList";
import { PokemonStatsCard } from "./pokemonStatsCard/PokemonStatsCard";

const PokeDex = ({ pokemonDataBaseNamesList, pokemonDataBase }) => {

  
  const [pokemonChosen, setPokemonChosen] = useState();

  function onclickPokemonHandler(event) {
    let pokemonChosen = pokemonDataBase.find(i => i.name === event.target.innerHTML.toLowerCase());
    setPokemonChosen(pokemonChosen)
  }
  console.log(pokemonChosen)

  return (
    <>
      <div className="block-1">
        <div className="left-section">
          <button className="btn1"></button>
          <button className="btn2"></button>
          <button className="btn3"></button>
          <PokemonStatsCard pokemonChosen={pokemonChosen} />
        </div>

        <div className="right-section">
          <div className="poke-list">
            <PokemonList data={pokemonDataBaseNamesList} onClick={onclickPokemonHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeDex;

import React, { useRef } from "react";
import axios from "axios";
import Card from "./Card";

import './Pokedex.css'

import { useState, useEffect } from "react";

const PokeDex = () => {

  const [genPokeListItem, setgenPokeListItem] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
      .then((response) => {
        let pokemons = response.data.results;
        
        const pokeData = [];

        for (let i = 0; i < pokemons.length; i++) {
          pokeData.push({
            name: pokemons[i].name,
            url: pokemons[i].url,
          });
        }

        let startItem = pokeData.map((item) => <Card pname={item.name}  plink={item.url}/>);
        setgenPokeListItem(startItem);
        console.log(pokeData);
       


        

      });

    }, []);



      // function genPoke() {
      //   for (let i = 0; i < startItem.length; i++) {
      //     if(startItem === [i]+1){
      //       .push(imgURL)
      //     }
        
      // }
      // }



  // const [selpokemon, setSelPokemon] = useState([]);

  // const [pokeName, setPokeName] = useState([]);
  // const [pokeUrl, setPokeUrl] = useState([]);

  // let selectedPoke = useRef();


  //     const getPoke = () => {

  //       let chosenPoke = startItem;
  //       let pokeId = '';

  //       for (let i = 0; i < pokemon.length; i++) {
  //         if(pokemon[i].name === chosenPoke){
  //            pokeId = pokemon[i].id;

  //         }
  //       }

  //       let newURL = 'https://pokeapi.co/api/v2/pokemon/' + pokeId;

  //       axios.get(newURL)
  //       .then((response)=>{
  //         console.log(response.data.results)
  //         let data = response.data;

  //         setPokeName(data.name);
  //         setPokeUrl(data.url);

  //       })

  //     }
 
  // const [genPokePic, setgenPokePic] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
  //     .then((response) => {
  //       let pokemons = response.data.results;

  //       const pokeData = [];

  //       for (let i = 0; i < pokemons.length; i++) {
  //         pokeData.push({
  //           name: pokemons[i].name,
  //           url: pokemons[i].url,
  //         });
  //       }

  //       let startItem = pokeData.map((item) => (
  //         <Sprite id={item.id} plink={item.url} />
  //       ));
  //       setgenPokePic(startItem);
  //       console.log(pokeData);
  //     });
  // }, []);

  // const [pokemon, setPokemon] = useState([]);

  // const [pokeName, setPokeName] = useState([]);
  // const [pokeUrl, setPokeUrl] = useState([]);

  // let selectedPoke = useRef();

        // useEffect(() => {
        //   axios.get('https://pokeapi.co/api/v2/pokemon')
        //   .then((response) =>{
        //     setPokemon(response.data.results)
        //   })

        // }, []);

        // const getPoke = () => {

        //   let chosenPoke = selectedPoke.current.value;
        //   let pokeId = '';

        //   for (let i = 0; i < pokemon.length; i++) {
        //     if(pokemon[i].name === chosenPoke){
        //        pokeId = pokemon[i].id;

        //     }
        //   }

        //   let newURL = 'https://pokeapi.co/api/v2/pokemon/' + pokeId;

        //   axios.get(newURL)
        //   .then((response)=>{
        //     console.log(response.data.results)
        //     let data = response.data;

        //     setPokeName(data.name);
        //     setPokeUrl(data.url);

        //   })

        // }

  return (
    <>
      
      
        <div className="block-1">
          <div className="left-section">
            <button className="btn1"></button>
            <button className="btn2"></button>
            <button className="btn3"></button>

            <div className="screen">
              <div className="sprite" id="imge">

              </div>

              <div className="information">
                <h3 id="hp"> Health: </h3> 
                <h3 id="dmg"> Damage: </h3>
                <h3 id="atk"> Attack: </h3>
                <h3 id="spec-atk"> Special-attack: </h3>
                <h3 id="spec-def"> Special-defence: </h3>
                <h3 id="speed"> Speed: </h3>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="poke-list">
              
              {genPokeListItem}
          
            </div>
          </div>
        </div>
      
      
    </>
  );
};

export default PokeDex;

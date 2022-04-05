import axios from "axios";
import React from "react";
import "./Pokedex.css";

const PokeListItem2 = (props) => {
  let pokemonURL = props.plink;
  let baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  let URLid = baseURL + props.id + ".png";

  function showPoke2() {
    axios.get(props.plink).then((Response) => {

      localStorage.setItem("pokemonTwo", Response )

      let hp2 = document.getElementById("hp2");
      let dmg2 = document.getElementById("dmg2");
      let atk2 = document.getElementById("atk2");
      let specatk2 = document.getElementById("spec-atk2");
      let specdef2 = document.getElementById("spec-def2");
      let speed2 = document.getElementById("speed2");
      let imgURL = Response.data.sprites.front_default;
      let imgStyle = document.getElementById("imgee2");

      let HP = Response.data.stats[0].base_stat;
      let DMG = Response.data.stats[2].base_stat;
      let ATK = Response.data.stats[1].base_stat;
      let SPECATK = Response.data.stats[3].base_stat;
      let SPECDEF = Response.data.stats[4].base_stat;
      let SPEED = Response.data.stats[5].base_stat;
     
      let PokemonTwo = [HP, DMG, ATK, SPECATK, SPECDEF, SPEED];
      
      localStorage.setItem("PokemonTwo", PokemonTwo)
      console.log(PokemonTwo)
      

     hp2.innerHTML = `Health:` + Response.data.stats[0].base_stat;
     dmg2.innerHTML = `Defence:` + Response.data.stats[2].base_stat;
     atk2.innerHTML = `attack:  ` +Response.data.stats[1].base_stat;
     specatk2.innerHTML = `special-attack:   ` +Response.data.stats[3].base_stat;
     specdef2.innerHTML = `special-defence:   ` +Response.data. stats[4].base_stat;
     speed2.innerHTML = `speed:   ` +Response.data.stats[5].base_stat;
      

      imgStyle.style.backgroundImage = "url(" + imgURL + ")";
      document.getElementById("imgee2").style.backgroundImage =
        "'url(" + Response.data.sprites.front_default.url + ")'";
    });
  }

  return (
    <>
      <div className="poke-list-item">
      <a
          onClick={() => {
            showPoke2();
          }}
        >
          {" "}
          <h3 id="bttn">{props.pname}</h3>{" "}
        </a>
      </div>
    </>
  );
};

export default PokeListItem2;

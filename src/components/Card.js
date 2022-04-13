import axios from "axios";
import React, { useState } from "react";



const Card = (props) => {

  const [genDataSetOne, setgenDataSetOne] = useState([]);

  const [genPokemonOne, setGenPokemonOne] = useState([]);
  
  function showPoke() {
    axios.get(props.plink).then((Response) => {
      
      let hp = document.getElementById("hp");
      let dmg = document.getElementById("dmg");
      let atk = document.getElementById("atk");
      let specatk = document.getElementById("spec-atk");
      let specdef = document.getElementById("spec-def");
      let speed = document.getElementById("speed");
      let imgURL = Response.data.sprites.front_default;
      let imgStyle = document.getElementById("imge");

      let HP = Response.data.stats[0].base_stat;
      let DMG = Response.data.stats[2].base_stat;
      let ATK = Response.data.stats[1].base_stat;
      let SPECATK = Response.data.stats[3].base_stat;
      let SPECDEF = Response.data.stats[4].base_stat;
      let SPEED = Response.data.stats[5].base_stat;
     
      let PokemonOne = [HP, DMG, ATK, SPECATK, SPECDEF, SPEED];
      setGenPokemonOne(genPokemonOne)
 
      
      // let genDataSetOne = [HP, DMG, ATK];
      // setgenDataSetOne(genDataSetOne)
      
      // let PokemonOne = [HP, DMG, ATK, SPECATK, SPECDEF, SPEED];
      // let PokemonOne = [HP, DMG, ATK, SPECATK, SPECDEF, SPEED];

      localStorage.setItem("PokemonOne", PokemonOne)
      
     hp.innerHTML = `Health:  ` + Response.data.stats[0].base_stat;
     dmg.innerHTML = `Damage:   ` +Response.data.stats[2].base_stat;
     atk.innerHTML = `attack:  ` +Response.data.stats[1].base_stat;
     specatk.innerHTML = `special-attack:   ` +Response.data.stats[3].base_stat;
     specdef.innerHTML = `special-defence:   ` +Response.data.stats[4].base_stat;
     speed.innerHTML = `speed:   ` +Response.data.stats[5].base_stat;

      imgStyle.style.backgroundImage = "url(" + imgURL + ")";
      document.getElementById("imge").style.backgroundImage =
        "'url(" + Response.data.sprites.front_default.url + ")'";
  
    });
  }

  return (
    <>
      <div className="poke-list-item">
        <a onClick={() => {showPoke(); }} >
          <h3 id="bttn">{props.pname}</h3>
        </a>    
      </div>
    </>
  );
};

export default Card;

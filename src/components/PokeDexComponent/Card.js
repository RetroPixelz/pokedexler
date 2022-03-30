
  import { getElementError } from "@testing-library/react";
import axios from "axios";
import React from "react";
  import './Pokedex.css'


  const PokeListItem = (props) => {
  
    let pokemonURL = props.plink;
    let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let URLid = baseURL+props.id+".png"
      
      

    function showPoke() {
      // appendChild = displayNone;
      axios.get(props.plink)
      .then((Response) => {
        console.log(Response)
          let hp = document.getElementById("hp")
          let dmg = document.getElementById("dmg")
          let imgURL = Response.data.sprites.front_default
          let imgStyle = document.getElementById("imge")
          hp.appendChild(document.createTextNode(Response.data.stats[0].base_stat))
          dmg.appendChild(document.createTextNode(Response.data.stats[1].base_stat))

          imgStyle.style.backgroundImage="url("+ imgURL +")"
          document.getElementById("imge").style.backgroundImage="'url("  + Response.data.sprites.front_default.url +  ")'";                      
      })
    }



    
     
  
      return(

        <>
       
        <div className="poke-list-item">
            
          <a onClick={() => {showPoke()}}> <h3 id="bttn">{props.pname}</h3> </a>
        </div>
        
        </>

      
      );
  
  };
  
  export default PokeListItem;
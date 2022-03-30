
  import React from "react";
  import './Pokedex.css'


  const PokeListItem = (props) => {
  
    let pokemonURL = props.plink;
    let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let URLid = baseURL+props.id+".png"
      
      
    // console.log(props.pname);
     
  
      return(

        <>
         <div className="poke-sprite">
         <div className="poke-card-icon"><img src={URLid}/></div>

        </div>
        </>
        
      );
  
  };
  
  export default PokeListItem;
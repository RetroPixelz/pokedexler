
  import React from "react";
  import './Pokedex.css'


  const PokeListItem = (props) => {
  
    let pokemonURL = props.plink;
    let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let URLid = baseURL+props.id+".png"
      
      
    // console.log(props.pname);
     
  
      return(

        <>
        {/* <div className="poke-sprite">
        <div className="poke-card-icon"><img src={URLid}/></div>
        </div> */}


        <div className="poke-list-item">
            <button id="bttn"><h3>{props.pname}</h3></button>       
        </div>
        </>
        //  <div className="Poke-list">
        //     <p>  {}  </p>
        //        {/* <li>  hehe# {props.pname}  </li>     */}
        //        {/* <p> ge {props.pname} </p> */}

        // </div>    
      );
  
  };
  
  export default PokeListItem;
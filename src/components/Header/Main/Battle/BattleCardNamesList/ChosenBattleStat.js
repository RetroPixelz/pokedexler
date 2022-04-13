import React from 'react'
import image from "./img/whatpokemon.jpg"
import classes from "./pokemonStatsCard.module.css"


export const ChosenBattleStat= ({pokemonChosen}) => {
    let pokemonChosenData = {

        image: image,
        name: 'Name: ',
        hp: 'health: ',
        dmg: 'damage: ',
        atk: 'attack: ',
        spec_atk: 'special-attack: ',
        spec_def: 'special-defense: ',
        speed: 'Name: ',

    }
    if (ChosenPokemon) {
        console.log(pokemonChosen.sprites.front_shiny)
        pokemonChosenData = {
        
            image: pokemonChosen.sprites.front_shiny,
            name: 'Name: ' + pokemonChosen.name,
            hp: 'Name: ' + pokemonChosen.stats[0].base_stat,
            dmg: 'Name: ' +  pokemonChosen.stats[1].base_stat,
            atk: 'Name: ' +  pokemonChosen.stats[3].base_stat,
            spec_atk: 'special-attack: ' +  pokemonChosen.stats[4].base_stat,
            spec_def: 'special-defense: ' +  pokemonChosen.stats[5].base_stat,
            speed: 'speed: '+  pokemonChosen.stats[5].base_stat,
        }
        console.log(ChosenPokemon)
    }
  return (
    
    <div className="screen">
      <div className="sprite" id="imge">
            <img  className={classes.img} alt={"pokemon chosen"} src={pokemonChosenData.image}/>
      </div>

      <div className={classes.information}>
        <h3>{pokemonChosenData.name} </h3> 
        <h3>{pokemonChosenData.hp} </h3> 
        <h3>{pokemonChosenData.dmg} </h3> 
        <h3>{pokemonChosenData.atk} </h3> 
        <h3>{pokemonChosenData.spec_atk} </h3> 
        <h3>{pokemonChosenData.spec_def} </h3> 
        <h3>{pokemonChosenData.speed} </h3> 

        
      </div>
    </div>
    
  )
}

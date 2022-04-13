import React from 'react'
import { PokemonList } from '../../PokeDex/pokemonList/PokemonList'
import { Item } from './Item'

export const BattleNamesList = (data, name) => {
    return (
        <div>
            {/* {data.map((item) => {
                return (
                    <Item name={item} />
                )
            })} */}

            {data.map((item) => {
                return(
                    <PokemonList/>
                )
            })}

            
            {/* <Item name={name}/> */}
        </div>
    )
}

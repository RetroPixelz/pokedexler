import React, { useEffect, useState } from 'react'
import Item from './UI/Item'

export const PokemonList = ({data, onClick}) => {
    
  return (
    <div>
        {data.map((item) => {
            return(
                <Item onClick={onClick} name={item}/>
            )
            console.log(data)
        })}
    </div>
  )
}

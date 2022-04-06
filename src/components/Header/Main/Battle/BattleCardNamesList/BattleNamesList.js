import React from 'react'
import { Itemcard } from './Itemcard'

export const BattleNamesList = (data, onClick) => {
    return (
        <div>
             {data.map((item) => {
            return(
                <Itemcard onClick={onClick} name={item}/>
            )
        })}
        </div>
    )
}

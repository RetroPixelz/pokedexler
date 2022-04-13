import classes from './Itemcard.module.css'
import React from 'react'

export const Item = (name) => {
  console.log(name)
    return (
        <p  className={classes.Item}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    )
}

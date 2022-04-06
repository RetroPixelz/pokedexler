import classes from './Itemcard.module.css'
import React from 'react'

export const Itemcard = (name) => {
    return (
        <p  className={classes.Itemcard}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    )
}

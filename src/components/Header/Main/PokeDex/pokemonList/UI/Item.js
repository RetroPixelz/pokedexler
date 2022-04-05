import React from "react";
import classes from "./item.module.css";

export default function Item({ name, onClick }) {
  
  return (
    <p onClick={onClick} className={classes.item}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </p>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";

export default function PokeDex(){
    return(
        <>
            <div className="Dex">
                
            </div>
        <Outlet />
        </>
    )
}
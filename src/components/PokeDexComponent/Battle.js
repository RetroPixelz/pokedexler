import React from "react";
import { Outlet } from "react-router-dom";

export default function Battle(){
    return (
        <>
        <div className="battleground">
            <div className="row-1">

            </div>
            <div className="flex-container">
                <div className="flex-item">
                    <div className="pokemon-1"></div>
                    <div className="stats-1"></div>
                </div>
                <div className="flex-item" id="fight">
                    
                    <div className="vs"></div>
                    <h2> Fight! </h2>
                </div>
                <div className="flex-item">
                    <div className="pokemon-2"></div>
                    <div className="stats-2"></div>
                </div>

            </div>
            <div className="row-3">

            </div>
        </div>
        </>
    )
}

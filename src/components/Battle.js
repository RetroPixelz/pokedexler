import "./Battle.css"

const Battle = () =>{
    return (
        <div className="battleground">
            <div className="flex-container">
                <div className="flex-item"> 
                    <div className="Poke-1"></div>
                    <div className="Info-1"></div>
                </div>
                <div className="flex-item"><h2>VS</h2></div>
                <div className="flex-item">
                    <div className="Poke-2"></div>
                    <div className="Info-2"></div>

                </div>

            </div>
        </div>
    )
}

export default Battle;
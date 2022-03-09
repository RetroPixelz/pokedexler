import "./Dex.css";

const Dex = () =>{
    return(
        <>
        <div className="Background"> 
        <div className='Hero'>
            <div className="Hero-Text">
            <h1 id="center">Welcome To PokeDexLer !</h1>
            <div className="par">
                <p>Welcome to PokeDexLer, your one stop Pokestop
                    where you can look through the Pokedex 
                    or even battle some Awesome Pokemon in the Arena !

                </p>
            </div>
            </div>
            
        </div>
        <div className="Main">
            <div className="Pokedex">
                <div className="Screen">
            </div>

            <div className="Arrows">

                <div className="arrow-left"></div>
                <div className="arrow-right"></div>
            
            </div> 
                
            </div>
        </div>
        </div>
        </>
    );
}

export default Dex;
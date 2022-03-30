import { Link, Outlet } from "react-router-dom";





export default function Header() {
    return (
      <main>
        <div className="nav-container">

          <div className="logo"> </div>
          <ul className="nav">
              
            
            <li><Link to="/main"> <h2>Home</h2> </Link></li>
            <li><Link to="/PokeDex"><h2>PokeDex</h2> </Link></li>
            <li><Link to="/Battle"><h2>Battle</h2> </Link></li>
            

            
          </ul>
        </div>
        
        
        <Outlet />
      </main>
    );
  }
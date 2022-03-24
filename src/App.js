import Battle from "./components/Battle";
import Header from "./components/Header";
import Dex from "./components/Dex"
import { Outlet, Link } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <>
      
      <nav className="nav">

        <ul>
          <li>
          <div className="LOGO"></div>
            <Link to="/Dex"><h2>Dex</h2></Link> 
            <Link to="/Battle"><h2>Battle</h2></Link>
          </li>   
        </ul>
        
      </nav>

      <div className="Back">
        
      </div>
      <Outlet />
    </>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Dex />
      
//         <Routes>
//           <Route path="/" element={ <App />} />
//           <Route path="Battle" element={< Battle/>}/>
//           <Route />
//         </Routes> 

//     </div>
//   );
// }

// export default App;

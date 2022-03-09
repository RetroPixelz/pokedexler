import Battle from "./components/Battle";
import Header from "./components/Header";
import Dex from "./components/Dex"
import { Outlet, Link } from "react-router-dom";
// import Info from "./components/Info"
import {Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <div className="logo">
      
      <nav className="nav">

        <div className="LOGO"></div>
      
        <Link to="/Dex">Dex</Link> 
        <Link to="/Battle">Battle</Link>
      
        
      </nav>
      <Outlet />
    </div>
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

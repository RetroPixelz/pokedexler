import Battle from "./components/Battle";
import Dex from "./components/Dex"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
BrowserRouter,
Routes,
Route
} from 'react-router-dom';


ReactDOM.render(
  
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<App />} >
        <Route path="Dex" element={<Dex />} />
        <Route path="Battle" element={<Battle />} />
       </Route>
      
     </Routes>
    </BrowserRouter>

  ,
  document.getElementById('root')
);


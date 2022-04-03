import React from "react";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/PokeDexComponent/Header";
import PokeDex from "./components/PokeDexComponent/PokeDex";
import Battle from "./components/PokeDexComponent/Battle";
import Main from "./components/PokeDexComponent/Main";
import TimeLine from "./components/PokeDexComponent/TimeLine";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/Main" element={<Main />} />
            <Route path="/PokeDex" element={<PokeDex />} />
            <Route path="/Battle" element={<Battle />} />
            <Route path="/TimeLine" element={<TimeLine />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;

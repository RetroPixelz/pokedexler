import React from "react";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Main/Header";
import Battle from "./components/Header/Main/Battle/Battle";
import Main from "./components/Header/Main/Main";
import TimeLine from "./components/TimeLine";



function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Main />} />
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

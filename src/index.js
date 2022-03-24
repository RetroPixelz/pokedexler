import React from "react";
import 'react-router-dom';
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { render } from "@testing-library/react";
import PokeDex from "./components/PokeDexComponent/PokeDex";
import './index.css'
import './components/Header.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route path="/PokeDex" element={<PokeDex />} />
        
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
import React from "react";
import axios from "axios";
import 'react-router-dom';
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect} from 'react';
import { render } from "@testing-library/react";
import PokeDex from "./components/PokeDexComponent/PokeDex";
import Battle from './components/PokeDexComponent/Battle'
import Main from './components/PokeDexComponent/Main'
import Card from "./components/PokeDexComponent/Card";
import './index.css'
import './components/Header.css'
import './components/PokeDexComponent/Pokedex.css'
import './components/PokeDexComponent/Battle.css'
import './components/PokeDexComponent/Main.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route path="/Main" element={<Main />} />
      <Route path="/PokeDex" element={<PokeDex />} />
      <Route path="/Battle" element={<Battle />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
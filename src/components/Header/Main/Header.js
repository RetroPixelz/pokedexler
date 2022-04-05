import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [pokemonDataBase, setpokemonDataBase] = useState([]);
  const [pokemonDataBaseNamesList, setpokemonDataBaseNamesList] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
    axios
      .get(url)
      .then((res) => {
        const pokemonNamesAndUrls = res.data.results;
        
        let pokemonFullData = [];
        pokemonNamesAndUrls.forEach((element) => {
          axios
            .get(element.url)
            .then((res) => {
              pokemonFullData.push(res.data);
              setpokemonDataBase(pokemonFullData.sort());
              setpokemonDataBaseNamesList(
                pokemonFullData.sort().map((item) => {
                  return item.name;
                })
              );
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <div className="nav-container">
        <div className="logo"> </div>
        <ul className="nav">
          <li>
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/Battle">
              <h2>Battle</h2>
            </Link>
          </li>
          <li>
            <Link to="/TimeLine">
              <h2>TimeLine</h2>{" "}
            </Link>
          </li>
        </ul>
      </div>
      <Outlet
        context={{
          pokemonDataBase: pokemonDataBase,
          pokemonDataBaseNamesList: pokemonDataBaseNamesList,
        }}
      />
    </main>
  );
}

import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./components/PokemonContext";

function App() {
  const [filter, setFilter] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);
  return (
    <>
      <PokemonContext.Provider
        value={{
          filter,
          setFilter,
          pokemon,
          setPokemon,
          selectedItem,
          setSelectedItem,
        }}
      >
        <h1 className="title">Pokemon search engine</h1>
        <div className="app">
          <div className="table">
            <div className="table-inner">
              <PokemonFilter />
              <PokemonTable />
            </div>
            {selectedItem && <PokemonInfo {...selectedItem} />}
          </div>
        </div>
        <div></div>
      </PokemonContext.Provider>
    </>
  );
}

export default App;

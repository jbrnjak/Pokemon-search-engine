import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";

const PokemonFilter = () => {
  const {filter, setFilter} = useContext(PokemonContext)
  return (
  <input 
    type="text"
    placeholder="Enter pokemon name!"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  ></input>
);
};
export default PokemonFilter;

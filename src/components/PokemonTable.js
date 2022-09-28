import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
    const {pokemon, filter, setSelectedItem} = useContext(PokemonContext)
    return(
<table width="100%">
    <thead>
      <tr className="thead">
        <th>Type</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter((pokemon) =>
          pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
        )
        .slice(0, 20)
        .map((pokemon) => (
          <PokemonRow
            pokemon={pokemon}
            key={pokemon.id}
            onSelect={(pokemon) => setSelectedItem(pokemon)}
          />
        ))}
    </tbody>
  </table>
    )
  
}
export default PokemonTable;

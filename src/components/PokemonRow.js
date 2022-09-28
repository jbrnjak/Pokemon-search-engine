import React from "react";
import PropTypes from "prop-types";

 
const PokemonRow = ({ pokemon, onSelect }) => (

 



  <tr className="tbody">
    <td className="tbody1">{pokemon.name.english}</td>
    <td className="tbody2">{pokemon.type.join(", ")}</td>
    <td className="btn">
      <button className="btn1" onClick={() => onSelect(pokemon)}>
        More information!
      </button>
    </td>
    <td>
      <button className="btn2" type="reset">Reset!</button>
    </td>
  </tr>
)

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
}
export default PokemonRow;

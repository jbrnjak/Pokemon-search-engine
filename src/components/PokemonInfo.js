import React from "react";


const PokemonInfo = ({ name, base }) => (
  <div className="tbl2">
    <h1 className="tbl-head">{name.english}</h1>
    <table className="tbl21">
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td className="tbl-row">{key}</td>
          <td className="tbl-row2">{base[key]}</td>
        </tr>
      ))}
    </table>
  </div>
);



export default PokemonInfo;

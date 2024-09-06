import React from "react";

function TypeSelection({ array: [] }) {
  const array = array;

  return (
    <div>
      <select>
        {array.map((pokemon: any) => (
          <option key={pokemon.id} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeSelection;

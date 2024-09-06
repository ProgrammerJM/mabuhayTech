import React from "react";
// import { data } from "../data/data";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

function TypeSelection({
  array,
}: {
  array: Pokemon[]; // Update the type definition to include the 'array' property as an array of Pokemon objects
}) {
  console.log(array);
  return (
    <div>
      {/* {array
        .filter(
          (value: any, index: any, self: any) => self.indexOf(value) === index
        )
        .map((pokemon: any) => (
          <div key={pokemon.id} className="flex flex-col">
            <h2>{pokemon.name}</h2>
          </div>
        ))} */}
      <h1 className="text-black font-semibold dark:text-white">Types</h1>
      <ul>
        {array.map((pokemon: Pokemon) => (
          <li key={pokemon.id}>
            {pokemon.types.map((type: string) => (
              <span key={type} className="flex">
                {type} - {pokemon.name}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TypeSelection;

import React from "react";
// import { data } from "../data/data";

function TypeSelection({ array }: any) {
  return (
    <div>
      {array
        .filter(
          (value: any, index: any, self: any) => self.indexOf(value) === index
        )
        .map((pokemon: any) => (
          <div key={pokemon.id} className="flex flex-col">
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      {/* <h1 className="text-black font-semibold dark:text-white">Types</h1>
      <ul>
        {data.map((pokemon: any) => (
          <li key={pokemon.id}>
            {pokemon.types.map((type: string) => (
              <span key={type} className="flex">
                {type} - {pokemon.name}
              </span>
            ))}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default TypeSelection;

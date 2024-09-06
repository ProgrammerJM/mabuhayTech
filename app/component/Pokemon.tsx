import React from "react";
import List from "./List";

function Pokemon({ data }: any) {
  return (
    <div>
      <div className="flex">
        {data.map((pokemon: any) => (
          <div key={pokemon.id} className="card">
            <img src={pokemon.image} alt={pokemon.name} />
            <div>
              <h2>{pokemon.name}</h2>
              <p>
                {pokemon.types.map((type: string) => (
                  <span key={type} className="type">
                    {type}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <List data={data} />
    </div>
  );
}

export default Pokemon;

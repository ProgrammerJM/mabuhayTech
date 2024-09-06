import React from "react";
import TypeSelection from "./TypeSelection";

function List({ data }: any) {
  let array = [];

  {
    data.map((pokemon: any) => (
      <div key={pokemon.id} className="card">
        <h2>{pokemon.name}</h2>
        {array.push(pokemon.name)}
      </div>
    ));
  }
  return (
    <div className="flex flex-col">
      {array}
      <TypeSelection array={array} />
    </div>
  );
}

export default List;

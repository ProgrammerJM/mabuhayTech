// import React from "react";
// import TypeSelection from "./TypeSelection";

// function List({ data }: any) {
//   let array = [];

//   {
//     data.map((pokemon: any) => (
//       <div key={pokemon.id} className="flex flex-col">
//         <h2>{pokemon.name}</h2>
//         {array.push(pokemon.name)}
//         <button>select</button>
//       </div>
//     ));
//   }

//   return (
//     <div className="flex flex-col">
//       {array}
//       <TypeSelection array={array} />
//     </div>
//   );
// }

// export default List;
"use client";
import React from "react";
import TypeSelection from "./TypeSelection";

function List({ data }: any) {
  const handleSelect = (id: number) => {
    console.log("selected", id);
  };

  return (
    <div className="flex flex-col">
      {data.map((pokemon: any) => (
        <div key={pokemon.id} className="flex flex-col">
          <h2>{pokemon.name}</h2>
          <button onClick={() => handleSelect(pokemon.id)}>select</button>
        </div>
      ))}
      <TypeSelection array={data.map((pokemon: any) => pokemon.name)} />
    </div>
  );
}

export default List;

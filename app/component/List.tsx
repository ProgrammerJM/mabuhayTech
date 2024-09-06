import React from "react";
import TypeSelection from "./TypeSelection";

function List({
  data,
}: {
  data: { id: number; name: string; image: string; types: string[] }[];
}) {
  const array: { id: number; name: string; image: string; types: string[] }[] =
    [];

  {
    data.map(
      (pokemon: {
        id: number;
        name: string;
        image: string;
        types: string[];
      }) => (
        <div key={pokemon.id} className="flex flex-col">
          <h2>{pokemon.name}</h2>
          {array.push(pokemon)}
        </div>
      )
    );
  }

  return (
    <div>
      <div className="flex justify-between">
        {/* {array} */}
        {array.map(
          (pokemon: {
            id: number;
            name: string;
            image: string;
            types: string[];
          }) => (
            <div key={pokemon.id} className="flex my-4">
              <h2>{pokemon.name}</h2>
            </div>
          )
        )}
      </div>
      <TypeSelection array={array} />
    </div>
  );
}

export default List;
// "use client";
// import React from "react";
// import TypeSelection from "./TypeSelection";

// function List({ data }: any) {
//   const handleSelect = (id: number) => {
//     console.log("selected", id);
//   };

//   return (
//     <div className="flex flex-col">
//       {data.map((pokemon: any) => (
//         <div key={pokemon.id} className="flex flex-col">
//           <h2>{pokemon.name}</h2>
//           <button onClick={() => handleSelect(pokemon.id)}>select</button>
//         </div>
//       ))}
//       <TypeSelection array={data.map((pokemon: any) => pokemon.name)} />
//     </div>
//   );
// }

// export default List;

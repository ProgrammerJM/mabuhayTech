import React from "react";

function Pokemon({
  data,
}: {
  data: { id: number; name: string; image: string; types: string[] }[];
}) {
  return (
    <div>
      <div className="flex">
        {data.map(
          (pokemon: {
            id: number;
            name: string;
            image: string;
            types: string[];
          }) => (
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
          )
        )}
      </div>
    </div>
  );
}

export default Pokemon;

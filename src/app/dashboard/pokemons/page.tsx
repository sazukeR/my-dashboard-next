import Image from "next/image";
import { PokemonResponse, SimplePokemon } from "./interface";

const getPokemons = async (
 limit = 20,
 offset = 0
): Promise<SimplePokemon[]> => {
 const data: PokemonResponse = await fetch(
  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
 ).then((res) => res.json());

 const resp = data.results.map((pokemon) => {
  return {
   id: Number(pokemon.url.split("/").at(-2)),
   name: pokemon.name,
  };
 });

 return resp;
};

export default async function PokemonsPage() {
 const pokemons = await getPokemons(151, 0);

 return (
  <div className="flex flex-col">
   <div className="flex flex-wrap gap-10 items-center justify-center ">
    {pokemons.map(({ id, name }) => (
     <Image
      key={id}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      width={100}
      height={100}
      alt={name}
     />
    ))}
   </div>
  </div>
 );
}

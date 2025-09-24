import Image from "next/image";
import { PokemonResponse, SimplePokemon } from ".";
import { PokemonGrid } from "./components/PokemonGrid";

const getPokemons = async (
 limit = 20,
 offset = 0
): Promise<SimplePokemon[]> => {
 const data: PokemonResponse = await fetch(
  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
 ).then((res) => res.json());

 const resp = data.results.map((pokemon) => {
  return {
   id: pokemon.url.split("/").at(-2)!,
   name: pokemon.name,
  };
 });

 throw new Error("Este error no deberia suceder");

 return resp;
};

export default async function PokemonsPage() {
 const pokemons = await getPokemons(151, 0);

 return (
  <div className="flex flex-col">
   <span className="text-5xl my-2">
    Listado de pokemons <small>Estatico</small>
   </span>

   <PokemonGrid pokemons={pokemons} />
  </div>
 );
}

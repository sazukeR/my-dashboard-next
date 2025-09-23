import { SimplePokemon } from "../interface/simple-pokemon.interface";
import { PokemonCard } from "./PokemonCard";

interface Props {
 pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
 return (
  <div className="flex flex-wrap gap-10 items-center justify-center ">
   {pokemons.map((poke) => (
    <PokemonCard pokemon={poke} key={poke.id} />
   ))}
  </div>
 );
};

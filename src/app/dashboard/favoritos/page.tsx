import { Metadata } from "next";
import { PokemonGrid } from "@/pokemons/components";

export const metadata: Metadata = {
 title: "Pokemons favoritos",
 description: "Pokemons favoritos",
};

export default async function FavoritosPage() {
 return (
  <div className="flex flex-col">
   <span className="text-5xl my-2">
    Pokemons favoritos <small className="text-blue-500">Estado global</small>
   </span>

   <PokemonGrid pokemons={[]} />
  </div>
 );
}

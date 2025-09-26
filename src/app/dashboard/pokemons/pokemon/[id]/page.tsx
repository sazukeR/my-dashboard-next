import { Pokemon } from "../../interface/pokemon.interface";

interface Props {
 params: Promise<{ id: string }>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {
 const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
  cache: "force-cache",
 }).then((res) => res.json());

 return resp;
};

export default async function PokemonPage({ params }: Props) {
 const { id } = await params;

 const pokemon = await getPokemon(id);

 return (
  <div>
   <h1>{id}</h1>

   <p>{JSON.stringify(pokemon)}</p>
  </div>
 );
}

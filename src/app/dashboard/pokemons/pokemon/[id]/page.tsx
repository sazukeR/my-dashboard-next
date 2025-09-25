interface Props {
 params: { id: string };
}

export default function PokemonPage({ params: { id } }: Props) {
 return (
  <div>
   <h1>{id}</h1>
  </div>
 );
}

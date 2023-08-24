import { PokemonDetails } from '../types/pokemonType'

type pokemonCardProps = {
  pokemon: PokemonDetails
}

export const PokemonCard = ({ pokemon }: pokemonCardProps) => {
  return (
    <main className='h-[calc(100vh-160px)] flex flex-col justify-center items-center'>
      <h1 className='font-pokemon-solid text-lg'>{pokemon.name}</h1>
      <img
        src={pokemon.imSrc}
        alt=''
        className='w-[200px] md:w-[400px] object-cover'
      />
      <div className='flex gap-5'>
        <h2 className='font-bold font-mono text-xl'>
          Ataque: {pokemon.attacl}
        </h2>
        <h2 className='font-bold font-mono text-xl'>
          Defensa: {pokemon.defense}
        </h2>
      </div>
    </main>
  )
}

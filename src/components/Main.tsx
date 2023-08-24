import { PokemonData } from '../api/fetchPokemons'
import { Link } from 'react-router-dom'

type MainProps = {
  pokemons: PokemonData[]
}

export const Main = ({ pokemons }: MainProps) => {
  return (
    <main className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mb-[104px] bg-blue-100'>
      {pokemons?.slice(0, 151).map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemons/${pokemon.name}`}>
          <article className='flex flex-col justify-between items-center gap-1 p-2 box-border border-gray-200  shadow-md font-semibold cursor-pointer'>
            <img src={pokemon.image} className='h-[80px]  drop-shadow-2xl ' />
            <p className='font-pokemon-hollow'>{pokemon.name}</p>
            <p className='font-pokemon-solid text-red-500 '>{pokemon.id}</p>
          </article>
        </Link>
      ))}
    </main>
  )
}

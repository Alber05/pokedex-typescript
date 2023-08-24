// https://unpkg.com/pokemons@1.1.0/pokemons.json
import { allPokemonsType } from '../types/allPokemonsTypes'
import { formatName } from '../utils/utils'

export interface PokemonData {
  name: string
  id: string
  image: string
}

export async function fetchPokemons(): Promise<PokemonData[]> {
  const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json')

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons')
  }

  const data = await response.json()

  const results: allPokemonsType[] = data.results

  const pokemons: PokemonData[] = results.map((pokemon) => {
    return {
      name: pokemon.name,
      id: pokemon.national_number,
      image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
        pokemon.name.toLowerCase()
      )}.gif`
    }
  })

  const uniquePokemons = pokemons.filter(
    (pokemon: PokemonData, index: number) => {
      return (
        pokemons.findIndex((other: PokemonData) => other.id === pokemon.id) ===
        index
      )
    }
  )

  return uniquePokemons
}

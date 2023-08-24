// https://pokeapi.co/api/v2/pokemon/ditto

import { PokemonDetails } from '../types/pokemonType'
import { formatName } from '../utils/utils'

export async function fetchPokemon(
  name: string | undefined
): Promise<PokemonDetails> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formatName(name.toLowerCase())}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons')
  }

  const data = await response.json()

  const pokemon: PokemonDetails = {
    name: data.name,
    id: data.id,
    imSrc: data.sprites.front_default,
    hp: data.stats[0].base_stat,
    attacl: data.stats[1].base_stat,
    defense: data.stats[2].base_stat
  }

  return pokemon
}

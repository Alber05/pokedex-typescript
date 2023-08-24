/* eslint-disable multiline-ternary */
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { PokemonData, fetchPokemons } from '../api/fetchPokemons'
import { LoadingScreen } from '../components/LoadingScreen'

export const Pokemons = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [pokemons, setPokemons] = useState<PokemonData[] | []>([])

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true)
      const allPokemons: PokemonData[] = await fetchPokemons()
      setPokemons(allPokemons)
      setTimeout(() => {
        setIsLoading(false)
      }, 200)
    }
    fetchAllPokemons()
  }, [])

  const filteredPokemons = pokemons
    ?.slice(0, 151)
    .filter((pokemon: PokemonData) =>
      pokemon.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )

  return (
    <>
      <Header query={query} setQuery={setQuery} />

      {isLoading || !pokemons ? (
        <LoadingScreen />
      ) : (
        <Main pokemons={filteredPokemons} />
      )}
      <Footer />
    </>
  )
}

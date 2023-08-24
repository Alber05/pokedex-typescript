/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PokemonCard } from '../components/PokemonCard'
import { Footer } from '../components/Footer'
import { fetchPokemon } from '../api/fetchPokemon'
import { PokemonDetails } from '../types/pokemonType'
import Pokeball from '../assets/pokeball.png'
import { LoadingScreen } from '../components/LoadingScreen'

export const Pokemon = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null)
  const { name } = useParams<string>()
  const navigate = useNavigate()

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true)
      const fetchedPokemon = await fetchPokemon(name as string)
      setPokemon(fetchedPokemon)
      setTimeout(() => {
        setIsLoading(false)
      }, 200)
    }
    getPokemon()
  }, [name])

  console.log(pokemon)

  return (
    <>
      <header className='bg-gradient-to-b from-red-600 to-red-400  h-14 p-4 flex  shadow-inner'>
        <button
          className='flex items-center gap-3'
          onClick={() => navigate(-1)}
        >
          <img src={Pokeball} alt='' className='h-full' />
          <p className='font-pokemon-solid'>Go Back</p>
        </button>
      </header>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        pokemon !== null && <PokemonCard pokemon={pokemon} />
      )}
      <Footer />
    </>
  )
}

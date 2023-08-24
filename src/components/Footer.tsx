import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../assets/pokeball.png'
import Pikachu from '../assets/pikachu.png'
import Pointer from '../assets/pointer.png'

export const Footer = () => {
  return (
    <footer className='flex items-center justify-around gap-5 fixed bottom-0 w-[100vw] p-5 bg-gradient-to-t from-red-600 to-red-500 shadow-inner'>
      <Link to='/pokemons' className='footer-links'>
        <img src={Pokeball} alt='pokeball' className='footer-icon w-16' />
        Pokemons
      </Link>
      <Link to='/items' className='footer-links'>
        <img src={Pikachu} alt='pokeball' className='footer-icon' />
        Items
      </Link>
      <Link to='/location' className='footer-links'>
        <img src={Pointer} alt='pokeball' className='footer-icon' />
        Map
      </Link>
    </footer>
  )
}

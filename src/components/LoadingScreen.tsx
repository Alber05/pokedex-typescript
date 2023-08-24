import pokedex from '../assets/pokedex.png'

export const LoadingScreen = () => {
  return (
    <main className='h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-blue-100'>
      <h2 className='font-pokemon-solid'>Cargando....</h2>
      <img src={pokedex} alt='' className='h-[50%]' />
    </main>
  )
}

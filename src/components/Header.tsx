import React, { ChangeEvent } from 'react'

type HeaderProps = {
  query: string
  setQuery: (query: string) => void
}

export const Header = ({ query, setQuery }: HeaderProps) => {
  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <header className='bg-gradient-to-b from-red-600 to-red-400  h-14 p-4 flex justify-center shadow-inner '>
      <input
        type='text'
        placeholder='Search a Pokemon'
        className='border-none w-[80vw] p-[10px] rounded-md placeholder-black bg-blue-50 outline-none'
        value={query}
        onChange={handleQuery}
      />
    </header>
  )
}

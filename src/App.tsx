import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Pokemons } from './pages/Pokemons'
import { Items } from './pages/Items'
import { Pokemon } from './pages/Pokemon'

function App() {
  return (
    <div className='bg-blue-100 min-h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Pokemons />} />
          <Route path='/items' element={<Items />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/pokemons/:name' element={<Pokemon />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

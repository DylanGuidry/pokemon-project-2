import './App.css';
import Home from './components/home.component';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemonDetails/:id' element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Home from './components/home.component';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails';
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemonDetails/:id' element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

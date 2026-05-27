import React from 'react'
import MeuPerfil from './components/MeuPerfil'
import BotaoAlerta from './components/BotaoAlerta'
import TrocaTexto from './components/TrocaTexto'
import PostalLogo from './components/PostalLogo'
import Filme from './components/Filme'
import MaiorDeIdade from './components/MaiorDeIdade'
import CartaoDestaque from './components/CartaoDestaque'
import EcoTexto from './components/EcoTexto'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home' 
import Sobre from './pages/Sobre'



const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '} 
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/sobre"  element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
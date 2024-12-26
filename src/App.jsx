import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Digimons from './Pages/Digimons/Digimons'
import DigimonByName from './Pages/DigimonByName/DigimonByName'
import Curiosity from './Pages/Curiosity/Curiosity'
import About from './Pages/About/About'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/digimons' element={<Digimons />}></Route>
        <Route path='/digimons/:name' element={<DigimonByName />}></Route>
        <Route path='/curiosidades' element={<Curiosity />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App

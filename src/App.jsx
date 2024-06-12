import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Precios'
import About from './components/about/About'
import Horario from './components/horario/Horario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <About/>
    <Body/>
    <Horario/>
    </>
    
    
  )
}

export default App

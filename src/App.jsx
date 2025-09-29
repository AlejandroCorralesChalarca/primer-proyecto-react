import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [valor, setValor] = useState(5)
  const [animal, setAnimal] = useState('Hormiga')

  const suma = () => {
    setValor(valor + 1)
  }

  const cambiaAnimal = () => {
    setAnimal('Elefante')
  }


  return (
    <div id='container'>

      <h1 className='title'>Operaciones</h1>

      <h1>Numero: {valor}</h1>
      <h2>Animal: {animal}</h2>

      <button onClick={suma}>Contar +</button>
      <button onClick={cambiaAnimal}>Cambiar Animal</button>
      
    </div>
  )
}

export default App


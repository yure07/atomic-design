import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [numberOne, setNumberOne] = useState()
  const [numberTwo, setNumberTwo] = useState()
  const [result, setResult] = useState(0)

  const handleSum = () => setResult(Number(numberOne) + Number(numberTwo)) 
  const handleMinus = () => setResult(Number(numberOne) - Number(numberTwo)) 
  const handleMultiply = () => setResult(Number(numberOne) * Number(numberTwo)) 
  const handleDivide = () => setResult(Number(numberOne) / Number(numberTwo)) 

  return (
    <main className='main-container'>
      <section className='inputs-container'>
        <input 
          type='text' 
          placeholder='Digite o numero 1'
          onChange={(e) => setNumberOne(e.target.value)}
        />

        <input 
          type='text' 
          placeholder='Digite o numero 2'
          onChange={(e) => setNumberTwo(e.target.value)}
        />
      </section>

      <section className='buttons-container'>
        <button onClick={handleSum}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleMultiply}>x</button>
        <button onClick={handleDivide}>/</button>
      </section>

      <span className='result'>{result}</span>
    </main>
  );
}

export default App;
import React from 'react'
import Calculator from './components/Calculator'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <h2 style={{ textAlign: 'center' }}>Mini Calculator App</h2>
      <Calculator />
    </div>
  )
}

export default App

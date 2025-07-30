import { useState } from 'react'
import reactLogo from './assets/iconCal.svg'
import Calculator from './components/Calculator'
import './App.css'

const App=() =>{
  return(
    <div className="app-container">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1 style={{textAlign: 'center'}}>Mini Calculator App</h1>
      <Calculator/>
    </div>
  )
}

export default App

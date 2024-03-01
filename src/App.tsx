import { useState } from 'react'
import From_to from './component/From_to'
import './App.css'

const App = () => {

  return (
    <div className='div-main'>
      <div className='div-wrapper'>
      <div className='div-content-wrapper'>
        <h1>Currency Converter</h1>
        <From_to/>
        </div>
      </div>
    </div>
  )
}

export default App

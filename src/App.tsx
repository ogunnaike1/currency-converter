import { useState } from 'react'
import Enter_amount from './component/Enter_amount'
import From_to from './component/From_to'
import Exchange_button from './component/Exchange_button'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='div-main'>
      <div className='div-wrapper'>
      <div className='div-content-wrapper'>
        <h1>Currency Converter</h1>
        <Enter_amount/>
        <From_to/>
        <Exchange_button/>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Red')

    
  return (
    <div className='w-screen h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='button-container'>
      <button className='button bg-red-600' onClick={()=>setColor("Red")}>Red</button>
      <button className='button bg-green-600'onClick={()=>setColor("green")}>green</button>
      <button className='button bg-yellow-600' onClick={()=>setColor("yellow")}>yellow</button>
      <button className='button bg-blue-600'onClick={()=>setColor("Blue")}>Blue</button>
      </div>
      
    </div>
  )
}

export default App
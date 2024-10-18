import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

    
  return (
    <div className='w-screen h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='button-container'>
      <button className='button' onClick={()=>setColor("Red")}>Red</button>
      <button className='button'onClick={()=>setColor("green")}>green</button>
      <button className='button' onClick={()=>setColor("yellow")}>yellow</button>
      <button className='button'onClick={()=>setColor("white")}>white</button>
      </div>
      
    </div>
  )
}

export default App
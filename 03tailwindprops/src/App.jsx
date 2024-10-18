import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
   let userName="Ram"
  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl'>
      Hello! This is Tailwind
    </h1>
    <br/>
     <Card userName={userName}/>
     <Card userName="Ramesh"/>
     <Card userName="Chaitu"/>
    </>
  )
  //This type of inline CSS is called tilewind
}

export default App

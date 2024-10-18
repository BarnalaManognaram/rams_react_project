import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let [username, setUsername] = useState("Ram")
  // let counter=0
  function addValue(){
    counter++
    setCounter(counter)
    setUsername("Chaitu")
    console.log(counter)
  }
  let subValue=()=>{
    counter--
    setCounter(counter)
    setUsername("Ramesh")
    console.log(counter)
  }
  return (
    <>
     <h1>{username} and React</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>Add value {counter}</button><br></br><br></br>
     <button onClick={subValue}>remove value {counter}</button>
    </>
  )
}

export default App

import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed] =useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed])
  useEffect(()=>{
    generatePassword()
  }, [length, numAllowed, charAllowed])
    
  return (
  <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3'type="text" value={password} placeholder='password' readOnly={true}></input>
            <button className='bg-blue-600 text-white outline-none px-3 py-0.5 shirnk-0'onClick={()=>{window.navigator.clipboard.writeText(password)}}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex text-ceneter gap-x-1'>
          <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}></input>
          <p>Length({length})</p>
        </div>
        <div className='flex text-ceneter gap-x-1'>
          <input type='checkbox' defaultChecked={numAllowed} onChange={()=>setNumAllowed(!numAllowed)}></input>
          <label htmlFor='checkbox'>Number</label>
        </div>
        <div className='flex text-ceneter gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} onChange={()=>setCharAllowed(!charAllowed)}></input>
          <label htmlFor='checkbox'>Charaters</label>
        </div>

        </div>
      
    </div>
  </>
  )
}

export default App

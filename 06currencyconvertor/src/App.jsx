import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'


function App() {
  const [amount, setAmount] = useState(0)
  const [cAmount,setCAmount]=useState(amount*84.07)
  const currencyOptions=["INR","USD","THB","EUR","JPY"]
  const [from,setFrom]=useState("USD")
  const [to,setTo]=useState("INR")
  useEffect(() => {
    setCAmount(amount * 84.07);
  }, [amount]);
  const onSwap=()=>{
    setFrom(to)
    setTo(from)
  }
  return (
    <>
    
<div className="flex justify-center items-center min-h-screen">
  <div className="bg-blue-200 rounded-lg p-4 text-green-900">
    <h1 className='text-2xl'>Currency Converter</h1>
     <InputBox label="From" amount={amount} onAmountChange={setAmount} currencyOptions={currencyOptions} currency={from} isInputDisable={false}/>
     <button className='bg-blue-500 p-2 rounded-lg' onClick={onSwap}>Swap</button>
     <InputBox label="To" amount={cAmount} onAmountChange={setAmount} currencyOptions={currencyOptions} currency={to} isInputDisable={true}/>
  </div>
</div>

      
    </>
  )
}

export default App

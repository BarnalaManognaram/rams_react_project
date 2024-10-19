import React from 'react'

function InputBox({label,amount,onAmountChange,currencyOptions,currency,isInputDisable}) {
  
  return (
    <div className="p-3 rounded-lg">
      <div className="flex items-center space-x-2">
        <label className="mr-2">{label}</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e)=>onAmountChange(e.target.value)}
          readOnly={isInputDisable}
          className="outline-none rounded-lg py-2 w-full"
        />
        <select className="rounded-lg py-2" value={currency}>
        {currencyOptions.map((value,index) => (
            <option key={index}value={value}>
              {value.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox

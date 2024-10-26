import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoForm() {
 const [todo,setTodo] = useState("")
 const {addTodo}= useTodo()
 const add = (e) =>{
   e.preventDefault()
   if(!todo) return
   addTodo({todo, completed:false})
 }
  return (
    <div className='py-5'>
      <form className='flex' onSubmit={add}>
      <input type='text'  placeholder="Write Todo..."
    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
    value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
   <input type='submit' value='Add' className='bg-orange-400 rounded-r-lg px-3 py-1'></input>
   </form>
    </div>
  )
}

export default TodoForm

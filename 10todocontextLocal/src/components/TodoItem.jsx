import React from 'react'
import { useState,useEffect } from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoItem({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {deleteTodo,updateTodo,toggleComplete}=useTodo()
  const toggleCompleted=()=>{
    console.log(todo.id, todo.complete)
    toggleComplete(todo.id)
  }
 
  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  

  return (
    <div className='flex border border-black/10 rounded-lg px-3 py-2 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-slate-300'>
       <input type="checkbox" onChange={toggleCompleted} checked={todo.complete}></input>
       <input type='text' value={todoMsg} onChange={(e)=>{setTodoMsg(e.target.value)} }className='bg-transparent outline-none w-full' readOnly={!isTodoEditable}></input>
       <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
       <button onClick={()=>deleteTodo(todo.id)} className='inline-flex bg-gray-50 rounded-lg w-8 h-8 items-center justify-center disabled:opacity-50 hover:bg-gray-100'>
        ❌</button>
    </div>
  )
}

export default TodoItem

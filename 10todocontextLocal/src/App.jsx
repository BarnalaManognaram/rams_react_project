import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts/todoContext'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) =>{
   setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }
  const updateTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?prevTodo.todo=todo:prevTodo))

    )
  }
  const deleteTodo =(id)=>{
      setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!=id))
  }

  const toggleComplete = (id) => {
    console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo,complete: !prevTodo.complete} :prevTodo
     ))

  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className='min-h-screen bg-slate-600 py-8'>
        <div className='w-full max-w-2xl mx-auto items-center text-center justify-center text-white'>
         <h1 className='text-3xl font-bold'>Manage your Todos</h1>
         <TodoForm></TodoForm>
         <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
         
         </div>
      </div>
    </TodoProvider>
  )
}

export default App

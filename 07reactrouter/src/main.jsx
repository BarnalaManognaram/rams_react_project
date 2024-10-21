import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { ContainerWithChildren } from 'postcss/lib/container'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
// {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     },
//     {
//       path:"github",
//       element:<Github/>
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/github" element={<Github/>}></Route>
    </Route>
  )

)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
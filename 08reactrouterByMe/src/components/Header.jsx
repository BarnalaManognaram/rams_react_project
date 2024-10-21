import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
      <ul className="flex flex-row mt-4 font-medium space-x-8 lg:mt-0">
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/about">About</NavLink>
        </li>
        <li>
        <NavLink to="/contact">Contact</NavLink>
        </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

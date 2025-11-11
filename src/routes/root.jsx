import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul  className='flex gap-3 ml-3 mt-3 text-xl mb-7 '>
            <li><NavLink to="/homes">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>

          </ul>
     
      
      
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Root

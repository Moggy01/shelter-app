import React from 'react'
import {NavLink} from 'react-router-dom'

function _navBarProvideShelter() {
  return (
    <nav className="navbar">
      <ul>
        <li className='list'>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/">Home</NavLink>
        </li>
        <li className='list'>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/provideShelter/ProvideShelterForm">Become a Host</NavLink>
        </li>
        <li className='list'>
          <NavLink className={({ isActive }) => (isActive ? 'activelink' : '')} to="/requestShelter/RequestShelterResponse">Find a Host</NavLink>
        </li>
      </ul>  
    </nav>
  )
}

export default _navBarProvideShelter
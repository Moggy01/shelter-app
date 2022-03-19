import React from 'react'
import {NavLink} from 'react-router-dom'

function _navBarRequestShelter() {
  return (
    <div>_navBarRequestShelter
      <ul>
    <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to='/'>Home</NavLink>
        </li>
        </ul>
    </div>
  )
}

export default _navBarRequestShelter
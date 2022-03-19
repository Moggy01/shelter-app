import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="Content">
<h1> Home page</h1>
<br/>
<br/>

<nav className="homePageNav">
        <ul>
          <li>
            <NavLink to='/provideShelter/ProvideShelterForm'>Become a Host</NavLink>
          </li>
          <li>
          <NavLink to='/requestShelter/RequestShelterResponse'>Find a Host</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

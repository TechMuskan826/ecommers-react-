import React from 'react'
import './Navbar.css';


function Navbar() {
  return (
    <div>
      <div className="nav">
      <div className="container">
        <div className="logo">
          <img src="image/logo-black_130x.png" alt='' />

        </div>
        <div className="list">
          <ul>
            <li>
              Home
            </li>
           <li>
           About
           </li>
            <li>
              Contect
            </li>
            <li>
              Project
            </li>
            <li>
              Services
            </li>
          </ul>
        </div>
        <div className="icon">
          <button className='btn1'>login</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar

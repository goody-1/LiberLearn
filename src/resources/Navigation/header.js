import React from 'react';
import './header.css';
import logo from '../Image/Logo & Mark Dark.png'
import Button from "../Navigation/button";


function Header () {
  return (
    <header>
      <div className="headerContent">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Landing Page</h1>
        </div>
        <nav>
          <ul>
            <li className='home1'>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button url="login" buttonText="Login" />
      </div>
    </header>
  );
}

export default Header;

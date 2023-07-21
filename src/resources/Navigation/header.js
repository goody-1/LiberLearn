import React from 'react';
import './header.css';
import logo from '../Image/Logo & Mark Dark.png'

function Header () {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Landing Page</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </nav>
      <a href='login'>Login</a>
      {/* Add additional components (e.g., buttons, user info) here */}
    </header>
  );
}

export default Header;

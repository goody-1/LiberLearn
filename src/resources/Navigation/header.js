import React from 'react';
import './header.css';
import logo from '../Image/Logo & Mark Dark.png'
import Button from "../Navigation/button";


function Header (props) {
  return (
    <header>
      <div className="headerContent">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Landing Page</h1>
        </div>
        <nav>
          <ul>
            <li className={props.homeActive}>Home</li>
            <li className={props.aboutActive}>About us</li>
            <li className={props.coursesActive}>Courses</li>
            <li className={props.contactActive}>Contact</li>
          </ul>
        </nav>
        <Button url="login" buttonText="Login" />
      </div>
    </header>
  );
}

export default Header;

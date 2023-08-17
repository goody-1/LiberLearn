import React from 'react';
import './header.css';
import logo from '../Image/Logo & Mark Dark.png'
import Button from "../Navigation/button";
import * as routes from "../../utils/appRoutes";


function Header(props) {
  return (
    <header>
      <div className="headerContent">
        <a href='/' className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li className={props.homeActive}>
              <a href={routes.HOME}>Home</a>
            </li>
            <li className={props.aboutActive}>
              <a href={routes.ABOUT}>About us</a>
            </li>
            <li className={props.coursesActive}>
              <a href={routes.COURSES}>Courses</a>
            </li>
            <li className={props.contactActive}>
              <a href={routes.CONTACT}>Contact</a>
            </li>
          </ul>
        </nav>
        <Button url="login" buttonText="Login" newPage={true} />
      </div>
    </header>
  );
}

export default Header;

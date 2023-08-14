import React from 'react';

import '../../shared/base.css'
import '../../pages/General/General.css'
import './Header.css'
import logo from '../../resources/logos/dark_logo.png'
import Button from './Button';


function Header(props) {
	return (
		<header className='header'>
			<img src={logo} alt='logo' />
			<nav>
				<ul>
					<li className={props.homeActive}>
						<a href="/">Home</a>
					</li>
					<li className={props.aboutActive}>
						<a href="/about-us">About us</a>
					</li>
					<li className={props.coursesActive}>
						<a href="/courses">Courses</a>
					</li>
					<li className={props.contactActive}>
						<a href="/#contact-us">Contact us</a>
					</li>
					<Button url="/login" buttonText="Log in" />
				</ul>
			</nav>
		</header>
	)
}
export default Header;

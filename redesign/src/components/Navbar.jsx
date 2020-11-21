import React, { useState } from 'react';
import '../css/navbar.css';

const Navbar = () => {
	const [isToggled, setIsToggled] = useState(false);
	return (
		<div className='nav'>
			<div className='nav__logo'>
				<h1>
					<a href='#home'>Color</a>
				</h1>
			</div>
			<div className={`nav__right ${isToggled && 'toggle'}`}>
				<a href='#home'>Home</a>

				<a href='#about'>About</a>

				<a href='#services'>Services</a>
			</div>
			<div
				className={`burger ${isToggled && 'open'}`}
				onClick={() => {
					setIsToggled(!isToggled);
				}}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Navbar;

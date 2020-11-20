import React from 'react';
import '../css/navbar.css';
const Navbar = () => {
	return (
		<div className='nav'>
			<div className='nav__logo'>
				<h1>
					<a href='#home'>Color</a>
				</h1>
			</div>
			<div className='nav__right'>
				<a href='#home'>Home</a>

				<a href='#about'>About</a>

				<a href='#services'>Services</a>
			</div>
		</div>
	);
};

export default Navbar;

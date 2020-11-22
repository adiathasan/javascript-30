import React, { useState } from 'react';
import '../css/navbar.css';

const Navbar = () => {
	const [isToggled, setIsToggled] = useState(false);
	return (
		<div className='nav'>
			<div className='nav__logo'>
				<h1>
					<a
						onClick={() => {
							setIsToggled(false);
						}}
						href='#home'>
						Color
					</a>
				</h1>
			</div>
			<div className={`nav__right ${isToggled && 'toggle'}`}>
				<a
					onClick={() => {
						setIsToggled(false);
					}}
					href='#home'>
					Home
				</a>

				<a
					onClick={() => {
						setIsToggled(false);
					}}
					href='#about'>
					About
				</a>

				<a
					onClick={() => {
						setIsToggled(false);
					}}
					href='#services'>
					Services
				</a>
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

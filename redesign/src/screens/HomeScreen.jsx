import React from 'react';
import Svg from '../components/Svg';
import '../css/home.css';

const HomeScreen = () => {
	return (
		<div>
			<h4>Home My Mood</h4>
			<div className='home__svg'>
				<Svg />
			</div>
		</div>
	);
};

export default HomeScreen;

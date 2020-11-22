import React from 'react';
import '../css/home.css';

const HomeScreen = () => {
	return (
		<div className='home'>
			{/* <div className='home__parallex'>
				<img src='./images/color.jpg' alt='color' />
				<img src='./images/web.jpg' alt='web' />
			</div> */}
			<div className='home__grid'>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
					laborum ea incidunt quisquam nobis facere quod deleniti nostrum optio
					est quas ullam architecto, facilis quasi ipsa debitis? Explicabo, cum
					maiores.
				</div>
			</div>
			<div className='home__inter'>
				<div className='left'>
					<img
						src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/yellow.jpg'
						alt='yellow'
						className='yellow anim'
						data-delay='0s'
					/>
					<p className='anim' data-delay='.5s'>
						I have no clue what I'm doing here LOL!
					</p>
					<img
						src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/squiggly.svg'
						alt='squig'
						className='squig anim'
						data-delay='.7s'
					/>
				</div>
				<div className='right'>
					<div className='anim' data-delay='1s'>
						<h2>Get Yellow</h2>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;

// parallex

// const parallexRef1 = useRef();
// const parallexRef2 = useRef();

// useEffect(() => {
// 	window.addEventListener('scroll', () => {
// 		if (parallexRef1.current) {
// 			parallexRef1.current.style.transform = `translateY(${
// 				window.scrollY * 1
// 			}px)`;
// 			parallexRef2.current.style.transform = `translateY(${
// 				window.scrollY * 0.5
// 			}px)`;
// 		}
// 	});
// }, []);

//

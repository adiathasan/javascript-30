import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Perspective from './screens/Perspective';

function App() {
	return (
		<div className='app'>
			{/* <Navbar /> */}
			<div className='app__container'>
				{/* <HomeScreen /> */}
				<Perspective />
			</div>
		</div>
	);
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<div className='app__container'>
				<HomeScreen />
			</div>
		</div>
	);
}

export default App;

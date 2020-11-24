import './App.css';
import NavMui from './components/NavMui';
// import Navbar from './components/Navbar';
// import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className='app'>
			{/* <Navbar /> */}
			<NavMui />
			<div className='app__container'>{/* <HomeScreen /> */}</div>
		</div>
	);
}

export default App;

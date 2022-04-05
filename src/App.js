// Components
import HeaderCompnent from './Components/Header/HeaderComponent';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';

// CSS
import './App.css';

// External Stuff
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	// Console Stuff
	setTimeout(() => {
		console.log('Created and maintained by David Gales');
	}, 2000);

	setTimeout(() => {
		console.log(
			'For more information, visit https://github.com/shermscissors/'
		);
	}, 5500);
	
		setTimeout(() => {
			console.log(
				'And feel free to donate him a coffee for all his hard work :D'
			);
		}, 6500);

	return (
		<div className='App'>
			<header>
				<HeaderCompnent />
			</header>
			<nav>
				<Navigation />
			</nav>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
			</Routes>
			<footer>
				<h1 className='headings' id='footer-heading'>
					Footer Heading Goes Here!
				</h1>
				<p id='aboutme-paragraph'>Footer Content Goes Here!</p>
				<span id='footer-links'>
					<a
						href='https://stuntmccartney.com'
						target={'_blank'}
						rel='noreferrer'>
						<h6 id='footer-anchor'>Made by Stunt McCartney</h6>
					</a>
				</span>
			</footer>
		</div>
	);
}

export default App;

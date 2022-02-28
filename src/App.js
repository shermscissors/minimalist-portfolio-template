// Components
import HeaderCompnent from './Components/Header/HeaderComponent';

// CSS
import './App.css';

function App() {
		setTimeout(() => {
			console.log(
				"Loading..."
			);
		}, 5000);
	return (
		<div className='App'>
			<header>
				<HeaderCompnent />
			</header>
			<div className='body-container'>
				<h1 className='headings'>Body Heading Goes Here!</h1>
				<p >Body Contents Go Here!</p>
				{/* 
				
				Components go here!

				*/}
			</div>
			<footer>
				<h1 className='headings' id='footer-heading'>
					Footer Heading Goes Here!
				</h1>
				<p id='aboutme-paragraph'>
					Footer Content Goes Here!
				</p>
				<span id='footer-links'>
					<a href='https://stuntmccartney.com' target={'_blank'} rel='noreferrer'>
						<h6 id='footer-anchor'>Made by Stunt McCartney</h6>
					</a>
				</span>
			</footer>
		</div>
	);
}

export default App;

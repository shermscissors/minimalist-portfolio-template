// CSS
import './Home.css';

// External Stuff
import React from 'react';

function Home(props) {
	return (
		<div className='body-container'>
			<h1 className='headings'>Body Heading Goes Here!</h1>
			<p>
				Welcome to the minimalist portfolio template: an easy start to your next
				website. <br />
				<br />
				This template comes with a simple UI built with React to allow seamless
				navigation between pages. It is also mobile friendly to allow for easy
				use on any device. <br />
				<br />
				This template also includes some lightweight animations to add a bit of
				visual flair to the user experience.<br />
				<br />
				For more information on formatting, view documentation within code! Feel free to contact me on Github for help. Thank you!
			</p>
		</div>
	);
}

export default Home;

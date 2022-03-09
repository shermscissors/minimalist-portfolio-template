// CSS
import './HeaderComponent.css';

// External Stuff
import React from 'react';

function HeaderCompnent(props) {
	return (
		<div className='masthead'>
			<h1 className='headings' id='masthead-h1'>
				Minimalist Portfolio Template
			</h1>
			<a
				href='https://en.wikipedia.org/wiki/Mellon_Collie_and_the_Infinite_Sadness'
				target={'_blank'}
				rel='noreferrer'>
				<button id='masthead-button'>Take Me Somewhere Better</button>
			</a>
		</div>
	);
}

export default HeaderCompnent;

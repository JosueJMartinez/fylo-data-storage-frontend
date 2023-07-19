// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import HeadContainer from './Components/HeadContainer';
import SizeContainer from './Components/SizeContainer';

// import './styles/custom-bootstrap.scss';

function App() {
	return (
		<div className='App'>
			<div className='desktop-background' />
			<div className='container container-md d-flex flex-column align-items-center justify-content-center vh-100'>
				<HeadContainer />
				<SizeContainer />
			</div>
		</div>
	);
}

export default App;

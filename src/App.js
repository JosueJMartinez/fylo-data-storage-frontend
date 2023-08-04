// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import HeadContainer from './Components/HeadContainer';
import SizeContainer from './Components/SizeContainer';

// import './styles/custom-bootstrap.scss';

function App() {
	const value = '555';
	return (
		<div className='App'>
			<div className='desktop-background' />
			<div className='container container-md d-flex flex-column align-items-center justify-content-center vh-100 full-app'>
				<div className='d-flex flex-column align-items-center align-items-md-end justify-content-center flex-md-row full-app-inner'>
					<HeadContainer />
					<SizeContainer value={value} />
				</div>
			</div>
		</div>
	);
}

export default App;

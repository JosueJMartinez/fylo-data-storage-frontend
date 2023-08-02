import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function SizeContainer({ value }) {
	const fillerStyles = {
		width: `${value / 10}%`,
	};
	const [widthOfGB, setWidthOfGB] = useState(0);
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [divStyle, setDivStyle] = useState({});
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const ref = useRef(null);
	// let divStyle = `left:-${widthOfGB/windowSize*100/2}`;

	useEffect(() => {
		const handleWindowResize = () => {
			console.log('in here le' + window.innerWidth);
			if (window.innerWidth < 767) {
				setWindowSize([window.innerWidth]);
				// setDivStyle(`-${((widthOfGB / windowSize) * 100) / 2}%`);
				setDivStyle({ left: `-${widthOfGB / 2}px` });
			} else {
				console.log('not in here le' + window.innerWidth);
				setDivStyle({});
			}
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [widthOfGB, windowSize]);

	useEffect(() => {
		const handleInitialLoad = () => {
			if (isInitialLoad) {
				setIsInitialLoad(false);
				if (window.innerWidth < 767) {
					console.log('inital' + window.innerWidth);
					setWindowSize([window.innerWidth]);
					// setDivStyle(`-${((widthOfGB / windowSize) * 100) / 2}%`);
					setDivStyle({ left: `-${widthOfGB / 2}px` });
				} else {
					console.log('not initial' + window.innerWidth);
					setDivStyle({});
				}
			}
		};

		handleInitialLoad();

		return () => {};
	}, [isInitialLoad, widthOfGB, windowSize]);

	useLayoutEffect(() => {
		setWidthOfGB(ref.current.offsetWidth);
	}, []);

	return (
		<div className='size-container w-100 mx-2 text-light'>
			<div className='mx-auto size-container-inner'>
				<p>
					You've used <span className='fw-bold'>{value} GB</span> of your storage
				</p>
				<ProgressBar>
					{/* Add custom elements inside the progress bar */}
					<div className='custom-filler' style={fillerStyles}>
						<div className='ball-marker'></div>
					</div>
				</ProgressBar>
				<div className='d-flex justify-content-between'>
					<div className='size-marker'>
						0 <span className='size-marker-unit'>GB</span>
					</div>
					<div className='size-marker'>
						1000 <span className='size-marker-unit'>GB</span>
					</div>
				</div>
			</div>
			{console.log(divStyle)}
			<div className='gb-left'>
				<div className='gb-left-inner' ref={ref} style={divStyle}>
					<div className='gb-left-value'>
						<span className='gb-left-number'>{1000 - value}</span>{' '}
						<span className='gb-left-units'>GB LEFT</span>
					</div>
				</div>
			</div>

			{/* {console.log(getWidthGBLeft())} */}
		</div>
	);
}

export default SizeContainer;

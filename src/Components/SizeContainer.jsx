import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function SizeContainer({ value }) {
	const fillerStyles = {
		width: `${value / 10}%`,
	};
	const [widthOfGB, setWidthOfGB] = useState(0);
	const [heightOfGB, setHeightOfGB] = useState(0);
	// const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [widthGBContainer, setWidthGBContainer] = useState(0);
	const [heightGBContainer, setHeightGBContainer] = useState(0);
	const [divStyle, setDivStyle] = useState({});
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const gbLeftRef = useRef(null);
	const gbContainerRef = useRef(null);
	

	// resize useEffect
	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth < 767) {
				setDivStyle({ left: `-${widthOfGB / 2}px` });
			} else {
				setWidthGBContainer(gbContainerRef.current.offsetWidth);
				setDivStyle({
					left: `${widthGBContainer / 2 - 25 - widthOfGB}px`,
					top: `-${heightGBContainer + heightOfGB / 5}px`,
				});
			}
		};
		const handleInitialLoad = () => {
			if (isInitialLoad) {
				setIsInitialLoad(false);
				if (window.innerWidth < 767) {
					setDivStyle({ left: `-${widthOfGB / 2}px` });
				} else {
					setDivStyle({
						left: `${widthGBContainer / 2 - 25 - widthOfGB}px`,
						top: `-${heightGBContainer + heightOfGB / 5}px`,
					});
				}
			}
		};
		handleInitialLoad();
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [widthOfGB, widthGBContainer, isInitialLoad, heightOfGB, heightGBContainer]);

	useLayoutEffect(() => {
		setWidthOfGB(gbLeftRef.current.offsetWidth);
		setHeightOfGB(gbLeftRef.current.offsetHeight);
		setWidthGBContainer(gbContainerRef.current.offsetWidth);
		setHeightGBContainer(gbContainerRef.current.offsetHeight);
	}, []);

	const reformatSize = props => {
		const arr = props.valueToFormat.split('');

		let revArr = [...arr].reverse();

		revArr = revArr.map((elem, idx) => <span className={`gb-${idx}`}>{elem}</span>);

		return <span className={props.spanClass}>{revArr.reverse().map(elem => elem)}</span>;
	};

	return (
		<div className='size-container w-100 mx-2 text-light'>
			<div className='mx-auto size-container-inner' ref={gbContainerRef}>
				<p>
					You've used{' '}
					<span className='fw-bold'>
						{reformatSize({ valueToFormat: value, spanClass: 'amount-used' })} GB
					</span>{' '}
					of your storage
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
			<div className='gb-left'>
				<div className='gb-left-inner' ref={gbLeftRef} style={divStyle}>
					<div className='gb-left-value px-4'>
						<span className='gb-left-number'>
							{reformatSize({ valueToFormat: 1000 - value + '', spanClass: 'amount-left' })}
						</span>{' '}
						<span className='gb-left-units'>GB LEFT</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SizeContainer;

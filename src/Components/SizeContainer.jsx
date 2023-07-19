// import LogoIcon from '../images/logo.svg';
import FolderIcon from '../images/icon-folder.svg';
import DocumentIcon from '../images/icon-document.svg';
import UploadIcon from '../images/icon-upload.svg';

/* function ListIcon({ item }) {
	const { logo, alt } = item;

	const getIconHtml = () => {
		if (logo === FolderIcon)
			return <img src={logo} alt={alt} className='svg-icon folder-icon'></img>;
		else if (logo === DocumentIcon)
			return <img src={logo} alt={alt} className='svg-icon document-icon'></img>;
		else return <img src={logo} alt={alt} className='svg-icon upload-icon'></img>;
	};

	return <div className='icons'>{getIconHtml()}</div>;
} */

function SizeContainer() {
	const listIcons = [
		{ logo: DocumentIcon, alt: 'Document' },
		{ logo: FolderIcon, alt: 'Folder' },
		{ logo: UploadIcon, alt: 'Upload' },
	];
	return (
		<div className='size-container w-100 mx-2 text-light'>
			<div className='w-75 h-100 mx-auto my-4'>
				<p>
					You've used <span className='fw-bold'>815 GB</span> of your storage
				</p>
				<div class='progress'>
					<div
						class='progress-bar'
						role='progressbar'
						style='width: 25%;'
						aria-valuenow='25'
						aria-valuemin='0'
						aria-valuemax='100'
					>
						25%
					</div>
				</div>
				{/* <div className='d-flex flex-row align-items-start'> */}
				{/* {listIcons.map((item, index) => (
					<ListIcon key={index} item={item} />
				))} */}
				{/* </div> */}
			</div>
		</div>
	);
}

export default SizeContainer;

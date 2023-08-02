import LogoIcon from '../images/logo.svg';
import FolderIcon from '../images/icon-folder.svg';
import DocumentIcon from '../images/icon-document.svg';
import UploadIcon from '../images/icon-upload.svg';

function ListIcon({ item }) {
	const { logo, alt } = item;

	const getIconHtml = () => {
		if (logo === FolderIcon)
			return <img src={logo} alt={alt} className='svg-icon folder-icon'></img>;
		else if (logo === DocumentIcon)
			return <img src={logo} alt={alt} className='svg-icon document-icon'></img>;
		else return <img src={logo} alt={alt} className='svg-icon upload-icon'></img>;
	};

	return <div className='icons'>{getIconHtml()}</div>;
}

function HeadContainer() {
	const listIcons = [
		{ logo: DocumentIcon, alt: 'Document' },
		{ logo: FolderIcon, alt: 'Folder' },
		{ logo: UploadIcon, alt: 'Upload' },
	];
	return (
		<div className='header-container w-100 mx-2 text-light mb-3 mb-md-0'>
			<div className='w-75 h-100 mx-auto my-5'>
				<h1>
					<img src={LogoIcon} alt='Logo' className='svg-icon'></img>
				</h1>
				{/* <div className='d-flex flex-row align-items-start'> */}
				{listIcons.map((item, index) => (
					<ListIcon key={index} item={item} />
				))}
				{/* </div> */}
			</div>
		</div>
	);
}

export default HeadContainer;

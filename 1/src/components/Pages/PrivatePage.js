import React from 'react';

import './Page.scss';

function PrivatePage(props) {
	const {children, header, footer} = props;

	return (
		<div className='page'>
			{/* NAVIGATION */}
			{children}
			{/* FOOTER */}
		</div>
	);
}

export default PrivatePage;

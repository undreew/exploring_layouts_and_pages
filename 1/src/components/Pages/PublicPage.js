import React from 'react';
import PublicNavigation from '../Navigation/PublicNavigation';

import './Page.scss';

function PublicPage(props) {
	const {children, header, footer} = props;

	return (
		<div className='page'>
			{/* NAVIGATION */}
			<PublicNavigation />
			{children}
			{/* FOOTER */}
		</div>
	);
}

export default PublicPage;

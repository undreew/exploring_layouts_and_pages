import {Button} from '@mui/material';
import React from 'react';

import './PrivateNavigation.scss';

function PrivateNavigation() {
	return (
		<nav className='private-navigation'>
			<div className='private-navigation__content'>
				<Button>Logount</Button>
			</div>
		</nav>
	);
}

export default PrivateNavigation;

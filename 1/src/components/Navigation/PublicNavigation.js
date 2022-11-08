import {Button, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

import './PublicNavigation.scss';

function PublicNavigation() {
	return (
		<nav className='public-navigation'>
			<div className='public-navigation__content'>
				<div className='public-navigation__content-brand'>
					<Link to='/'>
						<Typography variant='h5'>INTSPC</Typography>
					</Link>
				</div>

				<div className='public-navigation__content-items'>
					<Button variant='contained' color='success'>
						Signup
					</Button>
					<Button variant='outlined' color='secondary'>
						Login
					</Button>
				</div>
			</div>
		</nav>
	);
}

export default PublicNavigation;

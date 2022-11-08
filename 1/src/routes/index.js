import {PAGE_ACCESS} from '../config/constants';
import errors from './errors';
import landing from './landing';
import login from './login';
import signup from './signup';

export const routes = [
	{
		access: PAGE_ACCESS.public,
		...landing,
	},
	{access: PAGE_ACCESS.public, ...login},
	{access: PAGE_ACCESS.public, ...signup},
	{
		...errors,
	},
];

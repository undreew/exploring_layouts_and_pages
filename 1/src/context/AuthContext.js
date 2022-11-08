import React, {createContext, useState} from 'react';
import {useAlertContext} from './AlertContext';

// API CALLS
import {authSignup, authLogin} from '../api/auth';

const AuthContext = createContext();

function AuthContextProvider(props) {
	const {children} = props;
	const {handleOk, handleError} = useAlertContext();

	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const [isAuth, setIsAuth] = useState(false);

	async function signup(formData) {}

	async function login(formData) {
		try {
			setIsAuthenticating(true);

			const data = await authLogin(formData);
			const {token} = data;

			// STORE TOKEN TO COOKIE

			handleOk();
		} catch (error) {
			handleError(error.message);
		}
		setIsAuthenticating(false);
	}

	const authContext = {
		isAuthenticating,
		isAuth,
		signup,
		login,
	};

	return (
		<AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
	);
}

export default AuthContextProvider;

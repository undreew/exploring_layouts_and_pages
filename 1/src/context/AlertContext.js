import React, {createContext, useContext} from 'react';
import swal from '../utils/swal';

const AlertContext = createContext();

function AlertContextProvider(props) {
	const {children} = props;

	function handleOk(message) {
		swal.fire({
			icon: 'success',
			title: 'Success!',
			text: message ? message : null,
		});
	}

	function handleError(errorMessage) {
		swal.fire({
			icon: 'error',
			title: 'Something went wrong!',
			text: errorMessage ? errorMessage : null,
		});
	}

	const alertContext = {
		handleOk,
		handleError,
	};

	return (
		<AlertContext.Provider value={alertContext}>
			{children}
		</AlertContext.Provider>
	);
}

const useAlertContext = () => useContext(AlertContext);

export {AlertContext, AlertContextProvider, useAlertContext};

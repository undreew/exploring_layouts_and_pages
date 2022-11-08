import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderRoutes from './utils/renderRoutes';
import {routes} from './routes';

function App() {
	return <Router>{renderRoutes(routes)}</Router>;
}

export default App;

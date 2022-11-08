import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {PAGE_ACCESS} from '../config/constants';
import PublicRoute from '../components/Route/PublicRoute';
import PrivateRoute from '../components/Route/PrivateRoute';

function renderRoutes(routes) {
	return (
		<Routes>
			{routes.map((item, index) => {
				const {access, path, element, routes} = item;
				if (access === PAGE_ACCESS.public) {
					return (
						<Route
							key={index}
							path={path}
							routes={routes}
							element={<PublicRoute>{element}</PublicRoute>}
						/>
					);
				}

				if (access === PAGE_ACCESS.private) {
					return (
						<Route
							key={index}
							path={path}
							routes={routes}
							element={<PrivateRoute>{element}</PrivateRoute>}
						/>
					);
				}

				return <Route key={index} path={path} element={element} />;
			})}
		</Routes>
	);
}

export default renderRoutes;

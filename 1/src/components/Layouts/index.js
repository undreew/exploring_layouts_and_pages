import React, {useEffect} from 'react';
import {useLayout} from '../../context/LayoutContext';

export function Layouts(props) {
	const {header, footer, children} = props;

	const {setLayout} = useLayout();

	useEffect(() => {
		setLayout({
			header,
			footer,
		});
	}, []);

	return children;
}

export const BaseLayout = (props) => {
	return <Layouts {...props} />;
};

export const PrivateLayout = (props) => {
	const {header = true, footer = true} = props;

	return <Layouts header={header} footer={footer} />;
};

export const PublicLayout = (props) => {
	const {header = false, footer = true} = props;

	return <Layouts header={header} footer={footer} />;
};

export default BaseLayout;

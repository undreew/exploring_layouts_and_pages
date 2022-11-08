import React, {createContext, useContext, useState} from 'react';

const LayoutContext = createContext();

const initialLayout = {
	header: false,
	footer: false,
};

function LayoutContextProvider(props) {
	const {children} = props;

	const [layout, setLayout] = useState(initialLayout);

	function updateLayout(layout) {
		setLayout((prevValue) => {
			return {
				...prevValue,
				...layout,
			};
		});
	}

	const {header, footer} = layout;

	const layoutContext = {
		header,
		footer,
		setLayout: (layout) => updateLayout(layout),
	};

	return (
		<LayoutContext.Provider value={layoutContext}>
			{children}
		</LayoutContext.Provider>
	);
}

const useLayout = () => useContext(LayoutContext);

export {LayoutContext, LayoutContextProvider, useLayout};

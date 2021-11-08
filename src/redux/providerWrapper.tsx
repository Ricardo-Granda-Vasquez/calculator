import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

const ProviderWrapper = ({ children, store }: { children: ReactElement, store: any }) => (
	<Provider store={store}>
		{children}
	</Provider>
);

export default ProviderWrapper;
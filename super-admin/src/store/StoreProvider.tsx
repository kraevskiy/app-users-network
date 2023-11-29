import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './';

const StoreProvider: FC<{
	children: ReactNode;
}> = ({children}) => {

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

import { FC, ReactNode } from 'react';
import { useAppSelector } from '../store';
import { Navigate } from 'react-router-dom';
import { paths } from './paths.ts';

const ProtectedRoute:FC<{
	children: ReactNode;
}> = ({children}) => {
	const {isLoggedIn} = useAppSelector(state => state.app);

	if (!isLoggedIn) {
		return <Navigate to={'/' + paths.auth} replace/>
	}

	return children;
};

export default ProtectedRoute;

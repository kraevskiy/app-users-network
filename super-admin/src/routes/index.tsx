import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import { LoginPage, RegisterPage, MainPage } from '../pages';
import ProtectedRoute from './ProtectedRoute';
import { paths } from './paths';

const AppRoutes = () => {
	return <BrowserRouter>
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
				<Route path={paths.auth}>
					<Route index element={<LoginPage />} />
					<Route path={paths.register} element={<RegisterPage />} />
				</Route>
			</Route>
		</Routes>
	</BrowserRouter>;
};

export default AppRoutes;

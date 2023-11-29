import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store';
import Navbar from '../Navbar/Navbar';
import Drawer from '../Drawer/Drawer';
import LoginLayout from './LoginLayout';

const Layout = () => {
	const {isLoggedIn} = useAppSelector(state => state.app);

	return (
		<>
			{isLoggedIn ? (
				<>
					<div className="w-full flex relative">
						<Drawer />
						<div className="w-full">
							<Navbar />
							<div className="w-full px-2 py-1">
								<Outlet />
							</div>
						</div>
					</div>
				</>) : (
					<LoginLayout>
						<Outlet />
					</LoginLayout>
			)}
		</>
	);
};

export default Layout;

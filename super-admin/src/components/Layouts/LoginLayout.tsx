import { FC, ReactNode } from 'react';

const LoginLayout: FC<{
	children: ReactNode
}> = ({ children }) => {

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="flex items-center justify-center w-full h-full">
				<div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
					{children}
				</div>
			</div>
		</div>
	);
};

export default LoginLayout;

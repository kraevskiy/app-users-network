import { Input } from '../../components';

const LoginPage = () => {

	return (
		<div className="card-body">
			<div className="card-title">
				Log in
			</div>
			<form>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<Input placeholder="email"/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<Input placeholder="password"/>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary">Login</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;

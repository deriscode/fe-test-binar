import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import PrivateRoutes from './private-routes/PrivateRoutes';
import useAuth from './utils/auth';
import Axios from 'axios';

function App() {
	const authData = useAuth();

	const navigate = useNavigate();

	Axios.interceptors.request.use(
		function (config) {
			if (authData) {
				config.headers.Authorization = `Bearer ${authData.token}`;
			}
			return config;
		},
		function (err) {
			return Promise.reject(err);
		}
	);

	Axios.interceptors.response.use(
		function (res) {
			return res;
		},
		function (err) {
			if (err.response) {
				if (err.response.status === 401) {
					navigate('/');
					localStorage.removeItem('auth');
				}
			}
		}
	);

	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route element={<PrivateRoutes />}>
						<Route path="dashboard">
							<Route index element={<Dashboard />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;

import { Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

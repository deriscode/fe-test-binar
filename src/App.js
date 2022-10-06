import { Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Login />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

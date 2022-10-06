import React from 'react';
import FormLogin from '../../components/form-login/FormLogin';
import { Link } from 'react-router-dom';

import './Login.scss';

function Login() {
	return (
		<div className="login-container">
			<h1>Login</h1>
			<FormLogin />
			<p>
				Don't have an account? <Link to={'/register'}>Register</Link>
			</p>
		</div>
	);
}

export default Login;

import React from 'react';
import FormRegister from '../../components/form-register/FormRegister';
import { Link } from 'react-router-dom';

import './Register.scss';

function Register() {
	return (
		<div className="register-container">
			<h1>Register</h1>
			<FormRegister />
			<p>
				Have an account? <Link to={'/'}>Login</Link>
			</p>
		</div>
	);
}

export default Register;

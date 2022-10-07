import React from 'react';
import { API_URL } from '../../config/url';
import { Form, Formik } from 'formik';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './FormLogin.scss';

function FormInput() {
	const navigate = useNavigate();

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			onSubmit={(values) => {
				Axios.post(`${API_URL}/auth/login`, values)
					.then((res) => {
						localStorage.setItem('auth', JSON.stringify(res.data.result));
						navigate('/dashboard');
					})
					.catch((err) => console.log(err));
			}}
		>
			{({ handleSubmit, handleChange }) => (
				<Form className="form-container">
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
							name="email"
							required
							onChange={handleChange}
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
							name="password"
							required
							onChange={handleChange}
						/>
						<label htmlFor="floatingPassword">Password</label>
					</div>
					<button className="btn btn-outline-primary" type="submit" onClick={handleSubmit}>
						Login
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormInput;

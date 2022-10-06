import React from 'react';
import { API_URL } from '../../config/url';
import { Form, Formik } from 'formik';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './FormRegister.scss';

function FormRegister() {
	const navigate = useNavigate();

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
			}}
			onSubmit={(values) => {
				Axios.post(`${API_URL}/auth/signup`, values)
					.then((res) => {
						console.log(res);
						navigate('/dashboard');
					})
					.catch((err) => console.log(err));
			}}
		>
			{({ handleSubmit, handleChange }) => (
				<Form className="form-container">
					<div className="form-floating mb-3">
						<input
							type="name"
							className="form-control"
							id="floatingName"
							placeholder="Name"
							name="name"
							required
							onChange={handleChange}
						/>
						<label htmlFor="floatingName">Name</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="floatingEmail"
							placeholder="name@example.com"
							name="email"
							required
							onChange={handleChange}
						/>
						<label htmlFor="floatingEmail">Email address</label>
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
						Register
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormRegister;

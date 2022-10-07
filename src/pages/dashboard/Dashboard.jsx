import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config/url';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { Col, Row, Card, Container, Modal } from 'react-bootstrap';

import Navbar from '../../components/navbar/Navbar';

import './Dashboard.scss';

function Dashboard() {
	const navigate = useNavigate();

	const [showCreateModal, setShowCreateModal] = useState(false);
	const handleCloseCreateModal = () => setShowCreateModal(false);
	const handleShowCreateModal = () => setShowCreateModal(true);

	const product = {
		name: '',
		price: '',
		imageurl: '',
	};

	const [productList, setProductList] = useState([]);

	const getProductList = () => {
		Axios.get(`${API_URL}/v1/products`)
			.then((res) => {
				setProductList(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getProductList();
	}, []);

	return (
		<div>
			<Navbar show={handleShowCreateModal} />
			<Container className="d-flex vh-100">
				<Row xs={1} md={2} lg={3} className="g-2 align-items-center">
					{Array.from({ productList }).map((_, idx) => (
						<Col key={idx} className="product-card">
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="https://via.placeholder.com/140x100" />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a longer card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<Modal show={showCreateModal} onHide={handleCloseCreateModal} centered>
				<Modal.Header closeButton>
					<Modal.Title>Create New</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formik
						initialValues={product}
						onSubmit={(values) => {
							Axios.post(`${API_URL}/v1/products`, values)
								.then((res) => {
									console.log(res);
									navigate('/dashboard');
								})
								.catch((err) => console.log(err));
						}}
					>
						{({ handleSubmit, setFieldValue }) => (
							<Form>
								<div className="form-floating mb-3">
									<input
										type="name"
										className="form-control"
										id="floatingName"
										placeholder="Name"
										name="name"
										required
										onChange={(e) => {
											setFieldValue('name', e.target.value);
										}}
									/>
									<label htmlFor="floatingName">Product Name</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="number"
										className="form-control"
										id="floatingPrice"
										placeholder="100"
										name="price"
										required
										onChange={(e) => {
											setFieldValue('price', e.target.value);
										}}
									/>
									<label htmlFor="floatingEmail">Price (Dollar USD)</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingImageUrl"
										placeholder="ImageUrl"
										name="imageurl"
										required
										onChange={(e) => {
											setFieldValue('imageurl', e.target.value);
										}}
									/>
									<label htmlFor="floatingPassword">Image url</label>
								</div>
								<div className="btn-group">
									<button type="button" className="btn-back" onClick={handleCloseCreateModal}>
										Back
									</button>
									<button
										className="btn btn-outline-primary btn-create"
										type="submit"
										onClick={handleSubmit}
									>
										Create
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Dashboard;

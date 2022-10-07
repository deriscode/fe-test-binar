import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import './Navbar.scss';

function Navbar({ show }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/');
		localStorage.removeItem('auth');
	};

	return (
		<div className="navbar-container">
			<div className="navbar-left-content">
				<div className="nav-title">Product List</div>
				<Button className="btn-create" onClick={show}>
					Create new
				</Button>
			</div>
			<div className="navbar-right-content">
				<span onClick={handleLogout}>Logout</span>
			</div>
		</div>
	);
}

export default Navbar;

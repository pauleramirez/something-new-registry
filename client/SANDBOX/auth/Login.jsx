import React from 'react';
import inputHook from '../hooks/inputHook';
import NavBar from '../nav/NavBar';
import { Button, Box, Divider } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const Register = ({ setUser, getUser }) => {
	//GET THE USER INPUT SO WE CAN ISSUE A "GET" TO DB W/ getUser, AND THEN UPDATE APP STATE W/ setUser
	const [emailInput, updateEmail, resetEmail] = inputHook('');
	const [pwInput, updatePw, resetPw] = inputHook('');

	const formSubmit = (e) => {
		e.preventDefault();

		getUser(emailInput, pwInput);
		setUser(emailInput, pwInput);

		resetEmail();
		resetPw();
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="95vh"
			style={{ background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}
			border={1}
		>
			<NavBar />
			<form
				onSubmit={formSubmit}
				style={{
					padding: '3rem 5rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'white',
					boxShadow: '0 0 10px gray',
				}}
			>
				<h1 style={{ fontFamily: 'Verdana, sans-serif' }}>Price Tracker</h1>
				{/* <input value={emailInput} onChange={updateEmail} placeholder="email" /> */}
				<TextField
					id="email"
					label="Email"
					variant="outlined"
					style={{ marginBottom: '1rem', width: '15rem' }}
					onChange={updateEmail}
				/>
				{/* <input
            type="password"
            value={pwInput}
            onChange={updatePw}
            placeholder="password"
				  /> */}
				<TextField
					id="password"
					label="Password"
					variant="outlined"
					style={{ marginBottom: '1rem', width: '15rem' }}
				/>
				<Button
					variant="contained"
					color="primary"
					style={{ marginBottom: '1rem', width: '15rem' }}
				>
					Log In
				</Button>
				<Divider variant="middle" style={{ width: '10rem' }} />
				<Button
					variant="contained"
					style={{
						backgroundColor: '#42b72a',
						color: 'white',
						margin: '1rem 0',
					}}
				>
					Create Account
				</Button>
			</form>
		</Box>
	);
};

export default Register;

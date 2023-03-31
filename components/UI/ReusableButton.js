import React, { useContext } from "react";
import styled from "styled-components";

const ReusableButton = (props) => {
	return (
		<>
			<Button onClick={props.onClick}>{props.nazwa}</Button>
		</>
	);
};

export default ReusableButton;

const Button = styled.button`
	position: relative;
	display: inline-block;
	margin: 15px;
	padding: 10px 30px;
	max-width: 150px;
	text-align: center;
	font-size: 18px;
	letter-spacing: 1px;
	text-decoration: none;
	color: black;
	background: transparent;
	cursor: pointer;
	transition: ease-out 0.5s;
	border: 2px solid #007bff;
	border-radius: 10px;
	box-shadow: inset 0 0 0 0 #007bff;

	@media (max-width: 800px) {
		width: 35vh;
	}
	&:hover {
		color: white;
		box-shadow: inset 0 -100px 0 0 #007bff;
	}

	&:active {
		transform: scale(0.9);
	}
`;

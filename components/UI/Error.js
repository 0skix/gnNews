import React from "react";
import styled from "styled-components";

const Error = ({ message }) => {
	return <ErrorContainer>{message}</ErrorContainer>;
};

const ErrorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
	padding: 1rem;
	background-color: #ff6b6b;
	color: white;
	border-radius: 4px;
	font-size: 1.2rem;
`;

export default Error;

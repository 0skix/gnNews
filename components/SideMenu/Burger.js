import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const Burger = ({ open, setOpen, ...props }) => {
	const isExpanded = open ? true : false;

	return (
		<StyledBurger
			aria-label="Toggle menu"
			aria-expanded={isExpanded}
			open={open}
			onClick={() => setOpen(!open)}
			{...props}
		>
			<span />
			<span />
			<span />
		</StyledBurger>
	);
};

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired,
};

export default Burger;

const StyledBurger = styled.button`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	margin: 20px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	span {
		width: 2rem;
		height: 0.25rem;
		background: ${({ open }) => (open ? "#0D0C1D" : "#0077b6")};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}
		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

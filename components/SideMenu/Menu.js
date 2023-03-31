import React, { useContext, useEffect } from "react";
import { bool } from "prop-types";
import styled from "styled-components";
import CountryList from "../CountryList";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Menu = ({ open, ...props }) => {
	const router = useRouter();
	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;
	const currentCountry = useSelector((state) => state.news.currentCountry);

	useEffect(() => {
		localStorage.setItem("currentCountry", currentCountry);
	}, [currentCountry]);

	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
			<div className="index" tabIndex={tabIndex}>
				<CountryList />
			</div>
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	background: white;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	@media (max-width: 800px) {
		width: 100%;
	}
	.index {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: #0d0c1d;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 800px) {
			font-size: 1.5rem;
			text-align: center;
		}
	}
	.mode {
		font-size: 2rem;
		padding: 2rem 0;
		font-weight: bold;
		color: #0d0c1d;
	}
`;

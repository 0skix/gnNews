import { useOnClickOutside } from "@/hooks/hooks";
import { setCurrentCountry } from "@/store/newsSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import FocusLock from "react-focus-lock";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Burger from "../SideMenu/Burger";
import Menu from "../SideMenu/Menu";
import RadioButton from "./RadioButton";
import ReusableButton from "./ReusableButton";
import { viewActions } from "@/store/viewSlice";

const Navbar = (props) => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const node = useRef();

	const clickHandler = () => {
		dispatch(setCurrentCountry({ country: null }));
	};
	const lang = useSelector((state) => state.view.lang);
	const langHandler = (e) => {
		dispatch(viewActions.changeLang(e.target.value));
	};
	console.log(lang);
	useOnClickOutside(node, () => setOpen(false));
	const menuId = "main-menu";

	useEffect(() => {
		localStorage.setItem("lang", lang);
	}, [lang]);

	return (
		<Wrapper>
			<StyledLink onClick={clickHandler} href="/">
				gnNews
			</StyledLink>
			<Lang value={lang} onChange={langHandler} name="lang">
				<option value="pl">Polski</option>
				<option value="en">English</option>
			</Lang>
			<div className="modal">
				<ReusableButton onClick={props.onClick} nazwa={"Modal"} />
			</div>
			<RadioButton />

			<div ref={node}>
				<FocusLock disabled={!open}>
					<Burger open={open} setOpen={setOpen} aria-controls={menuId} />
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
		</Wrapper>
	);
};

export default Navbar;

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	max-height: 200px;
	padding: 0 20px;
	background-color: white;
	transition: background-color 0.5s ease;
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	-webkit-box-shadow: 0px 0px 14px 1px rgba(66, 68, 90, 1);
	-moz-box-shadow: 0px 0px 14px 1px rgba(66, 68, 90, 1);
	box-shadow: 0px 0px 14px 1px rgba(66, 68, 90, 1);

	@media (max-width: 800px) {
		.modal {
			display: none;
		}
	}
`;
const StyledLink = styled(Link)`
	margin: 10px;
	text-decoration: none;
	font-size: 50px;
	font-weight: 900;
	text-transform: uppercase;
	text-align: center;
	color: #023e8a;
	text-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

const Lang = styled.select`
	max-width: 190px;
	height: 44px;
	color: #05060f;
	border-radius: 0.5rem;

	margin: 15px;
	padding: 0 1rem;
	border: 2px solid #007bff;
	font-size: 1.1rem;
	transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
		color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
		background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
`;

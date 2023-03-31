import React, { useEffect } from "react";
import styled from "styled-components";

import { FaList, FaTh } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/viewSlice";

const RadioButton = () => {
	const dispatch = useDispatch();
	const view = useSelector((state) => state.view.view);

	useEffect(() => {
		localStorage.setItem("view", view);
	}, [view]);

	const handleChange = (event) => {
		dispatch(viewActions.changeView(event.target.value));
	};

	return (
		<Container>
			<IconWrapper checked={view === "list"}>
				<ListIcon />
				<Input
					type="radio"
					name="view"
					value="list"
					checked={view === "list"}
					onChange={handleChange}
				/>
			</IconWrapper>
			<IconWrapper checked={view === "tiles"}>
				<TilesIcon />
				<Input
					type="radio"
					name="view"
					value="tiles"
					checked={view === "tiles"}
					onChange={handleChange}
				/>
			</IconWrapper>
		</Container>
	);
};

export default RadioButton;

const Container = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
`;

const Input = styled.input`
	cursor: pointer;

	position: absolute;
	opacity: 0;
	width: 32px;
	height: 32px;
`;

const IconWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	margin-right: 8px;
	color: ${(props) => (props.checked ? "#fff" : "#333")};
	background-color: ${(props) => (props.checked ? "#007bff" : "transparent")};
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: ${(props) => (props.checked ? "#007bff" : "#f7f7f7")};
		color: ${(props) => (props.checked ? "#fff" : "#333")};
	}
`;

const ListIcon = styled(FaList)`
	font-size: 20px;
`;

const TilesIcon = styled(FaTh)`
	font-size: 20px;
`;

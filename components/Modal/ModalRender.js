import { uiActions } from "@/store/uiSlice";
import Modal from "react-overlays/Modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ModalTab from "./ModalTab";

const ModalRender = (props) => {
	const showModal = useSelector((state) => state.ui.showModal);

	const renderBackdrop = (props) => <Backdrop {...props} />;
	return (
		<div>
			<PositionedModal
				show={showModal}
				onHide={props.onHide}
				renderBackdrop={renderBackdrop}
			>
				<ModalTab />
			</PositionedModal>
		</div>
	);
};

const Backdrop = styled("div")`
	position: fixed;
	z-index: 1040;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000;
	opacity: 0.5;
`;
const PositionedModal = styled(Modal)`
	overflow: auto;
	position: fixed;
	width: 40%;
	height: 40%;
	z-index: 1040;
	background-color: white;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
export default ModalRender;

import React from "react";
import styled from "styled-components";

const ArticleModal = ({ title, author, content, url, onClose }) => {
	return (
		<Overlay onClick={onClose}>
			<Content onClick={(e) => e.stopPropagation()}>
				<Header>
					<Title>{title}</Title>
					<CloseButton onClick={onClose}>X</CloseButton>
				</Header>
				<Meta>
					<Author>{author}</Author>
					<Source href={url} target="_blank" rel="noopener noreferrer">
						Link
					</Source>
				</Meta>
				<Body>{content}</Body>
			</Content>
		</Overlay>
	);
};

const Overlay = styled.div`
	position: fixed;
	overflow: scroll;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	background-color: #fff;
	padding: 16px;
	max-width: 40%;
	max-height: 40%;
	overflow-y: auto;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	margin: 0;
`;

const CloseButton = styled.button`
	background-color: transparent;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
`;

const Meta = styled.div`
	margin-top: 8px;
	margin-bottom: 16px;
	font-size: 0.8rem;
`;

const Author = styled.span`
	margin-right: 8px;
`;

const Source = styled.a`
	font-size: 1rem;
	color: #023e8a;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Body = styled.p`
	font-size: 1rem;
	line-height: 1.5;
	margin: 0;
`;
export default ArticleModal;

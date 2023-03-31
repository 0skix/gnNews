import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Footer = () => {
	const { t } = useTranslation();
	const date = new Date();
	const [dateTime, setDateTime] = useState(date);
	const articles = useSelector((state) => state.news.articles);
	const articleCount = articles.length;
	useEffect(() => {
		const intervalId = setInterval(() => {
			setDateTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);
	const isCountryPage = window.location.pathname.includes("countries");
	return (
		<Wrapper isCountryPage={isCountryPage}>
			{isCountryPage && (
				<Counter>
					{articleCount} {t("articles")}{" "}
				</Counter>
			)}
			<DateDisplay>{dateTime.toLocaleString()}</DateDisplay>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.footer`
	position: ${(props) => (props.isCountryPage ? "relative" : "fixed")};
	bottom: 0;
	left: 0;
	height: 100px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-top: 2px solid #ccc;
`;

const DateDisplay = styled.span`
	font-size: 16px;
	color: #ffffff;
	font-weight: 500;
	background-color: #007bff;
	padding: 8px 16px;
	border-radius: 16px;
	text-align: center;
	margin: 0 1rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Counter = styled.div`
	font-size: 16px;
	color: #ffffff;
	font-weight: 500;
	background-color: #007bff;
	padding: 8px 16px;
	border-radius: 16px;
	text-align: center;
	margin: 0 1rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

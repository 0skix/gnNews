import React from "react";
import { useRouter } from "next/router";
import countryList from "../data/countryList.json";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCountry } from "../store/newsSlice";

import styled from "styled-components";
import Image from "next/image";

const CountryList = () => {
	const currentCountryCode = useSelector((state) => state.news.currentCountry);
	const dispatch = useDispatch();
	const router = useRouter();
	const lang = useSelector((state) => state.view.lang);
	const handleCountryClick = (code) => {
		dispatch(setCurrentCountry(code));
		router.push(`/countries/${code}`);
	};

	return (
		<Wrapper>
			{countryList.map((country) => (
				<div
					key={country.code}
					onClick={() => handleCountryClick(country.code)}
				>
					<Container
						isActive={currentCountryCode === country.code} // Pass the isActive prop based on the current country code
					>
						<Image
							style={{ marginRight: "10px" }}
							src={`https://flagcdn.com/w320/${country.code}.png`}
							width={20}
							height={20}
							alt={`${country.name} flag`}
						/>

						{lang === "pl" ? country.namePL : country.nameEN}
					</Container>
				</div>
			))}
		</Wrapper>
	);
};

export default CountryList;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	width: 100%;
	height: 100%;
`;
const Container = styled.div`
	margin-bottom: 10px;
	cursor: pointer;
	transition: 0.3s;
	color: ${({ isActive }) => (isActive ? "blue" : "black")};
	&:hover {
		transform: scale(1.05);
	}
`;

import React, { useState } from "react";
import styled from "styled-components";

const ModalTab = () => {
	return (
		<Wrapper>
			<h3>Najtrudniejsza część:</h3>
			<p>
				Zdecydowanie najtrudniejszą częścią aplikacji dla mnie było testowanie.
				Wynika to z faktu, że nie mam doświadczenia w testowaniu aplikacji.
				Poświęcony czas na nauke testowania aplikacji był bardzo korzystny.
				Nauczyłem się wielu nowych rzeczy, które mogę wykorzystać w przyszłości.
			</p>
			<p>
				Tak jak już Państwo zauważyli, nie wykorzystałem w aplikacji
				TypeScriptu. Wynika to z braku doświadczenia w tym języku. Jednak wiem
				jak bardzo jest istotny i jak wiele korzyści daje. Kolejnym krokiem w
				mojej karierze Front-end Developer będzie nauka TS.
			</p>
			<h3>Naprzyjemniejsza część:</h3>
			<p>
				Bardzo lubię programować, więc cały proces tworzenia aplikacji był
				bardzo przyjemny. Jestem typem osoby, która lubi rozwiązywać problemy,
				więc każda nowa funkcjonalność sprawia mi dużo frajdy. Dodatkowo nie
				jestem zwolennikiem instalowania dodatkowych bibliotek, jeżeli jestem w
				stanie zrobić coś sam. Dlatego też nie korzystałem z żadnych dodatkowych
				bibliotek w zakresie UI.
			</p>
		</Wrapper>
	);
};

export default ModalTab;

const Wrapper = styled.div`
	padding: 1rem;
	background-color: white;
`;

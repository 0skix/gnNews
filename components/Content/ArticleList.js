import { useState } from "react";
import styled from "styled-components";
import ArticleModal from "../Modal/ArticleModal";
import { useTranslation } from "react-i18next";

const ArticleList = ({ articles }) => {
	const { t } = useTranslation();
	const [selectedArticle, setSelectedArticle] = useState(null);
	return (
		<>
			<List>
				{articles.map((article) => (
					<ListItem
						key={article.title}
						onClick={() => setSelectedArticle(article)}
					>
						<Title>{article.title}</Title>
						<Meta>
							<Source>{article.source.name}</Source>
							<PubDate>
								{new Date(article.publishedAt).toLocaleDateString()}
							</PubDate>
						</Meta>
						<Description>{t("content")}</Description>
					</ListItem>
				))}
			</List>
			{selectedArticle && (
				<ArticleModal
					title={selectedArticle.title}
					author={selectedArticle.author}
					content={selectedArticle.content}
					url={selectedArticle.url}
					onClose={() => setSelectedArticle(null)}
				/>
			)}
		</>
	);
};

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const ListItem = styled.li`
	position: relative;
	counter-increment: list;
	max-width: 45rem;
	margin: 1rem auto;
	padding: 1rem 1rem 1rem;
	box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3);
	border-radius: 0.25rem;
	overflow: hidden;
	background-color: white;

	&:before {
		position: absolute;
		top: 1;
		left: 2;
		width: 2rem;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		background-color: #023e8a;
		border-radius: 50%;
	}

	&:hover {
		cursor: pointer;
		box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.5);
	}
`;

const Title = styled.h2`
	display: flex;
	align-items: baseline;
	margin: 0 0 1rem;
	color: rgb(70 70 70);

	&:before {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 auto;
		margin-right: 1rem;
		width: 3rem;
		height: 3rem;

		padding: 1rem;
		border-radius: 50%;
		background-color: var(--c1);
		color: white;
	}
`;

const Description = styled.p`
	p {
		margin: 0;
		line-height: 1.6;
	}
`;
const Meta = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	color: gray;
	margin-bottom: 0.5rem; ;
`;
const Source = styled.div`
	margin-right: 0.5rem;
`;
const PubDate = styled.div`
	margin-left: 0.5rem;
`;

export default ArticleList;

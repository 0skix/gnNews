import { useState } from "react";
import styled from "styled-components";
import ArticleModal from "../Modal/ArticleModal";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ArticleTiles = ({ articles }) => {
	const { t } = useTranslation();
	const [selectedArticle, setSelectedArticle] = useState(null);

	const [imagesLoaded, setImagesLoaded] = useState(false);

	const handleImageLoad = () => {
		setImagesLoaded(true);
	};
	return (
		<>
			<List>
				{articles.map((article) => (
					<ListItem
						key={article.title}
						onClick={() => setSelectedArticle(article)}
					>
						{article.urlToImage ? (
							<Thumbnail style={{ objectFit: "contain" }}>
								<Image
									src={article.urlToImage}
									alt={article.title}
									fill
									priority
									sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
									onLoad={handleImageLoad}
								/>
							</Thumbnail>
						) : (
							<p>{t("thumbnail")}</p>
						)}
						<Title>{article.title}</Title>
						<Description>{t("content")}</Description>
						<Description>
							{article.teaser ? article.teaser : t("teaser")}
						</Description>
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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 20px;
`;

const ListItem = styled.li`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	counter-increment: list;
	padding: 1rem;
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

	& > div {
		position: relative;
		width: 100%;
		height: 200px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	&:hover {
		cursor: pointer;
		box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.5);
	}
`;

const Thumbnail = styled.div`
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Title = styled.h2`
	margin: 0 0 1rem;
	color: rgb(70 70 70);

	&:before {
		display: flex;
		justify-content: center;
		align-items: center;
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
	margin: 0;
	line-height: 1.6;
`;

export default ArticleTiles;

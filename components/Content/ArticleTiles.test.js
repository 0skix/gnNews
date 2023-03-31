import React from "react";
import { render } from "@testing-library/react";
import ArticleTiles from "./ArticleTiles";

describe("ArticleTiles component", () => {
	test("renders ArticleTiles component without crashing", () => {
		const articles = [
			{
				title: "Test Title",
				source: { name: "Test Source" },
				publishedAt: "2022-01-01T00:00:00Z",
				author: "Test Author",
				content: "Test content",
				url: "https://example.com",
				urlToImage: "https://example.com/image.jpg",
				teaser: "Test teaser",
			},
		];
		render(<ArticleTiles articles={articles} />);
	});
});

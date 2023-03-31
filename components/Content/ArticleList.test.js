import React from "react";
import { render } from "@testing-library/react";
import ArticleList from "./ArticleList";

describe("ArticleList component", () => {
	test("renders ArticleList component without crashing", () => {
		const articles = [
			{
				title: "Test Title",
				source: { name: "Test Source" },
				publishedAt: "2022-01-01T00:00:00Z",
				author: "Test Author",
				content: "Test content",
				url: "https://example.com",
			},
		];
		render(<ArticleList articles={articles} />);
	});
});

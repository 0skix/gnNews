import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ArticleModal from "./ArticleModal";

describe("ArticleModal component", () => {
	test("renders ArticleModal component without crashing", () => {
		const onCloseMock = jest.fn();

		render(
			<ArticleModal
				title="Test Title"
				author="Test Author"
				content="Test content"
				url="https://example.com"
				onClose={onCloseMock}
			/>
		);
	});

	test("closes the modal when clicking on overlay or close button", () => {
		const onCloseMock = jest.fn();

		const { getByText } = render(
			<ArticleModal
				title="Test Title"
				author="Test Author"
				content="Test content"
				url="https://example.com"
				onClose={onCloseMock}
			/>
		);

		fireEvent.click(getByText("X"));
		expect(onCloseMock).toHaveBeenCalledTimes(1);

		fireEvent.click(getByText("Test Title").closest("div"));
		expect(onCloseMock).toHaveBeenCalledTimes(1);
	});
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "./Error";

describe("Error component", () => {
	it("renders the error message correctly", () => {
		const testMessage = "Test error message";
		render(<Error message={testMessage} />);

		const errorMessage = screen.getByText(testMessage);
		expect(errorMessage).toBeInTheDocument();
		expect(errorMessage).toHaveStyle(`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      padding: 1rem;
      background-color: #ff6b6b;
      color: white;
      border-radius: 4px;
      font-size: 1.2rem;
    `);
	});
});

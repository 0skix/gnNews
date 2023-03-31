import { render, fireEvent } from "@testing-library/react";
import ReusableButton from "./ReusableButton";

describe("ReusableButton component", () => {
	test("calls onClick function when clicked", () => {
		const mockOnClick = jest.fn();
		const { getByRole } = render(
			<ReusableButton nazwa="Click me" onClick={mockOnClick} />
		);
		const buttonElement = getByRole("button");
		fireEvent.click(buttonElement);
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	test("renders button with given text", () => {
		const { getByText } = render(<ReusableButton nazwa="Hello" />);
		const buttonElement = getByText(/Hello/i);
		expect(buttonElement).toBeInTheDocument();
	});

	// You can add more tests as needed
});

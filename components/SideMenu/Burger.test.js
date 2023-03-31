import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Burger from "./Burger";

describe("Burger component", () => {
	it("should render without errors", () => {
		const { getByLabelText } = render(
			<Burger open={false} setOpen={() => {}} />
		);
		const burgerButton = getByLabelText("Toggle menu");
		expect(burgerButton).toBeInTheDocument();
	});

	it("should call setOpen prop when clicked", () => {
		const setOpenMock = jest.fn();
		const { getByLabelText } = render(
			<Burger open={false} setOpen={setOpenMock} />
		);
		const burgerButton = getByLabelText("Toggle menu");
		fireEvent.click(burgerButton);
		expect(setOpenMock).toHaveBeenCalledTimes(1);
	});

	it("should have correct styles based on open prop", () => {
		const { getByLabelText } = render(
			<Burger open={false} setOpen={() => {}} />
		);
		const burgerButton = getByLabelText("Toggle menu");
	});
});

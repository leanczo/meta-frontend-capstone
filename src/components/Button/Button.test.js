import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with correct title", () => {
    const title = "Click me";
    render(<Button title={title} />);
    const buttonElement = screen.getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button title="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('prevents default form submission on button click when type is not "submit"', () => {
    const onSubmitMock = jest.fn();
    render(
      <form onSubmit={onSubmitMock}>
        <Button title="Submit" type="button" />
      </form>
    );

    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});

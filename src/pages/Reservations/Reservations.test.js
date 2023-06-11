import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "./Reservations";

// Mock the child components
jest.mock("../../components/Button/Button", () => () => <button data-testid="mocked-button"></button>);
jest.mock("../../components/Popup/Popup", () => () => <div data-testid="mocked-popup"></div>);

describe("Reservations component", () => {
  test("renders the Reservations component and submits the form", () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    // Check if date input is rendered
    const dateInput = screen.getByLabelText("Date");
    expect(dateInput).toBeInTheDocument();

    // Check if time input is rendered
    const timeInput = screen.getByLabelText("Time");
    expect(timeInput).toBeInTheDocument();

    // Check if number of people input is rendered
    const numberOfPeopleInput = screen.getByLabelText("Number of people");
    expect(numberOfPeopleInput).toBeInTheDocument();

    // Check if occasion select is rendered
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toBeInTheDocument();

    // Fill in the form
    fireEvent.change(dateInput, { target: { value: "2023-06-12" } });
    fireEvent.change(timeInput, { target: { value: "12:00" } });
    fireEvent.change(numberOfPeopleInput, { target: { value: "5" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    // Submit the form
    const submitButton = screen.getByTestId("mocked-button");
    fireEvent.click(submitButton);

    // Check if the popup is displayed after form submission
    const popup = screen.getByTestId("mocked-popup");
    expect(popup).toBeInTheDocument();
  });
});

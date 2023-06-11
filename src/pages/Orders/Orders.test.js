import React from "react";
import { render, screen } from "@testing-library/react";
import Orders from "./Orders";

// Ensure that the relative path here matches the actual relative path to the UnderConstruction component.
jest.mock("../Sections/UnderConstruction/UnderConstruction", () => {
  return () => <div data-testid="under-construction">Under Construction</div>;
});

describe("Orders component", () => {
  test("renders the UnderConstruction component", () => {
    render(<Orders />);
    
    const underConstructionElement = screen.getByTestId("under-construction");
    expect(underConstructionElement).toBeInTheDocument();
  });
});

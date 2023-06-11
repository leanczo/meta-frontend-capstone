import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders the UnderConstruction component", () => {
    render(<About />);
    
    const underConstructionElement = screen.getByTestId("under-construction");
    expect(underConstructionElement).toBeInTheDocument();
  });
});

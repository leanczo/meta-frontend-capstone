import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("Menu component", () => {
  test("renders the UnderConstruction component", () => {
    render(<Menu />);
    
    const underConstructionElement = screen.getByTestId("under-construction");
    expect(underConstructionElement).toBeInTheDocument();
  });
});

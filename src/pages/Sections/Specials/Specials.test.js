import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Specials from "./Specials";

jest.mock("../../../components/Button/Button", () => () => <button>Online Menu</button>);
jest.mock("../../../components/FoodCard/FoodCard", () => () => <div>Food Card</div>);

describe("Specials component", () => {
  test("renders the Specials component with the title and Online Menu button", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );

    // Check if the title is rendered
    const specialsTitle = screen.getByText("Specials");
    expect(specialsTitle).toBeInTheDocument();

    // Check if the button is rendered
    const button = screen.getByText("Online Menu");
    expect(button).toBeInTheDocument();
  });
});

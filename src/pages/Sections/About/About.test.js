import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders the About component with the title, subtitle, and images", () => {
    render(<About />);

    // Check if the title is rendered
    const title = screen.getByText("Little Lemon");
    expect(title).toBeInTheDocument();

    // Check if the subtitle is rendered
    const subtitle = screen.getByText("Chicago");
    expect(subtitle).toBeInTheDocument();

    // Check if any images are rendered
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});

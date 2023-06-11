import React from "react";
import { render, screen } from "@testing-library/react";
import UnderConstruction from "./UnderConstruction";

test("renders UnderConstruction component without errors", () => {
  render(<UnderConstruction />);

  // Verificar que los elementos de la interfaz se rendericen correctamente
  expect(screen.getByTestId("under-construction")).toBeInTheDocument();
  expect(screen.getByText("Under Construction")).toBeInTheDocument();
});

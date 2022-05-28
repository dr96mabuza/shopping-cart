import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("tests App page content", () => {
  it("renders correct shopping item and cost", () => {
    render(<App />);
    screen.getByText("rice");
    screen.getByText("R20");
    screen.getByText("spaghetti");
    screen.getByText("R19");
  });
});

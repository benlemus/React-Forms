import { render, screen } from "@testing-library/react";
import App from "./App.jsx";
import { expect, it } from "vitest";

it("should render", () => {
  render(<App />);

  expect(screen.getByText(/Create Custom Boxes:/i)).toBeInTheDocument();
});

it("should match the snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});

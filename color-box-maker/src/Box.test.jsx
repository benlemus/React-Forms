import { render, screen } from "@testing-library/react";
import Box from "./Box.jsx";
import { expect, it } from "vitest";

it("should render", () => {
  render(<Box />);

  expect(screen.getByText(/X/i)).toBeInTheDocument();
});

it("should match the snapshot", () => {
  const { asFragment } = render(<Box />);

  expect(asFragment()).toMatchSnapshot();
});

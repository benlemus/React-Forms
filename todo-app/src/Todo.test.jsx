import { render, screen } from "@testing-library/react";
import Todo from "./Todo.jsx";
import { expect, it } from "vitest";

it("should render", () => {
  render(<Todo />);

  expect(screen.getByText(/X/i)).toBeInTheDocument();
});

it("should match the snapshot", () => {
  const { asFragment } = render(<Todo />);

  expect(asFragment()).toMatchSnapshot();
});

import { render, screen } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm.jsx";
import { expect, it } from "vitest";

it("should render", () => {
  render(<NewTodoForm />);

  expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
});

it("should match the snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);

  expect(asFragment()).toMatchSnapshot();
});

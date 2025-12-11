import { render, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm.jsx";
import { expect, it } from "vitest";

it("should render", () => {
  render(<NewBoxForm />);

  expect(screen.getByText(/Add Box/i)).toBeInTheDocument();
});

it("should match the snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);

  expect(asFragment()).toMatchSnapshot();
});

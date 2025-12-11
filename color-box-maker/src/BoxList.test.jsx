import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BoxList from "./BoxList.jsx";
import { expect, it } from "vitest";

it("should render", () => {
  render(<BoxList />);

  expect(screen.getByText(/Create Custom Boxes:/i)).toBeInTheDocument();
});

it("should match the snapshot", () => {
  const { asFragment } = render(<BoxList />);

  expect(asFragment()).toMatchSnapshot();
});

it("adds a new box", async () => {
  render(<BoxList />);

  await userEvent.type(screen.getByLabelText("Width"), "200px");
  await userEvent.type(screen.getByLabelText("Height"), "100px");
  await userEvent.type(screen.getByLabelText("Background Color"), "purple");
  await userEvent.click(screen.getByText("Add Box"));

  const box = screen.getByTestId("box");

  expect(box).toHaveStyle({
    width: "200px",
    height: "100px",
    backgroundColor: "rgb(128, 0, 128)",
  });
});

it("removes a box", async () => {
  render(<BoxList />);

  await userEvent.type(screen.getByLabelText("Width"), "200px");
  await userEvent.type(screen.getByLabelText("Height"), "100px");
  await userEvent.type(screen.getByLabelText("Background Color"), "purple");
  await userEvent.click(screen.getByText("Add Box"));

  const box = screen.getByTestId("box");

  const removeBtn = screen.getByRole("button", { name: "Remove box" });
  await userEvent.click(removeBtn);

  expect(box).not.toBeInTheDocument();
});

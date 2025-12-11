import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList.jsx";
import { expect, it } from "vitest";

it("should render", () => {
  render(<TodoList />);

  expect(screen.getByText(/Todos:/i)).toBeInTheDocument();
});

it("should match the snapshot", () => {
  const { asFragment } = render(<TodoList />);

  expect(asFragment()).toMatchSnapshot();
});

it("adds a new todo", async () => {
  render(<TodoList />);

  expect(screen.queryByText("Walk the dog")).not.toBeInTheDocument();

  const input = screen.getByLabelText("Todo");
  const btn = screen.getByRole("button", { name: /Add Todo/i });

  await userEvent.type(input, "Walk the dog");
  await userEvent.click(btn);

  expect(screen.getByText("Walk the dog")).toBeInTheDocument();
});

it("removes a todo", async () => {
  render(<TodoList />);

  await userEvent.type(screen.getByLabelText("Todo"), "Feed the cat");
  await userEvent.click(screen.getByRole("button", { name: /Add Todo/i }));

  expect(screen.queryByText("Feed the cat")).toBeInTheDocument();

  const removeBtn = screen.getByRole("button", { name: /X/i });
  await userEvent.click(removeBtn);

  expect(screen.queryByText("Feed the cat")).not.toBeInTheDocument();
});

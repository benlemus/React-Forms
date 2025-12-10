import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ msg: "" });

  const handleChange = (e) => {
    const todoInput = e.target.value;

    setTodo({ msg: todoInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({ msg: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo</label>
      <input
        type="text"
        id="todoInput"
        name="todo"
        placeholder="New Todo"
        value={todo.msg}
        onChange={handleChange}
      />

      <button>Add Todo</button>
    </form>
  );
}

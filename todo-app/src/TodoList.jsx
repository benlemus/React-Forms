import { useState } from "react";
import NewTodoForm from "./NewTodoForm.jsx";
import Todo from "./Todo.jsx";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { msg: todo.msg, id: uuidv4() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="form-container">
        <NewTodoForm addTodo={addTodo} />
      </div>
      <h2>Todos:</h2>
      <div className="todos">
        {todos.map((t) => (
          <Todo msg={t.msg} key={t.id} removeTodo={() => removeTodo(t.id)} />
        ))}
      </div>
    </>
  );
}

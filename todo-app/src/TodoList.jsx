import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const LOCALSTORAGE_KEY = "user-todos";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALSTORAGE_KEY);
    if (stored) {
      setTimeout(() => {
        setTodos(JSON.parse(stored));
      }, 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), msg: todo.msg, completed: false },
    ]);
  };

  const updateTodo = (id, newMsg) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, msg: newMsg } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, deleting: true } : t))
    );

    setTimeout(() => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    }, 600);
  };

  return (
    <div className="todos">
      <h1>My Todos</h1>
      <div className="form-container">
        <NewTodoForm addTodo={addTodo} />
      </div>

      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <div>
          {todos.map((t) => (
            <div
              key={t.id}
              className={t.deleting ? "deleting" : ""}
              style={t.deleting ? { overflow: "hidden" } : {}}
            >
              <Todo
                id={t.id}
                msg={t.msg}
                completed={t.completed || false}
                onUpdate={updateTodo}
                onDelete={deleteTodo}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

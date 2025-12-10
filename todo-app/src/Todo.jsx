import "./Todo.css";

export default function Todo({ msg, removeTodo }) {
  return (
    <div className="todo">
      <p>{msg}</p>
      <button onClick={removeTodo}>X</button>
    </div>
  );
}

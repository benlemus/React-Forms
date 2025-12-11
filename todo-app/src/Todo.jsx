import { useState } from "react";

export default function Todo({
  id,
  msg,
  completed: initialCompleted,
  onUpdate,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(msg);
  const [completed, setCompleted] = useState(initialCompleted);

  const handleSave = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onUpdate(id, editText.trim());
      setIsEditing(false);
    }
  };

  const toggleComplete = () => {
    setCompleted((c) => !c);
  };

  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      {isEditing ? (
        <form
          onSubmit={handleSave}
          style={{ flex: 1, display: "flex", gap: "0.5rem" }}
        >
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            style={{ flex: 1, padding: "0.5rem" }}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className="todo-text">{msg}</span>
          <div className="actions">
            <button onClick={toggleComplete}>
              {completed ? "Undo" : "Mark as completed"}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button
              style={{ background: "#ef4444", color: "white" }}
              onClick={() => onDelete(id)}
            >
              X
            </button>
          </div>
        </>
      )}
    </div>
  );
}

import { useState } from "react";

export default function Form({ onAddItems, items }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!todo) return;

    if (items.some((item) => item.todo === todo)) return;

    const newItem = { todo, isCompleted: false, id: Date.now() };

    onAddItems(newItem);

    setTodo("");
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="add-task" type="submit">
        Add
      </button>
    </form>
  );
}

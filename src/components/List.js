import { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("all");

  const filterItems = (sortType) => {
    switch (sortType) {
      case "pending":
        return items.filter((item) => !item.isCompleted);
      case "completed":
        return items.filter((item) => item.isCompleted);
      default:
        return items;
    }
  };

  const sortedItems = filterItems(sortBy);

  return (
    <>
      <div className="controls">
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={() => onClearItems()} className="clear-btn">
          Clear All
        </button>
      </div>
      <ul className="task-box">
        {sortedItems.map((task) => (
          <Item
            key={task.id}
            task={task}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </>
  );
}

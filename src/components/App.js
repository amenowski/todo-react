import { useState } from "react";
import "../index.css";
import Form from "./Form";
import List from "./List";

export default function App() {
  const [items, setItem] = useState([]);

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("Are u sure u want to clear list?");
    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Form onAddItems={handleAddItem} items={items} />
      <List
        items={items}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
    </div>
  );
}

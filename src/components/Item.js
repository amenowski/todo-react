export default function Item({ task, onDeleteItem, onToggleItem }) {
  return (
    <li className="task">
      <label>
        <input
          type="checkbox"
          value={task.isCompleted}
          checked={task.isCompleted}
          onChange={() => {
            onToggleItem(task.id);
          }}
        />
        <p style={task.isCompleted ? { textDecoration: "line-through" } : {}}>
          {task.todo}
        </p>
      </label>
      <div class="settings">
        <i onClick={() => onDeleteItem(task.id)} class="uil uil-trash"></i>
      </div>
    </li>
  );
}

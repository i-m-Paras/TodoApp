const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{todo.task}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

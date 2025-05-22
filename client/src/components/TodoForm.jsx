import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" style={{ marginTop: '10px', width: '100%' }}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;

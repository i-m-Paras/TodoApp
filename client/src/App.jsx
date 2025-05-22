import './index.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (task) => {
    const res = await axios.post('http://localhost:5000/todos', { task });
    setTodos([...todos, res.data]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSummarize = async () => {
    try {
      const res = await axios.post('http://localhost:5000/summarize');
      alert(res.data.message);
      setMessage(res.data.message);
    } catch (err) {
      setMessage('❌ Failed to send summary.');
    }
  };

  return (
    <div className="container">
      <h1> My Todo List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
      <div style={{ display: 'flex', justifyContent: 'center' , padding: '50px'}}>
          <button  onClick={handleSummarize}>Summarize & Send to Slack</button>
      </div>
    
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;

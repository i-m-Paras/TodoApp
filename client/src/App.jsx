import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo, summarizeTodos } from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (task) => {
    const res = await addTodo(task);
    setTodos([...todos, res.data]);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSummarize = async () => {
    try {
      const res = await summarizeTodos();
      alert(res.data.message);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("❌ Failed to send summary.");
    }
  };

  return (
    <div className="container">
      <h1> My Todo List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
      <div
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        <button onClick={handleSummarize}>Summarize & Send to Slack</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;

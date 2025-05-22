const express = require('express');
const router = express.Router();
const { getTodos, addTodo, deleteTodo } = require('../services/todos');

// GET /todos – Fetch all todos
router.get('/', async (req, res) => {
  try {
    const todos = await getTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /todos – Add a new todo
router.post('/', async (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });

  try {
    const newTodo = await addTodo(task);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /todos/:id – Delete a todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await deleteTodo(id);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const supabase = require('../config/supabase');

// GET all todos
async function getTodos() {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) throw new Error('Failed to fetch todos: ' + error.message);
  return data;
}

// ADD a todo
async function addTodo(task) {
  const { data, error } = await supabase.from('todos').insert([{ task }]).select().single();
  if (error) throw new Error('Failed to add todo: ' + error.message);
  return data;
}

// DELETE a todo
async function deleteTodo(id) {
  const { error } = await supabase.from('todos').delete().eq('id', id);
  if (error) throw new Error('Failed to delete todo: ' + error.message);
}

module.exports = { getTodos, addTodo, deleteTodo };

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import image from './td.png';

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(initialTodos.length ? Math.max(...initialTodos.map(todo => todo.id)) + 1 : 0);

  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (text) => {
    const newTodo = { id: nextId, text, completed: false };
    const updatedTodos = [...todos, newTodo].sort((a, b) => a.text.localeCompare(b.text));
    setTodos(updatedTodos);
    setNextId(nextId + 1); // Increment the nextId for the next task
    setInputValue('');
    saveTodosToLocalStorage(updatedTodos);
    toast.success('Todo added!');
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    toast.info(`Todo ${updatedTodos.find(todo => todo.id === id).completed ? 'completed' : 'incomplete'}`);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    toast.error('Todo removed!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue.trim());
  };

  return (
    <div className="app">
    <img src={image} alt='todo'  width='60'/>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit} className="todoForm">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder="Add a new task"
        />
        <button type="submit" className="addButton">Add</button>
      </form>
      <ul className="todoItems">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li className="todoItem">
      <span
        className={`taskText ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} className="removeButton">
        Remove
      </button>
    </li>
  );
};

export default App;

import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const AssignmentToDo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: inputValue,
          completed: false,
        }
      ]);
      setInputValue('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border bg-white border-gray-300 rounded-l-md focus:outline-none"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default AssignmentToDo;

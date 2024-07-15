import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 p-4 mb-2 rounded-lg shadow-md">
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
        {todo.text}
      </span>
      <div className="ml-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        <button
          onClick={handleDeleteTodo}
          className="ml-2 text-sm text-red-500 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

import React from 'react';
import TodoItem from '../AssignmentTodo/TodoItem.jsx';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
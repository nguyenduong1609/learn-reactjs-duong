import React from 'react';
import TodoList from "./components/TodoList"







function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: 'Eat'
    },
    {
      id: 2,
      title: 'sleep'
    },
    {
      id: 3,
      title: 'code'
    }
  ]

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList = {todoList} />
    </div>
  );
}

export default TodoFeature;
import React, { useState } from 'react';
import TodoList from "./components/TodoList"


function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'code',
      status: 'new'
    }
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const hanletodoClick = (todo,idx) =>{
    const newTodoList = [ ...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
    // console.log(todo, idx);
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList = {todoList} onTodoClick={hanletodoClick} />
    </div>
  );
}

export default TodoFeature;
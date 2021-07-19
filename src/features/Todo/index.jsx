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
  const [filteredStatus, setFilteredStatus] = useState('all')
  
  const hanletodoClick = (todo,idx) =>{
    const newTodoList = [ ...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };
  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };

  const renderedTodoList = todoList.filter(todo => filteredStatus==='all' || filteredStatus === todo.status);
  console.log(renderedTodoList);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList = {renderedTodoList} onTodoClick={hanletodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
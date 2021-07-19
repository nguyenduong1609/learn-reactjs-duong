import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
}

function TodoList({todoList, onTodoClick}) {

  const hanleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;
    onTodoClick(todo,idx);
  }

  return (
    <ul className='todo-list'>
      {todoList.map((todo, idx) =>(
        <li 
          key={todo.id}
          className={ classnames({ 
            'todo-item': true,
            completed: todo.status === 'completed' 
          })}
          onClick = {() => hanleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  const handleClick = () => {
    props.clearCompleted();
    console.log('TodoList handleClick');
  }
  console.log(props);
  return (
    <div>
      <div className="todo-list">
        {props.todos.map(todo => (
          <Todo 
            toggleTodo={props.toggleTodo} 
            key={todo.id} 
            todo={todo}
          />
        ))}
      </div>
      <button onClick={handleClick} className='clear-btn'>
        Clear Done
      </button>
    </div>
  );
}

export default TodoList;
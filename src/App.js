import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    task: 'Open todo list app', 
    id: 1, 
    completed: false
  }, 
  {
    task: 'Look at todo list app', 
    id: 2, 
    completed: false
  }, 
  {
    task: 'Ponder todo list app', 
    id: 3, 
    completed: false
  }, 
];


class App extends React.Component {
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
    this.setState = this.setState.bind(this);
  }

  toggleTask = (clickedId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        return todo.id === clickedId ? { ...todo, completed: !todo.completed} : todo;
      }),
    });
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
          todos={this.state.todos}
          toggleTask={this.toggleTask}
          setState={this.setState}
        />
      </div>
    );
  }
}

export default App;

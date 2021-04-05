import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTodo = id => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id){
        return( {
          ...todo, 
          completed: !todo.completed
        });
      } else {
        return todo;
      }
    })
    this.setState({
      todos: newTodos
    })
  }
  
  addTodo = (todoName) => {
    this.setState({
      todos: [
        ...this.state.todos, {
          task: todoName, 
          id: uuidv4(), 
          completed: false
        }
      ]
    })
  }
  
  clearCompleted = e => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
          clearCompleted={this.clearCompleted}
          toggleTodo={this.toggleTodo}
          todos={this.state.todos} 
        />
      </div>
    );
  }
}

export default App;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Task from './Todo';


class TodoList extends React.Component {

  // Constructor not needed, but why?

  clearCompleted = (e) => {
    e.preventDefault();
    const updatedTodoList = this.props.todos.filter((task) => !task.completed);
    this.props.setState({todos: updatedTodoList});
  }

  render() {
    return (
      <div>
        <div className="todo-list">
          {this.props.todos.map(task => (
            <Task
              key={task.id}
              task={task}
              toggleTask={this.props.toggleTask}
            />
          ))}
          </div>
        <button className="clear-btn" onClick={this.clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  }
}

export default TodoList;
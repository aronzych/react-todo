import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  counter = 0;
  state = {
    error: false,
    tasks: [
      // {
      //   id: 1,
      //   text: "Zrobić zupę",
      //   important: true,
      //   complete: false,
      //   date: "30-01-2000",
      //   completeDate: ""
      // },
      // {
      //   id: 2,
      //   text: "Kupić twaróg",
      //   important: false,
      //   complete: false,
      //   date: "30-01-2000",
      //   completeDate: ""
      // },
      // {
      //   id: 3,
      //   text: "Umyć psa",
      //   important: false,
      //   complete: true,
      //   date: "30-01-2000",
      //   completeDate: "30-01-2001"
      // }
    ]
  };

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };

  completeTask = id => {
    const date = new Date().toISOString().slice(0, 10);
    let tasks = [...this.state.tasks];
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.complete = true;
        task.completeDate = date;
      }
      return task;
    });
    this.setState({ tasks });
  };

  addTask = (value, checked, calendar) => {
    const task = {
      id: this.counter,
      text: value,
      important: checked,
      complete: false,
      date: calendar,
      completeDate: ""
    };

    const tasks = [...this.state.tasks, task];
    this.setState({
      tasks
    });

    this.counter++;
  };

  render() {
    return (
      <div className="container container-md shadow p-3 mb-5 bg-white rounded">
        <h1 className="display-3">Todos</h1>
        <hr />
        <AddTask add={this.addTask} error={this.state.error} />
        <hr />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
        />
      </div>
    );
  }
}

export default App;

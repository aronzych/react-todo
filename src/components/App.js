import React, { Component } from "react";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { id: 1, text: "Zrobić zupę", important: false, done: false },
      { id: 2, text: "Kupić twaróg", important: false, done: false },
      { id: 3, text: "Umyć psa", important: false, done: false }
    ]
  };

  deleteTask = () => {
    console.log(this.id);
  };

  render() {
    return (
      <>
        <h1>Twoja lista</h1>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </>
    );
  }
}

export default App;

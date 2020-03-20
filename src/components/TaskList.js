import React from "react";
import Task from "./Task";

const TaskList = props => {
  const tasks = props.tasks.map(task => (
    <Task text={task.text} key={task.id} deleteTask={props.deleteTask} />
  ));

  return tasks;
};

export default TaskList;

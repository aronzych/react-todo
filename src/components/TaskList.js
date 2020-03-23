import React from "react";
import Task from "./Task";

const TaskList = props => {
  const complete = props.tasks.filter(task => task.complete === true);
  const completeTasks = complete.map(task => (
    <Task task={task} key={task.id} deleteTask={props.deleteTask} />
  ));
  completeTasks.reverse();

  const todo = props.tasks.filter(task => task.complete !== true);
  const todoTasks = todo.map(task => (
    <Task
      task={task}
      key={task.id}
      deleteTask={props.deleteTask}
      completeTask={props.completeTask}
    />
  ));
  todoTasks.reverse();

  return (
    <>
      <h2>uncompleted:</h2>
      <ul className="list-group">{todoTasks}</ul>
      <hr />
      <h2>completed:</h2>
      <ul className="list-group">{completeTasks}</ul>
    </>
  );
};

export default TaskList;

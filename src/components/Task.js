import React from "react";

const Task = props => {
  return (
    <li>
      {props.text}
      <button onClick={props.doneTask}>
        DONE
      </button>
      <button onClick={(props.id) => props.deleteTask(id)>
        X
      </button>
    </li>
  );
};

export default Task;

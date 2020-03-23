import React from "react";

const Task = props => {
  const { text, id, important, complete, date, completeDate } = props.task;

  if (!complete) {
    return (
      // <ListGroup.Item className={important ? "list-group-item list-group-item-warning" : "list-group-item list-group-item-primary"}>
      <li
        className={
          important
            ? "list-group-item list-group-item-danger"
            : "list-group-item"
        }
      >
        <div className="row">
          <div className="col">{text}</div>
          <div className="col-xl-auto col-m text-right font-weight-bolder">
            {" "}
            dead-line: {date}
          </div>
          <div className="col-xl-auto col-m text-right">
            <button
              className="btn btn-success"
              onClick={() => props.completeTask(id)}
            >
              DONE
            </button>
            <button
              className="btn btn-danger"
              onClick={() => props.deleteTask(id)}
            >
              &times;
            </button>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col text-muted">{text}</div>
          <div className="col-xl-auto col-m text-right text-muted font-italic">
            {" "}
            completed: {completeDate}
          </div>
          <div className="col-xl-auto col-m text-right">
            {" "}
            <button
              className="btn btn-danger"
              onClick={() => props.deleteTask(id)}
            >
              X
            </button>
          </div>
        </div>
      </li>
    );
  }
};

export default Task;

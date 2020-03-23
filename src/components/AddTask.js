import React, { Component } from "react";

const minDate = new Date().toISOString().slice(0, 10);

class AddTask extends Component {
  state = {
    value: "",
    checked: false,
    calendar: minDate,
    error: false
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCheck = e => {
    this.setState(prev => ({ checked: !prev.checked }));
  };

  handleCalendar = e => {
    this.setState({
      calendar: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value, checked, calendar } = this.state;
    if (value) {
      this.props.add(value, checked, calendar);
      this.setState({
        value: "",
        checked: false,
        calendar: minDate,
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheck}
          />
          important?
        </label>
        <label>
          dead line:
          <input
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            checked={this.state.checked}
            value={this.state.calendar}
            onChange={this.handleCalendar}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          add
        </button> */}

        <div className="input-group">
          {/* <div className="input-group-prepend">
            <span className="input-group-text">New task:</span>
          </div> */}
          <input
            type="text"
            placeholder="Write a task..."
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="date"
            className="form-control"
            min={minDate}
            checked={this.state.checked}
            value={this.state.calendar}
            onChange={this.handleCalendar}
          />
          <div className="input-group-append" id="button-addon4">
            <button
              className={
                this.state.checked
                  ? "btn btn-danger"
                  : "btn btn-outline-secondary"
              }
              type="button"
              onClick={this.handleCheck}
            >
              {this.state.checked ? "Important!" : "Important?"}
            </button>
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </div>
        </div>
        {this.state.error && (
          <div className="alert alert-danger" role="alert">
            Task field can't be empty!
          </div>
        )}
      </form>
    );
  }
}

export default AddTask;

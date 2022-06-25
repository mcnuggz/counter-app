import React, { Component } from "react";

class Counter extends Component {
  //state is local data for the component, cannot be accessed by outside components

  /*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }
    return (
      <ul>
        {this.state.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );
  }
*/
  render() {
    return (
      <div>
        {/*cannot use class for elements since it's a reserved keyword for jsx*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

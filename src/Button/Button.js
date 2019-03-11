import React from "react";
import "./Button.css";
import calculator from "/src/code/calculator.js";

class Button extends React.Component {
  handleClick = () => {
    //debugger;
    //calculator(name.target.value);
    this.props.clickHandler(this.props.name);
  };
  render() {
    return (
      <input type="button" value={this.props.name} onClick={this.handleClick} />
    );
  }
}

export default Button;

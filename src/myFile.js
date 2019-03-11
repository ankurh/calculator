import React from "react";
import Display from "./Display/Display.js";
import ButtonPan from "./Button/ButtonPan.js";

import calculator from "./code/calculator";
import "./styles.css";

class myFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }

  handleClick = buttonName => {
    this.setState(calculator(this.state, buttonName));
    //console.log(buttonName);
  };
  render() {
    return (
      <div className="calculator">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPan myClick={this.handleClick} />
      </div>
    );
  }
}
export default myFile;

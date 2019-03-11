import React from "react";

import Button from "./Button";

import calculator from "/src/code/calculator";
//import ButtonOther from "./Button"

class ButtonPan extends React.Component {
  handleClick = name => {
    // this.setState(calculator(name));
    //console.log(name);
    this.props.myClick(name);
  };
  render() {
    return (
      <div className="buttonGroup">
        <div>
          <Button name="C" clickHandler={this.handleClick} />
          <Button name="BS" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="/" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="X" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} />
          <Button name="00" clickHandler={this.handleClick} />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPan;

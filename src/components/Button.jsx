import React, { Component } from 'react';
import '../assets/main.scss';

class Button extends Component {
  handleClick() {
    alert('123');
    console.log(123);
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleClick.bind(this)}>{this.props.title}</button>
      </div>
    );
  }
}

export default Button;
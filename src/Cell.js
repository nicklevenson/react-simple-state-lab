import React, { Component } from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super()
    this.state ={
      color: props.value
    }
  }
  render() {
    return (<div style={{backgroundColor: `${this.state.color}`}} className="cell" onClick={this.changeColor}></div>)
  }

  changeColor = () => {
    this.setState({
      color: "#333"
    })
  }

}
import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor()
    }
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.state.changeColor}/>
        <Child handleColorChange={this.state.changeColor}/>
      </div>
    )
  }
}

export default Parent

import React, { Component } from 'react'
import Input from'./Input.js'

export default class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.ComponentRef =  React.createRef()
    }
    clickHandler = () =>{
        this.ComponentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.ComponentRef} />
          <button clickHandler={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

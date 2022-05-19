import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Change myself"
      }
    }
    ChangeEvent(event){
        this.setState({
            name:"i have changes"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.ChangeEvent()}}>clickMe</button>
        </div>
    )
  }
}

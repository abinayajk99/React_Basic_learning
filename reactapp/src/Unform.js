import React, { Component } from 'react'

export default class Unform extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
         
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();

    }
    handleSubmit(event){
        event.preventDefault();
        alert(this.input.current.value);
    }
  render() {
    return (
      <div>
          <h1>unform</h1>
          <form onSubmit={this.handleSubmit}>
              Name: <input type="text" ref={this.input}/>
              <input type="submit" value="submit"/>
          </form>
      </div>
    )
  }
}

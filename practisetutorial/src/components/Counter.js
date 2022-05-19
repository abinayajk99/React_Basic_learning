import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    CounterEvent(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{console.log("callback func",this.state.count)})
        // console.log(this.state.count);
        this.setState(prevState =>({
            count:prevState.count+1
        }

        ))
    }
    CountFive(){
        this.CounterEvent();
        this.CounterEvent();
        this.CounterEvent();
        this.CounterEvent();
        this.CounterEvent();
    }
  render() {
    return (
      <div>
          <h1>Count : {this.state.count}</h1>
          <button onClick={()=>{this.CountFive()}}>clickme!!</button>
      </div>
    )
  }
}

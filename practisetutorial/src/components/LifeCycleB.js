import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Hello'
      }
      console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDrivedStateFromProps")
        return null

    }
    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }
  render() {
      console.log("LifeCycleB render")
    return (
      <div>
          <h1>LifeCycleB</h1>
      </div>
    )
  }
}

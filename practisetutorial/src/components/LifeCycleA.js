import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Hello'
      }
      console.log("LifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDrivedStateFromProps")
        return null

    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
  render() {
      console.log("LifeCycleA render")
    return (
      <div>
          <h1>LifeCycleA</h1>
          <LifeCycleB/>
      </div>
    )
  }
}

import React, { Component } from 'react'

export const PropFunc = (props) =>{
    return <h1>{props.name}</h1>
}



export default class PropsClassfn extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

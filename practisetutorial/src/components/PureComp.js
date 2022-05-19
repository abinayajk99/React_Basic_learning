//rpce

import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
      console.log("Purecomponent")
    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}

export default PureComp
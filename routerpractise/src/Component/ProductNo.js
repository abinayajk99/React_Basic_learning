import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductNo extends Component {
    
  render() {
    return (
      <div>
          <Link to={`/product/${this.props.products}`}>{this.props.products}</Link>
      </div>
    )
  }
}

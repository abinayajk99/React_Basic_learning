import React, { Component } from 'react'
import ProductItems from './ProductItems'

export default class Product extends Component {
  render() {
    return (
      <div>
          <h1>Product Component</h1>   
          <ProductItems/>
    </div>
      
    )
  }
}

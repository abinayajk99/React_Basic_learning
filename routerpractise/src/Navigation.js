import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      
      // <nav className='navStyle'>
        <ul className='nav-line'>
            <Link to ="product" className='link-nav'>  <li>Product</li></Link>
            <Link to ="contact" className='link-nav'><li>Contact</li></Link>
            <Link to ="about" className='link-nav'><li>About</li></Link>
            <Link to = "table" className='link-nav'><li>Table</li></Link>
            
        </ul>
    // </nav>
      
    )
  }
}

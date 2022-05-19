import React, { Component } from 'react'
import {Link, Outlet} from 'react-router-dom'
import ProductNo from './ProductNo'
import '../App.css';

export default class ProductItems extends Component {
    constructor(props) {
      super(props)
    
      this.state= {
        products : [{
            "productno": 111,
            "name": "IPhone",
            "manufacturer": "Apple",
            "price": "Rs. 45000"
            },
            {
            "productno": 121,
            "name": "IPad",
            "manufacturer": "Apple",
            "price": "Rs. 34500"
            },
            {
            "productno": 131,
            "name": "IPod",
            "manufacturer": "Apple",
            "price": "Rs. 32222"
            },
            {
            "productno": 141,
            "name": "Moto G",
            "manufacturer": "Motorola",
            "price": "Rs. 35678"
            },
            {
             "productno": 151,
            "name": "Moto X",
            "manufacturer": "Motorola",
            "price": "Rs. 43434"
            }]
        }
    }
    render() {
        // const mystyle = {
        //     backgroundColor: "green",
        // };
        const ArrayItems = this.state.products.map(
            (item,index) => {
                return (
                    // <Link to={`/product/${item.name}`}><ul key={index}>{item.productno}</ul></Link>
                    <tr><td><ProductNo key={item.productno} products={item.productno}></ProductNo></td></tr>
                    
                );
            }
        )
    return (
      <div>
          <br></br>
          <table  style = {{width: "25%"}}>
            <tbody>
                <tr style={{ backgroundColor:"greenyellow" }}><th>ProductItems</th></tr>
                {ArrayItems} 
            </tbody>
          </table>
          <Outlet/>
        
    </div>
    )
  }
}
